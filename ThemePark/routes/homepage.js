const express = require("express");
let router = express.Router();
const db = require("../db_connection");

router.get("/", (req, res) => {
  db.all("SELECT * FROM areas LIMIT 3", [], (err, areas) => {
    if (err) {
      console.error("Error fetching areas:", err);
      res.status(500).send("Internal Server Error");
    } else {
      db.all("SELECT * FROM rides LIMIT 3", [], (err, rides) => {
        if (err) {
          console.error("Error fetching rides:", err);
          res.status(500).send("Internal Server Error");
        } else {
          res.render("Homepage", { areas: areas, rides: rides });
        }
      });
    }
  });
});

module.exports = router;
