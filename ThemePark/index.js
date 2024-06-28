const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const areasRouter = require("./routes/areas")
const ridesRouter = require("./routes/rides")
const faqRouter = require("./routes/faq")
const contactRouter = require("./routes/contact_us")
const activityRouter = require("./routes/activity")


const app = express();
const PORT = 5000;



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("Homepage");
});

app.use("/areas", areasRouter)
  
app.use("/rides", ridesRouter)
app.use("/faq", faqRouter)

app.use("/contact", contactRouter)

app.use("/activity", activityRouter)



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
