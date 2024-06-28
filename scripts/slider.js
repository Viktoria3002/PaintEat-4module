const leftArrow = document.querySelector('.slider-left-arrow');
const rightArror = document.querySelector('.slider-right-arrow');
let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

leftArrow.addEventListener('click', () => changeSlide(-1));
rightArror.addEventListener('click', () => changeSlide(1));
