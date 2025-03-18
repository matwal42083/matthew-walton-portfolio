const toggle = document.getElementById('toggle-btn');
const body = document.querySelector('body');
const header = document.getElementById('headerContainer');
const footer = document.getElementById('footerContainer');
const logoBorder = document.getElementById('logoImg');
const LogoName = document.querySelector('h1');
// Load the theme preference from localStorage
const currentTheme = localStorage.getItem('theme') || 'dark';

// Set the initial theme based on the stored preference
function lightMode() {
  body.style.background = 'white';
  body.style.color = '#01072c';
  header.style.background = 'white';
  header.style.color = '#01072c';
  logoBorder.style.border = '2px solid rgb(1, 7, 44)';
  LogoName.style.color = 'rgb(1, 7, 44)';
  footer.style.background = 'white';
  footer.style.color = '#01072c';
  toggle.classList.add('fa-sun');
  toggle.classList.remove('fa-moon');
  toggle.innerText = ' Light';
  // Change nav links text color to black
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.style.color = 'black';
    link.style.border = '2px solid rgb(1, 7, 44)';
  });
}

function darkMode() {
  body.style.background = '#01072c';
  body.style.color = 'white';
  header.style.background = '#01072c';
  header.style.color = 'white';
  logoBorder.style.border = '2px solid rgb(238, 255, 0)';
  LogoName.style.color = 'rgb(74, 198, 255)';
  footer.style.background = '#01072c';
  footer.style.color = 'white';
  toggle.classList.add('fa-moon');
  toggle.classList.remove('fa-sun');
  toggle.innerText = ' Dark';
  // Change nav links text color to white
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.style.color = 'white';
    link.style.border = '2px solid rgb(238, 255, 0)';
  });

}

// Set the initial theme based on the stored preference
if (currentTheme === 'light') {
  lightMode();
} else {
  darkMode();
}

// Event listener for the toggle button
toggle.addEventListener('click', function() {
  if (toggle.classList.contains('fa-sun')) {
    darkMode();
    localStorage.setItem('theme', 'dark');
  } else {
    lightMode();
    localStorage.setItem('theme', 'light');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    lightMode();
  } else {
    darkMode();
  }
}); 

