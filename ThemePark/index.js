const express = require("express");
const path = require("path");
const fetchAreasAndRides = require("./middleware/fetchAreasnRide");
const bodyParser = require("body-parser");
const homeRouter = require("./routes/home");
const adventureRouter = require("./routes/adventureland");
const wildwoodRouter = require("./routes/wildwoods");
const faqRouter = require("./routes/faq");
const contactRouter = require("./routes/contact");
const activityRouter = require("./routes/activity");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Middleware to fetch areas and rides for the submenu
app.use(fetchAreasAndRides);

app.use("/", homeRouter);
app.use("/AdventureLand", adventureRouter);
app.use("/WildWoods", wildwoodRouter);

app.use("/faq", faqRouter);

app.use("/contact", contactRouter);

app.use("/activity", activityRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
