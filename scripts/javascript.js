const leftArrow = document.querySelector('.slider-left-arrow');
const rightArror = document.querySelector('.slider-right-arrow');
let currentSlide = 0;

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-item');
  const pages = document.querySelectorAll('.page');

  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetPage = this.getAttribute('data-page');
      pages.forEach((page) => {
        if (page.id === targetPage) {
          page.classList.add('active');
        } else {
          page.classList.remove('active');
        }
      });
    });
  });

  document.getElementById('home').classList.add('active');
});

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

leftArrow.addEventListener('click', () => changeSlide(-1));
rightArror.addEventListener('click', () => changeSlide(1));
