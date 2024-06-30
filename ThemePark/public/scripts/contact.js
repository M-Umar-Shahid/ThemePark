document
.getElementById("contactForm")
.addEventListener("submit", function (event) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const messageError = document.getElementById("message-error");

  let valid = true;

  // Clear previous errors
  [name, email, subject, message].forEach((input) => {
    input.classList.remove("error");
  });
  [nameError, emailError, subjectError, messageError].forEach(
    (error) => {
      error.style.display = "none";
    }
  );

  if (!name.value) {
    name.classList.add("error");
    nameError.textContent = "Name is required.";
    nameError.style.display = "block";
    valid = false;
  }

  if (!email.value) {
    email.classList.add("error");
    emailError.textContent = "Email is required.";
    emailError.style.display = "block";
    valid = false;
  } else {
    const emailPattern =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
      email.classList.add("error");
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      valid = false;
    }
  }

  if (!subject.value) {
    subject.classList.add("error");
    subjectError.textContent = "Subject is required.";
    subjectError.style.display = "block";
    valid = false;
  }

  if (!message.value) {
    message.classList.add("error");
    messageError.textContent = "Message is required.";
    messageError.style.display = "block";
    valid = false;
  }

  if (!valid) {
    event.preventDefault();
  }
});