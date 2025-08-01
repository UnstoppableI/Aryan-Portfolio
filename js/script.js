let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const intervalTime = 4000; // auto-slide every 4 seconds
let autoSlide = setInterval(showNextSlide, intervalTime);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

document.querySelector('.carousel-nav.next').addEventListener('click', () => {
  showNextSlide();
  resetAutoSlide();
});

document.querySelector('.carousel-nav.prev').addEventListener('click', () => {
  showPrevSlide();
  resetAutoSlide();
});

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(showNextSlide, intervalTime);
}

  
  // Portfolio Tab Javascript
  // Wait for the document to be ready
  document.addEventListener("DOMContentLoaded", function () {
    var elem = document.querySelector('.portfolio-grid');
    var iso = new Isotope(elem, {
      itemSelector: '.col-lg-4',
      layoutMode: 'fitRows'
    });

    var filtersElem = document.querySelector('.portfolio-filter ul');
    filtersElem.addEventListener('click', function (event) {
      if (!event.target.matches('li')) return;

      // Remove active class from all
      filtersElem.querySelectorAll('li').forEach(el => el.classList.remove('active'));
      // Add active to clicked tab
      event.target.classList.add('active');

      // Filter items
      var filterValue = event.target.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
    });
  });
