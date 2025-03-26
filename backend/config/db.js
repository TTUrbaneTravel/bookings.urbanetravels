const mysql = require("mysql");

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

module.exports = db;
