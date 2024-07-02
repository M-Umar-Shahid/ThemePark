
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (event) {
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const subject = document.getElementById("subject").value;
          const message = document.getElementById("message").value;

          if (!name || !email || !subject || !message) {
            alert("All fields are required.");
            event.preventDefault();
            return;
          }

          const emailPattern =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
          }
        });
