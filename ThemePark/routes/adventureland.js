let express = require("express");
let router = express.Router();
const db = require("../connection"); 




router.get("/", (req, res) => {
  const pageData = {
    section1Img : "/images/shrek_and_tigress.png",
    section1Color :"#4fb5ff",
    section2Img : "/images/BG_Image__1_.png",
    section2Color :"#0f61ff",
    
  }
  db.all("SELECT * FROM rides WHERE area_id = ?", [2], (err, rows) => {
    if (err) {
      return res.status(500).send("Database query failed");
    }
    res.render("MainTemplate", { adventuresRides: rows, pageData:pageData });
  });
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