const express = require("express");
let router = express.Router();

const faqs = [
  {
    question: "What are the park's peak hours?",
    answer:
      "The park experiences peak hours from 11am to 3pm, especially on weekends.",
  },
  {
    question: "Are there any discounts available for tickets?",
    answer:
      "Yes, we offer discounts for group bookings, senior citizens, and students. Please check our website for current promotions.",
  },
  {
    question: "Is there wheelchair accessibility throughout the park?",
    answer:
      "Yes, our park is wheelchair accessible, and we provide rental wheelchairs at the entrance.",
  },
  {
    question: "Are there any water rides in the park?",
    answer:
      "Yes, we have several exciting water rides for all ages. Please bring appropriate swimwear.",
  },
  {
    question: "Can I host a birthday party at the park?",
    answer:
      "Absolutely! We offer special birthday party packages. Please contact our Guest Services for more information.",
  },
  {
    question: "What happens if it rains during my visit?",
    answer:
      "Most rides operate rain or shine. However, some outdoor attractions may close temporarily during heavy rain or thunderstorms for safety reasons.",
  },
  {
    question: "Are there first aid facilities in the park?",
    answer:
      "Yes, we have multiple first aid stations throughout the park. Please refer to the park map for their locations.",
  },
  {
    question: "Can I buy souvenirs at the park?",
    answer:
      "Yes, we have several gift shops offering a wide range of souvenirs and merchandise.",
  },
  {
    question: "Is there a dress code for the park?",
    answer:
      "While there is no strict dress code, we recommend wearing comfortable clothing and shoes suitable for outdoor activities.",
  },
  {
    question: "What payment methods are accepted in the park?",
    answer:
      "We accept cash, credit/debit cards, and mobile payments at all our retail and food outlets.",
  },
];

router.get("/", (req, res) => {
  res.render("FAQ", { faqs });
});

module.exports = router;
