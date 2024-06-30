const sqlite3 = require('sqlite3').verbose();


// Set up the database connection
const db = new sqlite3.Database("./theme_park.db", (err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
    } else {
      console.log("Connected to the SQLite database.");
    }
  });
  
  module.exports = db;