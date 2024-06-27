const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Set up the database connection
const db = new sqlite3.Database("./theme_park.db", (err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("Homepage");
});

app.get("/areas", (req, res) => {
  db.all("SELECT * FROM areas", [], (err, rows) => {
    if (err) {
      console.error("Error fetching areas:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.render("Areas", { areas: rows });
    }
  });
});

app.get("/areas/:id", (req, res) => {
  const areaId = req.params.id;
  db.get("SELECT * FROM areas WHERE id = ?", [areaId], (err, area) => {
    if (err) {
      console.error("Error fetching area:", err);
      res.status(500).send("Internal Server Error");
    } else {
      db.all(
        "SELECT * FROM rides WHERE area_id = ?",
        [areaId],
        (err, rides) => {
          if (err) {
            console.error("Error fetching rides:", err);
            res.status(500).send("Internal Server Error");
          } else {
            res.render("AreaDetails", { area, rides });
          }
        }
      );
    }
  });
});

app.get("/rides", (req, res) => {
  db.all("SELECT * FROM rides", [], (err, rows) => {
    if (err) {
      console.error("Error fetching rides:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.render("Rides", { rides: rows });
    }
  });
});

app.get("/rides/:id", (req, res) => {
  const rideId = req.params.id;
  db.get("SELECT * FROM rides WHERE id = ?", [rideId], (err, row) => {
    if (err) {
      console.error("Error fetching ride:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.render("RideDetails", { ride: row });
    }
  });
});

app.get("/faq", (req, res) => {
  res.render("FAQ");
});

app.get("/ContactUs", (req, res) => {
  res.render("ContactUs");
});

app.post("/submit-contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  db.run(
    "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)",
    [name, email, subject, message],
    (err) => {
      if (err) {
        console.error("Error saving contact:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.redirect("/ContactUs");
      }
    }
  );
});

app.get("/activity", (req, res) => {
  res.render("Activity");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
