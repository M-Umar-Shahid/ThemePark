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
  const faqs = [
    {
      question: "What are the park's operating hours?",
      answer: "The park is open every day, April-October from 9am to 7pm.",
    },
    {
      question: "Is there parking available at the theme park?",
      answer:
        "Yes, we have ample parking space available for all our visitors.",
    },
    {
      question: "Are there any height restrictions for the rides?",
      answer:
        "Yes, certain rides have height restrictions for safety reasons. Please check the ride information before queueing.",
    },
    {
      question: "Can I bring my own food and drinks?",
      answer:
        "Outside food and drinks are not allowed inside the park. However, we have a variety of food outlets offering delicious options for all tastes.",
    },
    {
      question: "Is there a lost and found?",
      answer:
        "Yes, if you lose an item, please visit our Guest Services, and we will assist you in finding it.",
    },
    {
      question: "Are pets allowed in the theme park?",
      answer:
        "Pets are not allowed inside the theme park, with the exception of service animals.",
    },
    {
      question: "How can I buy tickets?",
      answer:
        "This is a promotional website and does not sell tickets. Please visit our main website or ticketing partners for ticket purchases.",
    },
    {
      question: "Is there any accommodation nearby?",
      answer:
        "Yes, there are several hotels and lodges nearby. Please visit our website's accommodation section for more details.",
    },
    {
      question: "What should I do in case of an emergency?",
      answer:
        "In case of an emergency, please contact any park staff member or visit the nearest Guest Services for assistance.",
    },
  ];
  res.render("FAQ", { faqs });
});

app.get("/contact", (req, res) => {
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
        res.render("ContactUs");
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
