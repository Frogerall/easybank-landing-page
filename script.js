function navBar() {
 const screenWidth = window.innerWidth;
 const navBtn = document.querySelector(".nav-menu");
 const navClose = document.querySelector(".nav-close");
 const navMenu = document.querySelector("nav");

 const toggleNav = () => {
  navMenu.classList.toggle("nav-open");
  navBtn.classList.toggle("nav-x");
  navClose.classList.toggle("nav-toggle");
 };

 const closeNavOnResize = () => {
  if (window.innerWidth >= 600) {
   navMenu.classList.remove("nav-open");
   navClose.classList.remove("nav-toggle");
   navBtn.classList.remove("nav-x");
  }
 };

 if (screenWidth < 600) {
  navBtn.addEventListener("click", toggleNav);
  navClose.addEventListener("click", toggleNav);
  window.addEventListener("resize", closeNavOnResize);
 }
}
navBar();
