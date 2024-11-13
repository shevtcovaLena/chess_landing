const stagesTrack = document.querySelector(".stages-slider__track");
const prevButtonStages = document.querySelector(".stages-slider__prev");
const nextButtonStages = document.querySelector(".stages-slider__next");
const dots = document.querySelectorAll(".slider--dot");

let currentSlide = 0;
const totalSlides = 5;

const updateSliderPosition = () => {
  stagesTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  prevButtonStages.disabled = currentSlide === 0;
  nextButtonStages.disabled = currentSlide === totalSlides - 1;
};

const updateDots = () => {
  console.log(dots);

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
};

prevButtonStages.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSliderPosition();
    updateDots();
  }
});

nextButtonStages.addEventListener("click", () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSliderPosition();
    updateDots();
  }
});

updateSliderPosition();
updateDots();
