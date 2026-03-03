const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const counter = document.querySelector('.counter');

let currentIndex = 0;
let autoSlide;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
  counter.textContent = `${index + 1}/${slides.length}`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

rightArrow.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

leftArrow.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Init
showSlide(currentIndex);
startAutoSlide();
