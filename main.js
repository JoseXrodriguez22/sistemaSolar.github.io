const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");
const filter = document.querySelector(".black__filter");
const links = document.querySelector(".nav__links");

hamburguer.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("menu-active");
  links.classList.toggle("nav__links--active");
});

// CARDS EVENT SHOW

const cards = document.querySelector(".container__cards");
const btnShow = document.querySelector(".btn");
const btnClose = document.querySelector(".btn-close");

btnShow.addEventListener("click", function () {
  cards.classList.add("container__cards--show");
});

btnClose.addEventListener("click", function () {
  cards.classList.remove("container__cards--show");
});



