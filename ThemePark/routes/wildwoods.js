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
  const pageData = {
    section1Img : "/images/card_2.png",
    section1Color :"#9f279f",
    section2Img : "/images/card_1.png",
    section2Color :"#9f279f",
    
  }

  db.all("SELECT * FROM rides WHERE id = ?", [7], (err, rows) => {
    if (err) {
      return res.status(500).send("Database query failed");
    }

    res.render("RidesTemplate", { ride: rows[0], pageData});
  });
});
router.get("/sea-life", (req, res) => {
  const pageData = {
    section1Img : "/images/sea_life_1.png",
    section1Color :"#2d9ddd",
    section2Img : "/images/sea_life_2.png",
    section2Color :"#2d9ddd",
    
  }

  db.all("SELECT * FROM rides WHERE id = ?", [8], (err, rows) => {
    if (err) {
      return res.status(500).send("Database query failed");
    }

    res.render("RidesTemplate", { ride: rows[0], pageData});
  });
});

module.exports = router;
