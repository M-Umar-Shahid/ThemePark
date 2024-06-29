const express = require("express");
let router = express.Router();




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
router.get("/", (req, res) => {
  
  res.render("FAQ", { faqs });
});













module.exports = router;