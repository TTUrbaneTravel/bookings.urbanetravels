const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
const PORT = 2025;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "UrbaneTravels",
});

db.connect((err) => {
  if (err) {
    console.error("Database Connection Error:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL Database!");
});

app.post("/register", (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("Database Error (SELECT):", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: "User already exists!" });
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.error("Hashing Error:", err);
        return res.status(500).json({ error: "Error hashing password" });
      }

      db.query(
        "INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)",
        [name, email, hash, phone],
        (err, result) => {
          if (err) {
            console.error("Database Error (INSERT):", err);
            return res.status(500).json({ error: "Database error" });
          }
          res.status(201).json({ message: "User registered successfully!" });
        }
      );
    });
  });
});
// User Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("Database Error (SELECT LOGIN):", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(400).json({ error: "User not found!" });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error("Password Compare Error:", err);
        return res.status(500).json({ error: "Error verifying password" });
      }

      if (!isMatch) {
        return res.status(401).json({ error: "Incorrect password!" });
      }

      res.status(200).json({ message: "Login successful!", user });
    });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
