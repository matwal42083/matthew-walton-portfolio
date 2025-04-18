// DOM Elements
const toggle = document.getElementById('toggle-btn');
const body = document.querySelector('body');
const header = document.getElementById('headerContainer');
const navLinks = document.querySelectorAll('.nav a');
const logoBorder = document.getElementById('logoImg');
const LogoName = document.querySelector('h1');
const breadBorder = document.getElementById('breadcrumbs');
const menu = document.getElementById('menuBar');
const hamburgerBar = document.getElementById('hamburgerBar');
const grid = document.getElementById('gridItem');
const sidebarItems = document.querySelectorAll('.sidebar li');
const side = document.getElementById('aside');
const footer = document.getElementById('footerContainer');
const githubIcon = document.getElementById('gh');
const xIcon = document.getElementById('X');

// Load the theme preference from localStorage
const currentTheme = localStorage.getItem('theme') || 'dark';

// Utility Functions
function setHoverColor(element, color) {
  element.addEventListener('mouseover', function () {
    element.style.color = color;
  });
  element.addEventListener('mouseout', function () {
    element.style.color = '';
  });
}

function setHoverBackgroundColor(element, color) {
  element.addEventListener('mouseover', function () {
    element.style.backgroundColor = color;
  });
  element.addEventListener('mouseout', function () {
    element.style.backgroundColor = '';
  });
}

// Utility Function to Set Hover Behavior with Theme Support
function setIconHoverBehaviorWithTheme(icon, hoverColorLight, hoverColorDark, defaultColorLight, defaultColorDark, hoverBackgroundLight, hoverBackgroundDark) {
  const currentTheme = localStorage.getItem('theme') || 'dark';

  // Set default color and background based on theme
  const defaultColor = currentTheme === 'light' ? defaultColorLight : defaultColorDark;
  const defaultBackground = 'transparent'; // Default background is transparent
  icon.style.color = defaultColor;
  icon.style.backgroundColor = defaultBackground;

  // Add hover effect
  icon.addEventListener('mouseover', function () {
    const hoverColor = currentTheme === 'light' ? hoverColorLight : hoverColorDark;
    const hoverBackground = currentTheme === 'light' ? hoverBackgroundLight : hoverBackgroundDark;
    icon.style.color = hoverColor;
    icon.style.backgroundColor = hoverBackground;
  });

  // Revert to default color and background when mouse moves off
  icon.addEventListener('mouseout', function () {
    icon.style.color = defaultColor;
    icon.style.backgroundColor = defaultBackground;
  });
}

// Light Mode
function lightMode() {
  body.style.backgroundColor = 'white';
  header.style.backgroundColor = 'white';
  side.style.backgroundColor = 'white';
  menu.style.backgroundColor = 'white';
  grid.style.backgroundColor = 'white';
  footer.style.backgroundColor = 'white';
  body.style.color = '#01072c';
  LogoName.style.color = 'rgb(1, 7, 44)';
  header.style.color = '#01072c';
  hamburgerBar.style.color = 'rgb(1, 7, 44)';
  grid.style.color = 'rgb(1, 7, 44)';
  footer.style.color = '#01072c';
  logoBorder.style.border = '2px solid rgb(1, 7, 44)';
  breadBorder.style.borderTop = '2px solid rgb(1, 7, 44)';
  breadBorder.style.borderBottom = '2px solid rgb(1, 7, 44)';
  menu.style.border = '1px solid rgb(1, 7, 44)';
  grid.style.borderTop = '1px solid rgb(1, 7, 44)';
  grid.style.borderRight = '3px solid rgb(1, 7, 44)';
  grid.style.borderLeft = '3px solid rgb(1, 7, 44)';
  grid.style.borderBottom = '1px solid rgb(1, 7, 44)';
  footer.style.borderTop = '2px solid rgb(1, 7, 44)';
  toggle.classList.add('fa-sun');
  toggle.classList.remove('fa-moon');
  toggle.innerText = ' Light';

  // Change nav links text color to black
  navLinks.forEach(link => {
    link.style.color = 'black';
    link.style.border = '2px solid rgb(1, 7, 44)';
  });

  // Change GitHub and X icons to black
  setIconHoverBehaviorWithTheme(
    githubIcon,
    'rgb(255, 255, 255)', // Hover color for light mode
    'rgb(9, 9, 9)', // Hover color for dark mode
    'rgba(0, 0, 0, 0.317)', // Default color for light mode
    'rgba(255, 255, 255, 0.317)', // Default color for dark mode
    'rgba(0, 0, 0, 0.1632)', // Hover background for light mode
    'rgba(33, 33, 33,0.163)' // Hover background for dark mode
  );

  setIconHoverBehaviorWithTheme(
    xIcon,
    'rgb(255, 255, 255)', // Hover color for light mode
    'rgb(0, 0, 0)', // Hover color for dark mode
    'rgba(0, 0, 0, 0.361)', // Default color for light mode
    'rgba(255, 255, 255, 0.3)', // Default color for dark mode
    'rgba(0, 0, 0,0.163)', // Hover background for light mode
    'rgba(33, 33, 33, 0.163)' // Hover background for dark mode
  );
}

// Dark Mode
function darkMode() {
  body.style.backgroundColor = '#01072c';
  header.style.backgroundColor = '#01072c';
  menu.style.backgroundColor = 'rgb(1, 7, 44)';
  grid.style.backgroundCOlor = 'rgb(1, 7, 44)';
  side.style.backgroundColor = 'rgb(1, 7, 44)';
  footer.style.backgroundColor = 'rgb(1, 7, 44)';
  body.style.color = 'white';
  header.style.color = 'white';
  LogoName.style.color = 'rgb(74, 198, 255)';
  hamburgerBar.style.color = 'rgb(74, 198, 255)';
  grid.style.color = 'white';
  footer.style.color = 'white';
  logoBorder.style.border = '2px solid rgb(238, 255, 0)';
  breadBorder.style.borderTop = '2px solid rgb(238, 255, 0)';
  breadBorder.style.borderBottom = '2px solid rgb(238, 255, 0)';
  menu.style.border = '1px solid rgb(238, 255, 0)';
  grid.style.borderTop = '1px solid rgb(238, 255, 0)';
  grid.style.borderRight = '3px solid rgb(238, 255, 0)';
  grid.style.borderLeft = '3px solid rgb(238, 255, 0)';
  grid.style.borderBottom = '1px solid rgb(238, 255, 0)';
  footer.style.borderTop = '2px solid rgb(238, 255, 0)';
  toggle.classList.add('fa-moon');
  toggle.classList.remove('fa-sun');
  toggle.innerText = ' Dark';
 
  // Change nav links text color to white
  navLinks.forEach(link => {
    link.style.color = 'white';
    link.style.border = '2px solid rgb(238, 255, 0)';
  });

  // Change GitHub and X icons to white
  setIconHoverBehaviorWithTheme(
    githubIcon,
    'rgb(254, 254, 254)', // Hover color for light mode
    'rgb(0, 0, 0)', // Hover color for dark mode
    'rgba(0, 0, 0, 0.361)', // Default color for light mode
    'rgba(255, 255, 255, 0.163)', // Default color for dark mode
    'rgba(0, 0, 0, 0.1)', // Hover background for light mode
    'rgba(255, 255, 255, 0.163)' // Hover background for dark mode
  );

  setIconHoverBehaviorWithTheme(
    xIcon,
    'rgb(255, 255, 255)', // Hover color for light mode
    'rgb(0, 0, 0)', // Hover color for dark mode
    'rgba(0, 0, 0, 0.23)', // Default color for light mode
    'rgba(255, 255, 255, 0.163)', // Default color for dark mode
    'rgba(0, 0, 0, 0.1)', // Hover background for light mode
    'rgba(255, 255, 255, 0.163)' // Hover background for dark mode
  );
}

// Set the initial theme based on the stored preference
if (currentTheme === 'light') {
  lightMode();
} else {
  darkMode();
}

// Event listener for the toggle button
toggle.addEventListener('click', function () {
  if (toggle.classList.contains('fa-sun')) {
    darkMode();
    localStorage.setItem('theme', 'dark');
  } else {
    lightMode();
    localStorage.setItem('theme', 'light');
  }
});

// Highlight the active sidebar item based on the current page
function highlightActiveSidebar() {
  const currentPage = window.location.pathname.split('/').pop();
  sidebarItems.forEach(item => {
    const link = item.querySelector('a');
    if (link && link.getAttribute('href').includes(currentPage)) {
      item.style.backgroundColor = '#fcfbcf'; // Highlight color
    } else {
      item.style.backgroundColor = ''; // Reset color
    }
  });
}

// Call the function to highlight the active sidebar item
highlightActiveSidebar();

// Delay navigation to allow everything to load
function delayNavigation(event) {
  event.preventDefault(); // Prevent the default navigation behavior
  const targetUrl = event.currentTarget.href; // Get the target URL

  // Add a delay (e.g., 500ms)
  setTimeout(() => {
    window.location.href = targetUrl; // Navigate to the target URL
  }, 100); // Adjust the delay time as needed
}

// Attach the delayNavigation function to all links
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', delayNavigation);
});

// Social Media Icons with Text
const socialMediaIcons = document.querySelectorAll('.social-media-list i');

// Add hover behavior to show text
socialMediaIcons.forEach(icon => {
  const socialMediaName = icon.getAttribute('data-name'); // Get the name from a custom attribute

  // Create a span element for the text
  const textElement = document.createElement('span');
  textElement.textContent = socialMediaName;
  textElement.style.position = 'absolute';
  textElement.style.fontSize = '1.0rem'; // Smaller font size

  textElement.style.color = 'inherit'; // Match the icon's color
  textElement.style.visibility = 'hidden'; // Initially hidden
  textElement.style.opacity = '0'; // Initially invisible
  textElement.style.transition = 'visibility 1.3s ease, opacity 0.3s ease';
  textElement.style.top = '90%'; // Position below the icon
  textElement.style.left = '50%'; // Center the text horizontally
  textElement.style.transform = 'translateX(-50%)'; // Adjust for centering
  textElement.style.whiteSpace = 'nowrap'; // Prevent text wrapping

  // Append the text element to the icon's parent
  icon.parentElement.style.position = 'relative'; // Ensure the parent is positioned
  icon.parentElement.appendChild(textElement);

  // Show the text on hover
  icon.addEventListener('mouseover', () => {
    textElement.style.visibility = 'visible';
    textElement.style.opacity = '1';
  });

  // Hide the text when the mouse leaves
  icon.addEventListener('mouseout', () => {
    textElement.style.visibility = 'hidden';
    textElement.style.opacity = '0';
  });
});

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous errors
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((error) => {
    error.textContent = '';
    error.style.display = 'none'; // Hide all error messages initially
  });

  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach((input) => {
    input.classList.remove('invalid', 'valid');
    const icon = input.nextElementSibling; // Check if there's already an icon
    if (icon && icon.classList.contains('validation-icon')) {
      icon.remove(); // Remove existing validation icons
    }
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
    if (isValid) {
      icon.textContent = '✔'; // Green check mark
      icon.style.color = 'green';
    } else {
      icon.textContent = '✖'; // Red asterisk
      icon.style.color = 'red';
    }
    input.parentElement.appendChild(icon);
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


