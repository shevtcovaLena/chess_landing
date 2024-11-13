const track = document.querySelector(".slider__track");
const counter = document.getElementById("counter");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const cardImage = document.querySelector(".card--cover");

const cards = document.querySelectorAll(".card");
const maxContainerWidth = 1222;
const minCardWidth = cardImage.offsetWidth;
const cardGap = 20;
let cardsPerPage;
let currentPage = 1;

function calculateLayout() {
  const containerWidth = document.querySelector(".slider").offsetWidth;

  if (containerWidth >= maxContainerWidth) {
    cardsPerPage = 3;
  } else {
    cardsPerPage = Math.floor(
      (containerWidth + cardGap) / (minCardWidth + cardGap)
    );
  }

  updateSlider();
}

function updateSlider() {
  const containerWidth = document.querySelector(".slider").offsetWidth;
  const cardWidth =
    (containerWidth - (cardsPerPage - 1) * cardGap) / cardsPerPage;

  track.style.transform = `translateX(-${
    (currentPage - 1) * cardsPerPage * (cardWidth + cardGap)
  }px)`;

  const displayedCards = Math.min(currentPage * cardsPerPage, cards.length);
  counter.innerHTML = `${displayedCards} <span class="total-cards">/ ${cards.length}</span>`;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === Math.ceil(cards.length / cardsPerPage);
}

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateSlider();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < Math.ceil(cards.length / cardsPerPage)) {
    currentPage++;
    updateSlider();
  }
});

window.addEventListener("resize", calculateLayout);

calculateLayout();
