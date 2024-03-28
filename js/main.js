// menu functionality

const elMenuBtn = document.querySelector(".site-header__menu-btn");

const elNavigation = document.querySelector(".site-header__navigation");

elMenuBtn.addEventListener("click", () => {
  elNavigation.classList.toggle("show");
  document.body.classList.toggle("unscroll");
});
