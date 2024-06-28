const express = require("express");
let router = express.Router();
const db = require("../db_connection"); 

router.get("/", (req, res) => {
  res.render("ContactUs");
});

router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;
  db.run(
    "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)",
    [name, email, subject, message],
    (err) => {
      if (err) {
        console.error("Error saving contact:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.render("ContactUs");
      }
    }
  );
});













module.exports = router;