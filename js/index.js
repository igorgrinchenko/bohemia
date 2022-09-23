//slider
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      slideToClickedSlide: true,
      centeredSlides: true,
    },

    1245: {
      slidesPerView: 3,
      spaceBetween: 40,
      slideToClickedSlide: true,
    },
  },
});

const swiper2 = new Swiper(".swiper-2", {
  effect: "cards",
  grabCursor: true,

  cardsEffect: {
    rotate: false,
    perSlideOffset: 10,
  },
});

////adaptive sliders

let viewportWidth = window.innerWidth;

const sliderHorizontal = document.querySelector("#slider-1");
const sliderMobile = document.querySelector("#slider-2");
const arrowNext = document.querySelector("#next");
const arrowPrev = document.querySelector("#prev");

function showSlider() {
  if (viewportWidth > 320 && viewportWidth < 768) {
    sliderHorizontal.classList.add("off");
    sliderMobile.classList.remove("off");
    arrowNext.classList.add("off");
    arrowPrev.classList.add("off");
  }
}
showSlider();

//open-close burger menu

const openMenuBtn = document.querySelector("#burger");
const closeMenuBtn = document.querySelector("#close-menu");
const backdrop = document.querySelector("#backdrop");

openMenuBtn.addEventListener("click", () => {
  document.body.classList.add("lock");
  backdrop.classList.remove("is-hidden");
});

closeMenuBtn.addEventListener("click", () => {
  document.body.classList.remove("lock");
  backdrop.classList.add("is-hidden");
});

//drop-down menu

const dropDownProducts = document.querySelector("#dropdown");
const productsItem = document.querySelector("#prod-list");
const productsCategory = document.querySelector("#products");

dropDownProducts.addEventListener("click", () => {
  productsItem.classList.toggle("off");
  dropDownProducts.classList.toggle("rotate");
  productsCategory.classList.toggle("hover");
});

const dropDownDevelop = document.querySelector("#dropdown-developed");
const developedItem = document.querySelector("#develop-items");
const projectsCategory = document.querySelector("#developed");

dropDownDevelop.addEventListener("click", () => {
  developedItem.classList.toggle("off");
  dropDownDevelop.classList.toggle("rotate");
  projectsCategory.classList.toggle("hover");
});

///////
// const swiper = new Swiper(".swiper", {
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 40,
//   centeredSlides: true,
//   grabCursor: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//       slideToClickedSlide: true,
//     },
//     // when window width is >= 480px
//     768: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//       slideToClickedSlide: true,
//     },
//     // when window width is >= 640px
//     1245: {
//       slidesPerView: 4,
//       spaceBetween: 0,
//       slideToClickedSlide: true,
//     },
//   },
// });
