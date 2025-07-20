// DOM Elements
const body = document.querySelector('body');
const header = document.getElementById('headerContainer');
const navLinks = document.querySelectorAll('.nav a');
const menu = document.getElementById('menuBar');
const grid = document.getElementById('gridItem');
const sidebarItems = document.querySelectorAll('.sidebar li');
const side = document.getElementById('aside');
const footer = document.getElementById('footerContainer');
const githubIcon = document.getElementById('gh');
const xIcon = document.getElementById('X');
const themeSwitch = document.getElementById('theme-switch');

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
  header.style.backgroundColor = 'white';
  header.style.color = 'black';
  body.style.backgroundColor = 'white';
  body.style.color = 'black';
  menu.style.backgroundColor = 'rgb(239, 240, 244)';
  side.style.backgroundColor = 'rgb(248, 249, 251)';
  grid.style.backgroundColor = 'rgb(247, 247, 251)';
  grid.style.color = 'black';
  footer.style.color = 'black';
  footer.style.backgroundColor = 'rgb(247, 247, 249)';

 

  // Change nav links text color to black
  navLinks.forEach(link => {
    link.style.color = 'black';
    link.style.border = '2px solid rgb(1, 7, 44)';
  });

  // Change GitHub and X icons to black
  setIconHoverBehaviorWithTheme(
    githubIcon,
    'rgba(255, 255, 255, 1)', // Hover color for light mode
    'rgba(29, 29, 29, 1)', // Hover background for light mode
    'rgba(0, 0, 0, 0.28)', // Default color for light mode
    'rgba(251, 250, 250, 1)', // Default color for dark mode
    'rgba(8, 8, 8, 0.65)', // Hover color for dark mode
    'rgba(236, 228, 228, 0.31)' // Hover background for dark mode
  );

  setIconHoverBehaviorWithTheme(
    xIcon,
    'rgba(255, 255, 255, 1)', // Hover color for light mode
    'rgba(29, 29, 29, 1)', // Hover background for light mode
    'rgba(0, 0, 0, 0.28)', // Default color for light mode
    'rgba(251, 250, 250, 1)', // Default color for dark mode
    'rgba(8, 8, 8, 0.65)', // Hover color for dark mode
    'rgba(236, 228, 228, 0.31)' // Hover background for dark mode
  );
}

// Dark Mode
function darkMode() {
  header.style.backgroundColor = '#01072c';
  header.style.color = 'white';
  body.style.backgroundColor = '#01072c';
  body.style.color = 'white';
  menu.style.backgroundColor = 'rgb(1, 7, 44)';
  side.style.backgroundColor = 'rgb(1, 7, 44)';
  grid.style.backgroundColor = 'rgb(1, 7, 44)';
  grid.style.color = 'white';
  footer.style.color = 'white';
  footer.style.backgroundColor = 'rgb(1, 7, 44)';

 
  // Change nav links text color to white
  navLinks.forEach(link => {
    link.style.color = 'white';
    link.style.border = '2px solid rgb(238, 255, 0)';
  });

  // Change GitHub and X icons to white
  setIconHoverBehaviorWithTheme(
    githubIcon,
    'rgba(255, 255, 255, 1)', // Hover color for light mode
    'rgba(29, 29, 29, 1)', // Hover background for light mode
    'rgba(0, 0, 0, 0.28)', // Default color for light mode
    'rgba(251, 250, 250, 1)', // Default color for dark mode
    'rgba(8, 8, 8, 0.65)', // Hover color for dark mode
    'rgba(236, 228, 228, 0.31)' // Hover background for dark mode
  );

  setIconHoverBehaviorWithTheme(
    xIcon,
    'rgba(255, 255, 255, 1)', // Hover color for light mode
    'rgba(29, 29, 29, 1)', // Hover background for light mode
    'rgba(0, 0, 0, 0.28)', // Default color for light mode
    'rgba(251, 250, 250, 1)', // Default color for dark mode
    'rgba(8, 8, 8, 0.65)', // Hover color for dark mode
    'rgba(236, 228, 228, 0.31)' // Hover background for dark mode
  );
}



// Set initial state based on localStorage
if (localStorage.getItem('theme') === 'dark') {
  themeSwitch.checked = true;
  darkMode();
} else {
  themeSwitch.checked = false;
  lightMode();
}

// Event listener for the slider switch
themeSwitch.addEventListener('change', function () {
  if (themeSwitch.checked) {
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

// Set hover listeners for GitHub and X icons only once
function setSocialIconHover(icon, light, dark, lightBg, darkBg) {
  icon.addEventListener('mouseenter', function () {
    if (themeSwitch.checked) {
      icon.style.color = dark;
      icon.style.backgroundColor = darkBg;
    } else {
      icon.style.color = light;
      icon.style.backgroundColor = lightBg;
    }
  });
  icon.addEventListener('mouseleave', function () {
    // Reset to current theme's default
    if (themeSwitch.checked) {
      icon.style.color = '#fff';
      icon.style.backgroundColor = 'transparent';
    } else {
      icon.style.color = '#181717';
      icon.style.backgroundColor = 'transparent';
    }
  });
}

setSocialIconHover(
  githubIcon,
  '#181717', // GitHub black for light mode
  '#fff',    // White for dark mode
  'transparent',
  'transparent'
);

setSocialIconHover(
  xIcon,
  '#181717', // X black for light mode
  '#fff',    // White for dark mode
  'transparent',
  'transparent'
);

