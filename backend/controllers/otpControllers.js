const db = require("../config/db");
const axios = require("axios");
require("dotenv").config();

// Temporary OTP storage (can be replaced with Redis for production)
const otpStorage = {};

exports.sendOTP = (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ error: "Phone number is required!" });
  }

  // Generate a 4-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000);
  otpStorage[phone] = otp;

  // Prepare Msg91 API request
  const data = {
    mobiles: phone,
    authkey: process.env.MSG91_AUTH_KEY,
    sender: process.env.MSG91_SENDER_ID,
    route: process.env.MSG91_ROUTE,
    template_id: process.env.MSG91_TEMPLATE_ID,
    otp: otp,
  };

  // Send OTP via Msg91
  axios
    .post("https://control.msg91.com/api/v5/otp", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      res.status(200).json({ message: "OTP sent successfully!" });
    })
    .catch((err) => {
      console.error("OTP Sending Error:", err.response?.data || err.message);
      res.status(500).json({ error: "Failed to send OTP" });
    });
};

exports.verifyOTP = (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({ error: "Phone and OTP are required!" });
  }

  if (otpStorage[phone] && otpStorage[phone] == otp) {
    delete otpStorage[phone]; // Remove OTP after successful verification

    // Update user's verification status in the database
    db.query("UPDATE users SET is_verified = 1 WHERE phone = ?", [phone], (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });

      res.status(200).json({ message: "Phone number verified successfully!" });
    });
  } else {
    res.status(400).json({ error: "Invalid OTP!" });
  }
};
