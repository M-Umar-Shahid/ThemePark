let express = require("express");
let router = express.Router();
const db = require("../connection");



router.get("/", (req, res) => {
  const pageData = {
    section1Img : "/images/big_snow_bg.png",
    section1Color :"#4379b7",
    section2Img : "/images/big_snow_bg2.png",
    section2Color :"#4379b7",
    
  }
  db.all("SELECT * FROM rides WHERE area_id = ?", [3], (err, rows) => {
    if (err) {
      return res.status(500).send("Database query failed");
    }
    res.render("MainTemplate", { adventuresRides: rows, pageData  });
  });
});

router.get("/dreamworks-water-park", (req, res) => {
  res.render("WaterParkRide");
});
router.get("/sea-life", (req, res) => {
  res.render("SeaLifeRide");
});

module.exports = router;
