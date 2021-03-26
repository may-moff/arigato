const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li')

function toggleNav() {
  // to toggle or click the navigation
  nav.classList.toggle('nav-active');
  // to sexyly animate the sliding in of menu items:
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      // so that animation doesn't stop after we open menu for first time
      link.style.animation = ''
    } else {
      // navbar links come in with slight delay after one another and that's waht we need the index for
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  burger.classList.toggle('menu-icon');
}


burger.addEventListener('click',toggleNav);
navLinks.forEach((link) => {
  link.addEventListener('click', toggleNav)
})

window.onscroll = function () { myFunction() };

// Get the header
let header = document.querySelector("nav");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

