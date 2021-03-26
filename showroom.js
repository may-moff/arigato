
let currentSlide = 1;

const slides = document.getElementsByClassName("carousel-Img");

function showSlide(slideIndex) {
  if (slideIndex > slides.length){ 
    currentSlide = 1
  } 
  if (slideIndex < 1) {
     currentSlide = slides.length 
    }
  for ( let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'flex'
}


function nextSlide() {
  showSlide(currentSlide += 1);
}

function previousSlide() {
  showSlide(currentSlide -= 1);
}

window.onload = function () {
  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}