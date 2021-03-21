const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
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

  });

}

navSlide();
