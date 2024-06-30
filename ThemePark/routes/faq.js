const express = require("express");
let router = express.Router();

const faqs = [
  {
    question: "What are the park's operating hours?",
    answer: "The park is open every day, April-October from 9am to 7pm.",
  },
  {
    question: "Is there parking available at the theme park?",
    answer: "Yes, we have ample parking space available for all our visitors.",
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
];
router.get("/", (req, res) => {
  res.render("FAQ", { faqs });
});

module.exports = router;
