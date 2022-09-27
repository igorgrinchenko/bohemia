//slider

const slider = document.querySelector(".swiper");

const swiper = new Swiper(slider, {
  direction: "horizontal",
  // loop: true,
  // slidesPerView: 3,
  // spaceBetween: 40,
  centeredSlides: true,
  grabCursor: true,
  initialSlide: 1,
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
      grabCursor: true,
      loop: true,
    },
  },
});

// const sliders = document.querySelectorAll(".swiper");
// console.log(sliders);

// sliders.forEach((el) => {
//   const swiper = new Swiper(el, {
//     direction: "horizontal",
//     // loop: true,
//     // slidesPerView: 3,
//     // spaceBetween: 40,
//     centeredSlides: true,
//     grabCursor: true,
//     initialSlide: 1,
//     navigation: {
//       nextEl: el.querySelector(".swiper-button-next"),
//       prevEl: el.querySelector(".swiper-button-prev"),
//     },

//     breakpoints: {
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 0,
//         loop: true,
//         slideToClickedSlide: true,
//         centeredSlides: true,
//       },

//       1245: {
//         slidesPerView: 3,
//         spaceBetween: 40,
//         slideToClickedSlide: true,
//         grabCursor: true,
//         loop: true,
//       },
//     },
//   });
// });

const swiper2 = new Swiper(".swiper-2", {
  effect: "cards",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  cardsEffect: {
    rotate: false,
    perSlideOffset: 10,
  },
  // navigation: {
  //   nextEl: el.querySelector(".swiper-button-next"),
  //   prevEl: el.querySelector(".swiper-button-prev"),
  // },
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

//products
const productsHeaderMenu = document.querySelector("#product-category");
const productMenuList = document.querySelector("#product-list");
const productIcon = document.querySelector("#prod-icon");
const productsLink = document.querySelector("dropdown-title");
const backdropHeader = document.querySelector("#backdrop-header");

const projectsHeaderMenu = document.querySelector("#projects-category");
const projectMenuList = document.querySelector("#projects-list");
const rojectLink = document.querySelector("#progect-title");
const projectsIcon = document.querySelector("#projects-icon");

productsHeaderMenu.addEventListener("click", (e) => {
  if (productMenuList.classList.contains("off")) {
    projectMenuClose();
    productMenuOpen();
  } else {
    productMenuClose();
  }
});

backdropHeader.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    productMenuClose();
    projectMenuClose();
  }
});

//projects

projectsHeaderMenu.addEventListener("click", () => {
  if (projectMenuList.classList.contains("off")) {
    productMenuClose();
    projectMenuOpen();
  } else {
    projectMenuClose();
  }
});

function productMenuOpen() {
  backdropHeader.classList.remove("off");
  productIcon.classList.add("rotate");
  productMenuList.classList.remove("off");
  projectMenuList.classList.add("off");
  productsHeaderMenu.classList.add("active");
}
function productMenuClose() {
  backdropHeader.classList.add("off");
  productIcon.classList.remove("rotate");
  productMenuList.classList.add("off");
  productsHeaderMenu.classList.remove("active");
}

function projectMenuOpen() {
  backdropHeader.classList.remove("off");
  projectsIcon.classList.add("rotate");
  projectMenuList.classList.remove("off");
  productMenuList.classList.add("off");
  projectsHeaderMenu.classList.add("active");
}
function projectMenuClose() {
  backdropHeader.classList.add("off");
  projectsIcon.classList.remove("rotate");
  projectMenuList.classList.add("off");
  projectsHeaderMenu.classList.remove("active");
}
