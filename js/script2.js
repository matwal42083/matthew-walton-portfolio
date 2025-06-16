
//Form Validation Script
document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous errors
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((error) => {
    error.textContent = '';
    error.style.display = 'none'; // Hide all error messages initially
  });

  // Remove all validation icons
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach((group) => {
    const icons = group.querySelectorAll('.validation-icon');
    icons.forEach((icon) => icon.remove());
  });

  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach((input) => {
    input.classList.remove('invalid', 'valid');
  });

  // Validation logic
  let isValid = true;

  // Regex for names (letters and spaces only)
  const nameRegex = /^[a-zA-Z\s]+$/;

  // Helper function to add validation icons
  function addValidationIcon(input, isValid) {
    const icon = document.createElement('span');
    icon.classList.add('validation-icon');
    icon.style.marginLeft = '10px';
    icon.style.fontSize = '1.2rem';
    icon.textContent = isValid ? '✔' : '✖';
    icon.style.color = isValid ? 'rgb(57, 233, 54)' : 'rgb(224, 18, 18)';
    input.parentElement.insertBefore(icon, input.nextElementSibling);
  }

  // First Name Validation
  const firstName = document.getElementById('firstName');
  const firstNameError = document.getElementById('firstNameError');
  if (firstName.value.trim() === '') {
    firstNameError.textContent = 'First name is required';
    firstNameError.style.display = 'block';
    firstName.classList.add('invalid');
    addValidationIcon(firstName, false);
    isValid = false;
  } else if (!nameRegex.test(firstName.value.trim())) {
    firstNameError.textContent = 'First name can only contain letters';
    firstNameError.style.display = 'block';
    firstName.classList.add('invalid');
    addValidationIcon(firstName, false);
    isValid = false;
  } else if (firstName.value.trim().length < 3) {
    firstNameError.textContent = 'First name must be at least 3 characters';
    firstNameError.style.display = 'block';
    firstName.classList.add('invalid');
    addValidationIcon(firstName, false);
    isValid = false;
  } else {
    firstNameError.textContent = '';
    firstNameError.style.display = 'none';
    firstName.classList.add('valid');
    addValidationIcon(firstName, true);
  }

  // Last Name Validation
  const lastName = document.getElementById('lastName');
  const lastNameError = document.getElementById('lastNameError');
  if (lastName.value.trim() === '') {
    lastNameError.textContent = 'Last name is required';
    lastNameError.style.display = 'block';
    lastName.classList.add('invalid');
    addValidationIcon(lastName, false);
    isValid = false;
  } else if (!nameRegex.test(lastName.value.trim())) {
    lastNameError.textContent = 'Last name can only contain letters';
    lastNameError.style.display = 'block';
    lastName.classList.add('invalid');
    addValidationIcon(lastName, false);
    isValid = false;
  } else if (lastName.value.trim().length < 3) {
    lastNameError.textContent = 'Last name must be at least 3 characters';
    lastNameError.style.display = 'block';
    lastName.classList.add('invalid');
    addValidationIcon(lastName, false);
    isValid = false;
  } else {
    lastNameError.textContent = '';
    lastNameError.style.display = 'none';
    lastName.classList.add('valid');
    addValidationIcon(lastName, true);
  }

  // Email Validation
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required';
    emailError.style.display = 'block';
    email.classList.add('invalid');
    addValidationIcon(email, false);
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = 'Email is invalid';
    emailError.style.display = 'block';
    email.classList.add('invalid');
    addValidationIcon(email, false);
    isValid = false;
  } else {
    emailError.textContent = '';
    emailError.style.display = 'none';
    email.classList.add('valid');
    addValidationIcon(email, true);
  }

  // Phone Validation
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const phoneRegex = /^[+\d()./ -]{8,20}$/;
  if (phone.value.trim() === '') {
    phoneError.textContent = 'Phone is required';
    phoneError.style.display = 'block';
    phone.classList.add('invalid');
    addValidationIcon(phone, false);
    isValid = false;
  } else if (!phoneRegex.test(phone.value.trim())) {
    phoneError.textContent = 'Phone number is invalid';
    phoneError.style.display = 'block';
    phone.classList.add('invalid');
    addValidationIcon(phone, false);
    isValid = false;
  } else {
    phoneError.textContent = '';
    phoneError.style.display = 'none';
    phone.classList.add('valid');
    addValidationIcon(phone, true);
  }

  // Company Validation
  const company = document.getElementById('company');
  const companyError = document.getElementById('companyError');
  if (company.value.trim() === '') {
    companyError.textContent = 'Company name is required';
    companyError.style.display = 'block';
    company.classList.add('invalid');
    addValidationIcon(company, false);
    isValid = false;
  } else if (company.value.trim().length < 3) {
    companyError.textContent = 'Company name must be at least 3 characters';
    companyError.style.display = 'block';
    company.classList.add('invalid');
    addValidationIcon(company, false);
    isValid = false;
  } else {
    companyError.textContent = '';
    companyError.style.display = 'none';
    company.classList.add('valid');
    addValidationIcon(company, true);
  }

  // Message Validation
  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');
  if (message.value.trim() === '') {
    messageError.textContent = 'Message is required';
    messageError.style.display = 'block';
    message.classList.add('invalid');
    addValidationIcon(message, false);
    isValid = false;
  } else if (message.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters';
    messageError.style.display = 'block';
    message.classList.add('invalid');
    addValidationIcon(message, false);
    isValid = false;
  } else if (message.value.trim().length > 1000) {
    messageError.textContent = 'Message must not exceed 1000 characters';
    messageError.style.display = 'block';
    message.classList.add('invalid');
    addValidationIcon(message, false);
    isValid = false;
  } else {
    messageError.textContent = '';
    messageError.style.display = 'none';
    message.classList.add('valid');
    addValidationIcon(message, true);
  }

  // If all fields are valid, submit the form
  if (isValid) {
    alert('Form submitted successfully!');
    // Add your form submission logic here
  }
});


