document.getElementById('contactForm').addEventListener('submit', function(event) {
  let isValid = true;

  // Clear previous errors
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(element =>{ 
    
    
    element.textContent = '';
   
  
  });

  const inputElements = document.querySelectorAll('input, textarea');
  inputElements.forEach(element => element.classList.remove('input-error'));

  // Validate name
  const name = document.getElementById('name').value.trim();
  if (name === '') {
      const nameError = document.getElementById('nameError');
      nameError.textContent = 'Name is required.';
      document.getElementById('name').classList.add('input-error');
      isValid = false;
  }

  // Validate email
  const email = document.getElementById('email').value.trim();
  if (email === '') {
      const emailError = document.getElementById('emailError');
      emailError.textContent = 'Email is required.';
      document.getElementById('email').classList.add('input-error');
      isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
      const emailError = document.getElementById('emailError');
      emailError.textContent = 'Please enter a valid email address.';
      document.getElementById('email').classList.add('input-error');
      isValid = false;
  }

  // Validate subject
  const subject = document.getElementById('subject').value.trim();
  if (subject === '') {
      const subjectError = document.getElementById('subjectError');
      subjectError.textContent = 'Subject is required.';
      document.getElementById('subject').classList.add('input-error');
      isValid = false;
  }

  // Validate message
  const message = document.getElementById('message').value.trim();
  if (message === '') {
      const messageError = document.getElementById('messageError');
      messageError.textContent = 'Message is required.';
      document.getElementById('message').classList.add('input-error');
      isValid = false;
  }

  if (!isValid) {
      event.preventDefault();
  }
});