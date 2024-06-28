const express = require("express");
let router = express.Router();


router.get("/", (req, res) => {
  res.render("Activity");
});






module.exports = router;