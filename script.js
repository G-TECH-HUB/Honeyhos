
const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;
const cards = document.querySelectorAll(".job-card");

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  if (index < cards.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Swipe support
let startX = 0;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && index < cards.length - 1) {
    index++;
  } else if (endX - startX > 50 && index > 0) {
    index--;
  }
  updateCarousel();
});
