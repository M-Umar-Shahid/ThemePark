let express = require("express");
let router = express.Router();
const db = require("../connection"); 





router.get("/", (req, res) => {
  const pageData = {
    section1Img : "/images/Background_image.png",
    section1Color :"#ff9c33",
    section2Img : "/images/dog_photo.png",
    section2Color :"#ff6801",
    
  }
  db.all("SELECT * FROM rides WHERE area_id = ?", [1], (err, rows) => {
    if (err) {
      return res.status(500).send("Database query failed");
    }
    res.render("MainTemplate", { adventuresRides: rows, pageData  });
  });
});


  router.get("/angry-birds-mini-golf", (req, res) => {

    const pageData = {
      section1Img : "/images/angry_bird_bg1.png",
      section1Color :"#f00e43",
      section2Img : "/images/angry_bird_bg2.png",
      section2Color :"#a10033",
      
    }

    db.all("SELECT * FROM rides WHERE id = ?", [1], (err, rows) => {
      if (err) {
        return res.status(500).send("Database query failed");
      }

      res.render("RidesTemplate", { ride: rows[0], pageData});
    });

  });
  router.get("/mirror-maze", (req, res) => {
    const pageData = {
      section1Img : "/images/MirrorMazeLogo.png",
      section1Color :"#6c39e7",
      section2Img : "/images/BG_Image__1_.png",
      section2Color :"#1cb6e6",
      
    }

    db.all("SELECT * FROM rides WHERE id = ?", [2], (err, rows) => {
      if (err) {
        return res.status(500).send("Database query failed");
      }

      res.render("RidesTemplate", { ride: rows[0], pageData});
    });
  });

  router.get("/activate", (req, res) => {
    const pageData = {
      section1Img : "/images/activate_bg1.png",
      section1Color :"#002f59",
      section2Img : "/images/Mega_Grid.png",
      section2Color :"#ff1e49",
      
    }

    db.all("SELECT * FROM rides WHERE id = ?", [3], (err, rows) => {
      if (err) {
        return res.status(500).send("Database query failed");
      }
  
      res.render("RidesTemplate", { ride: rows[0], pageData});
    });
  });
module.exports = router;