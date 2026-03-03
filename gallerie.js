const buttons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.gallery-item');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    items.forEach((item) => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Modale
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let visibleImages = [];

// Ouvrir la modale
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    updateVisibleImages();
    currentIndex = visibleImages.indexOf(item);
    openModal();
  });
});

function updateVisibleImages() {
  visibleImages = Array.from(items).filter(
    (img) => img.style.display !== 'none',
  );
}

function openModal() {
  modal.classList.add('active');
  modalImg.src = visibleImages[currentIndex].src;
}

// Navigation
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % visibleImages.length;
  modalImg.src = visibleImages[currentIndex].src;
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex =
    (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  modalImg.src = visibleImages[currentIndex].src;
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
