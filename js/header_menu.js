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

//drop-down menu desktop

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
