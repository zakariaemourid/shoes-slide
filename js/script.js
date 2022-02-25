const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".right-arrow");
const prev = document.querySelector(".left-arrow");
const sideBar = document.querySelector(".side-bar");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
var root = document.querySelector(":root");

let compteur = 0;
next.addEventListener("click", function () {
  compteur++;
  if (compteur > slides.length - 1) {
    compteur = 0;
  }
  changeColor();
  slideFunction();
});
prev.addEventListener("click", function () {
  compteur--;
  if (compteur < 0) {
    compteur = slides.length - 1;
  }
  changeColor();
  slideFunction();
});
function slideFunction() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${compteur * 100}%)`;
  });
}
function changeColor() {
  switch (compteur) {
    case 0:
      document.body.style.backgroundColor = "#cb021c";
      root.style.setProperty("--text-color", "white");
      break;
    case 1:
      document.body.style.backgroundColor = "white";
      root.style.setProperty("--text-color", "black");
      break;
    case 2:
      document.body.style.backgroundColor = "#F6F7F9";
      root.style.setProperty("--text-color", "black");
      break;
    //   ;
    case 3:
      document.body.style.backgroundColor = "#3D4144";
      root.style.setProperty("--text-color", "white");
      break;
  }
}
// function openSidebar() {

// }
hamburger.addEventListener("click", function () {
  sideBar.style.left = "0";
});
close.addEventListener("click", function () {
  sideBar.style.left = "-100%";
});
