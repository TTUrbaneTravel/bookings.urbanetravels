const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (results.length > 0) {
      return res.status(400).json({ error: "User already exists!" });
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return res.status(500).json({ error: "Error hashing password" });

      db.query(
        "INSERT INTO users (name, email, password, phone, is_verified) VALUES (?, ?, ?, ?, 0)",
        [name, email, hash, phone],
        (err, result) => {
          if (err) return res.status(500).json({ error: "Database error" });

          res.status(201).json({ message: "User registered! Verify OTP to activate." });
        }
      );
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (results.length === 0) {
      return res.status(400).json({ error: "User not found!" });
    }

    const user = results[0];

    if (user.is_verified === 0) {
      return res.status(401).json({ error: "Please verify OTP first!" });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: "Error verifying password" });

      if (!isMatch) {
        return res.status(401).json({ error: "Incorrect password!" });
      }

      res.status(200).json({ message: "Login successful!", user });
    });
  });
};
