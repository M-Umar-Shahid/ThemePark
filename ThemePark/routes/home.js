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
    res.render("AngryBirdRide");
  });
  router.get("/mirror-maze", (req, res) => {
    res.render("MirrorMazeRide");
  });
  router.get("/activate", (req, res) => {
    res.render("ActivateRide");
  });
module.exports = router;