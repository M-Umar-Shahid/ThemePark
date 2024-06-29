const db = require("../connection");
// Function to fetch areas and rides
function fetchAreasAndRides(req, res, next) {
  db.all("SELECT * FROM areas", [], (err, areas) => {
    if (err) {
      console.error("Error fetching areas:", err);
      res.locals.areas = [];
    } else {
      res.locals.areas = areas;
    }

    db.all("SELECT * FROM rides", [], (err, rides) => {
      if (err) {
        console.error("Error fetching rides:", err);
        res.locals.rides = [];
      } else {
        res.locals.rides = rides;
      }
      next();
    });
  });
}

module.exports = fetchAreasAndRides;
