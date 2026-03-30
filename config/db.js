const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "school_management",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = connection;
