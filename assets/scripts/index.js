$(document).ready(function () {
  $(".fof__slider").slick({
    slidesToShow: 4,
    autoPlay: true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
    adaptiveHeight: true,
  });
});

const sliderItem = document.querySelectorAll(".slider__item").length / 4;
const counter = document.querySelector(".slides-counter");
const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");
// let current = sliderItem % 2;
// counter.textContent = current + "/" + `${sliderItem}`;

// prevBtn.addEventListener("click", () => {
//     console.log(prevBtn);
//     sliderItem = -1;

//   counter.textConten = current + "/" + sliderItem;
// });

// if (current == sliderItem - 1) {
//   current = 2;
// } else if (current == sliderItem) {
//   current = sliderItem;
// }
