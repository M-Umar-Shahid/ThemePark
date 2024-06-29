let express = require("express");
let router = express.Router();
const db = require("../connection"); 

router.get("/", (req, res) => {
  res.render("AdventureLandArea");
});

router.get("/surf", (req, res) => {
  res.render("SurfRide");
});
router.get("/legends", (req, res) => {
  res.render("LegendRide");
});
router.get("/escape", (req, res) => {
  res.render("EscapeRide");
});


module.exports = router;