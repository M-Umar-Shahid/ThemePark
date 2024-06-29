let express = require("express");
let router = express.Router();
const db = require("../connection"); 


router.get("/", (req, res) => {
  res.render("WildWoodsArea");
});

router.get("/dreamworks-water-park", (req, res) => {
    res.render("WaterParkRide");
  });
  

module.exports = router;