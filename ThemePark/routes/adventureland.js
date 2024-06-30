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
  const pageData = {
    
    section1Img : "/images/surf_bg2.png",
    section1Color :"#00ccff",
    section2Img : "/images/sirf_bg1.png",
    section2Color :"#00d9ff",
    
  }

  db.all("SELECT * FROM rides WHERE id = ?", [4], (err, rows) => {
    if (err) {
      return res.status(500).send("Database query failed");
    }
   
    res.render("RidesTemplate", { ride: rows[0], pageData});
  });
});
router.get("/legends", (req, res) => {
  const pageData = {
    section1Img : "/images/legends_bg1.png",
    section1Color :"#a10033",
    section2Img : "/images/LegendsLogo.png",
    section2Color :"#a10033",
    
  }

  db.all("SELECT * FROM rides WHERE id = ?", [5], (err, rows) => {
    if (err) {
      return res.status(500).send("Database query failed");
    }

    res.render("RidesTemplate", { ride: rows[0], pageData});
  });
});
router.get("/escape", (req, res) => {
  const pageData = {
    section1Img : "/images/escape_bg1.jpg",
    section1Color :"#1f1f1f",
    section2Img : "/images/LegendsLogo.png",
    section2Color :"#1f1f1f",
    
  }

  db.all("SELECT * FROM rides WHERE id = ?", [6], (err, rows) => {
    if (err) {
      return res.status(500).send("Database query failed");
    }

    res.render("RidesTemplate", { ride: rows[0], pageData});
  });
});



module.exports = router;