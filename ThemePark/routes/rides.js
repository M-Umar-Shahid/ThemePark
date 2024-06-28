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
      res.render("RideDetails", { ride: row });
    }
  });
});













module.exports = router;