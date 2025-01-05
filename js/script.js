/*
const toggle =  document.getElementById('toggle-btn');
const body = document.querySelector('body');

// Load the theme preference from localStorage
const currentTheme = localStorage.getItem('light') || 'dark';

// set the initial theme based on the stored preference
// light mode function 
function lightMode(currentTheme) {
  if (currentTheme === 'light') {
    body.style.background = 'white';
    body.style.color = 'black';
    toggle.classList.add('fa-sun');
    toggle.innerText = 'Light';
  };
  // change nav links text color to black
  const navLinks = document.querySelectorAll('.nav a ');
  navLinks.forEach(link => {
    link.style.color = 'black';
  })
};
// dark mode function 
function darkMode(currentTheme) {
  if (currentTheme === 'dark') {
    body.style.background = 'black';
    body.style.color = 'white';
    toggle.classList.add('fa-moon');
    toggle.innerText = 'Dark';
  };
  // change nav links text color to white
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.style.color = 'white';
  })
};

// Event listener fot the toggle button
toggle.addEventListener('click', function() {
  this.classList.toggle('fa-moon');
  this.classList.toggle('fa-sun');
 
  if (this.classList.contains('fa-sun')) {
    lightMode('light');
    localStorage.setItem('light', 'light');
  } else if (this.classList.contains('fa-moon')) {
    darkMode('dark');
    localStorage.setItem('light', 'dark');
  }
})

 document.addEventListener('DOMContentLoaded', function() {
  const currentTheme = localStorage.getItem('light');
  if(currentTheme === 'light') {
    lightMode('light');
  } else if (currentTheme === 'dark') {
    darkMode('dark');
  }
 })










/* functions for light & dark mode feature


const toggle = document.getElementById('toggle-btn');

const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        toggle.innerText = ' Light';
 
        // Change nav links text color to black
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.style.color = 'black';
        });
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
        toggle.innerText = ' Dark';
   
        // Change nav links text color to white
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    }
})


*/

