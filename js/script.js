// SCRIPT DO NAVBAR
let navbar = document.querySelector(".navbar")
let searchBox = document.querySelector(".search-box .bx-search")

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput")
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x")
  } else {
    searchBox.classList.replace("bx-x", "bx-search")
  }
})

let menuOpenBtn = document.querySelector(".navbar .bx-menu")
let menuCloseBtn = document.querySelector(".nav-links .bx-x")
let navLinks = document.querySelector(".nav-links")

menuOpenBtn.addEventListener("click", () => {
  navLinks.style.left = "0"
})

menuCloseBtn.addEventListener("click", () => {
  navLinks.style.left = "-100%"
})

let produtosArrow = document.querySelector(".produtos-arrow")

produtosArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show1")
})

let roupasArrow = document.querySelector(".roupas-arrow")

roupasArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show2")
})

let artigosArrow = document.querySelector(".artigos-arrow")

artigosArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show3")
})

let servicosArrow = document.querySelector(".servicos-arrow")

servicosArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show4")
})

let parceriasArrow = document.querySelector(".parcerias-arrow")

parceriasArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show5")
})

// SCRIPT CARROUSEL
const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)