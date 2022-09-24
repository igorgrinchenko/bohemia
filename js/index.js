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

//drop-down menu mobile

const dropDownProducts = document.querySelector("#dropdown");
const productsItem = document.querySelector("#prod-list");
const productsCategory = document.querySelector("#products");

productsCategory.addEventListener("click", () => {
  productsItem.classList.toggle("off");
  dropDownProducts.classList.toggle("rotate");
  productsCategory.classList.toggle("hover");
});

const dropDownDevelop = document.querySelector("#dropdown-developed");
const developedItem = document.querySelector("#develop-items");
const projectsCategory = document.querySelector("#developed");

projectsCategory.addEventListener("click", () => {
  developedItem.classList.toggle("off");
  dropDownDevelop.classList.toggle("rotate");
  projectsCategory.classList.toggle("hover");
});

//drop-down menu descktop

const productsHeaderMenu = document.querySelector("#product-category");
const productMenuList = document.querySelector("#product-list");
const productIcon = document.querySelector("#prod-icon");
const productsLink = document.querySelector("dropdown-title");
const backdropHeader = document.querySelector("#backdrop-header");

productsHeaderMenu.addEventListener("click", () => {
  productMenuList.classList.toggle("off");
  productIcon.classList.toggle("rotate");
  backdropHeader.classList.toggle("off");
});

const projectsHeaderMenu = document.querySelector("#projects-category");
const projectMenuList = document.querySelector("#projects-list");
const rojectLink = document.querySelector("#progect-title");
const projectsIcon = document.querySelector("#projects-icon");

projectsHeaderMenu.addEventListener("click", () => {
  projectMenuList.classList.toggle("off");
  projectsIcon.classList.toggle("rotate");
  backdropHeader.classList.toggle("off");
});
