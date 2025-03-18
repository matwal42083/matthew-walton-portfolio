const toggle = document.getElementById('toggle-btn');
const body = document.querySelector('body');
const header = document.getElementById('headerContainer');
const footer = document.getElementById('footerContainer');
const logoBorder = document.getElementById('logoImg');
const LogoName = document.querySelector('h1');
const breadBorder = document.getElementById('breadcrumbs');
const menu = document.getElementById('menuBar');
const hamburgerBar = document.getElementById('hamburgerBar');
const spotify = document.getElementById('spotifyContainer');
const devCard = document.getElementById('devCard');
const grid = document.getElementById('gridItem');
const iconX = document.getElementById('X');
const iconGhub = document.getElementById('gh')
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
  breadBorder.style.borderTop = '2px solid rgb(1, 7, 44)';
  breadBorder.style.borderBottom = '2px solid rgb(1, 7, 44)';
  hamburgerBar.style.color = 'rgb(1, 7, 44)';
  menu.style.background = 'white';
  menu.style.border = '1px solid rgb(1, 7, 44)';
  menu.style.boxShadow = ' -5px -5px 10px rgba(86, 85, 85, 0.7)';
  spotify.style.boxShadow = '-5px -5px 10px rgba(86, 85, 85, 0.7)';
  grid.style.borderTop = '1px solid rgb(1, 7, 44)';
  grid.style.borderBottom = '1px solid rgb(1, 7, 44)';
  grid.style.borderRight = '4px solid rgb(1, 7, 44)';
  grid.style.borderLeft = '4px solid rgb(1, 7, 44)';
  footer.style.borderTop = '2px solid rgb(1, 7, 44)';
  iconX.style.color = 'rgba(22, 22, 22, 0.29)';
  iconGhub.style.color = 'rgba(22, 22, 22, 0.29)';
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
  breadBorder.style.borderTop = '2px solid rgb(238, 255, 0)';
  breadBorder.style.borderBottom = '2px solid rgb(238, 255, 0)';
  hamburgerBar.style.color = 'rgb(74, 198, 255)';
  menu.style.border = '1px solid rgb(238, 255, 0)';
  menu.style.background = 'rgb(1, 7, 44)';
  menu.style.boxShadow = ' -5px -5px 10px rgb(74, 198, 255)';
  spotify.style.boxShadow = '-5px -5px 10px rgb(49, 180, 49)';
  grid.style.borderTop = '1px solid rgb(238, 255, 0)';
  grid.style.borderBottom = '1px solid rgb(238, 255, 0)';
  grid.style.borderRight = '4px solid rgb(238, 255, 0)';
  grid.style.borderLeft = '4px solid rgb(238, 255, 0)';
  footer.style.borderTop = '2px solid rgb(238, 255, 0)';
  footer.style.background = 'rgb(1, 7, 44)';
  iconX.style.color = 'rgba(222, 222, 222, 0.286)';
  iconGhub.style.color = 'rgba(222, 222, 222, 0.286)';
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

