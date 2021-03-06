$(document).ready(function () {
  $(".fof__slider").slick({
    slidesToShow: 4,
    infinite: !1,
    autoPlay: !0,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    adaptiveHeight: !0,
    lazyLoad: "progressive",
    swipe: !0,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 769, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
});

const intElemClientWidth = document.querySelector("body").clientWidth;

const sliderItem = document.querySelectorAll(".slider__item");
const weAreLeftSide = document.querySelector(".we-are__left-side").clientWidth;
const weAreRightSide = document.querySelector(".we-are__right-side");
if (intElemClientWidth >= 1441) {
  weAreRightSide.style.left = weAreLeftSide - 30 + "px";
} else {
  weAreRightSide.style.left = "inherit";
}

let sliderItemCount = sliderItem.length - 3;

const counter = document.querySelector(".slides-counter"),
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next");
let current = sliderItemCount % 2;
let slidesCounterPerPage = 4;
function changeCounter() {
  counter.textContent = current + "/" + sliderItemCount;
}
function btnColorState() {
  changeCounter(),
    (prevBtn.style.opacity = current == 1 ? ".3" : "1"),
    (nextBtn.style.opacity = current == sliderItemCount ? ".3" : "1");
}

function addCustomAttr() {
  for (let i = 0; i < sliderItem.length; i++) {
    slidesCounterPerPage -= 1;
    sliderItem[i].setAttribute("data-custom-number", slidesCounterPerPage);
  }
}

intElemClientWidth <= 1100 && (sliderItemCount += 1),
  intElemClientWidth <= 769 &&
    (sliderItemCount = document.querySelectorAll(".slider__item").length),
  $(".fof__slider").on("afterChange", function (event, slick, currentSlide) {
    addCustomAttr();

    (counter.textContent = currentSlide + 1 + "/" + sliderItemCount),
      (prevBtn.style.opacity = currentSlide + 1 == 1 ? ".3" : "1"),
      (nextBtn.style.opacity =
        currentSlide + 1 == sliderItemCount ? ".3" : "1");
    nextBtn.style.disabled;
  }),
  btnColorState(),
  $(".scrollto").on("click", function (event) {
    event.preventDefault();
    var scrollAnimationTime = 2200,
      target = this.hash;
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $(target).offset().top - 45 },
        2200,
        "easeInOutExpo",
        function () {
          window.location.hash = target;
        }
      );
  });
const navBarBtn = document.querySelector(".nav-bar"),
  navMobile = document.querySelector(".navigation__mobile"),
  closeIcon = document.querySelector(".close-icon"),
  body = document.querySelector("body"),
  wrap = document.querySelector(".wrap");
navBarBtn.addEventListener("click", () => {
  navMobile.classList.add("show");
}),
  closeIcon.addEventListener("click", () => {
    navMobile.classList.remove("show");
  });
const player = document.querySelector("#mylightbox");
