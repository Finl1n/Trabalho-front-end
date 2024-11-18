function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

let currentSlide = 0;
const slides = document.querySelectorAll('.service-card');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const track = document.querySelector('.carousel-track');
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

let slideInterval;

function startAutoSlide() {
  slideInterval = setInterval(() => moveSlide(1), 3000);
}

function stopAutoSlide() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
  if (isMobile) {
    const carousel = document.querySelector('.carousel-track');
    carousel.classList.add('static-carousel');
    stopAutoSlide();
  }
});

startAutoSlide();

document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const errorMessage = document.getElementById('error-message');
  const name = nameInput.value.trim();

  if (!isNaN(name) || name === '') {
    errorMessage.style.display = 'inline';
  } else {
    errorMessage.style.display = 'none';
    console.log('Nome válido:', name);
  }
});
