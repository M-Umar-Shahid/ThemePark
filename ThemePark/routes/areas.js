const express = require("express");
let router = express.Router();
const db = require("../connection"); 

router.get("/",async (req, res) => {
    db.all("SELECT * FROM areas", [], (err, rows) => {
      if (err) {
        console.error("Error fetching areas:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.render("Areas", { areas: rows });
      }
    });
  });


  router.get("/:id", (req, res) => {
    const areaId = req.params.id;
    db.get("SELECT * FROM areas WHERE id = ?", [areaId], (err, area) => {
      if (err) {
        console.error("Error fetching area:", err);
        res.status(500).send("Internal Server Error");
      } else {
        db.all(
          "SELECT * FROM rides WHERE area_id = ?",
          [areaId],
          (err, rides) => {
            if (err) {
              console.error("Error fetching rides:", err);
              res.status(500).send("Internal Server Error");
            } else {
              res.render("AreaDetails", { area, rides });
            }
          }
        );
      }
    });
  });
















module.exports = router;