let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.render("FamilyFunArea");
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