const navBtn = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");
const navMenu = document.querySelector("nav");

navBtn.addEventListener("click", () => {
 navMenu.classList.toggle("nav-open");
});
navClose.addEventListener("click", () => {
 navMenu.classList.remove("nav-open");
});
