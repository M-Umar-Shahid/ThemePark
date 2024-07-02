const express = require("express");
let router = express.Router();
const db = require("../db_connection");

router.get("/", (req, res) => {
  db.all("SELECT * FROM rides", [], (err, rows) => {
    if (err) {
      console.error("Error fetching rides:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.render("Rides", { rides: rows });
    }
  });
});

router.get("/:id", (req, res) => {
  const rideId = req.params.id;
  db.get("SELECT * FROM rides WHERE id = ?", [rideId], (err, row) => {
    if (err) {
      console.error("Error fetching ride:", err);
      res.status(500).send("Internal Server Error");
    } else {
      db.all(
        "SELECT * FROM rides ORDER BY RANDOM() LIMIT 3",
        [],
        (err, randomRides) => {
          if (err) {
            console.error("Error fetching random rides:", err);
            res.status(500).send("Internal Server Error");
          } else {
            res.render("RideDetails", { ride: row, randomRides: randomRides });
          }
        }
      );
    }
  });
});

module.exports = router;
