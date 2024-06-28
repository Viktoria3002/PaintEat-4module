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
