// JS for responsivity of navigation - toggles "responsive" class
function MenuClick() {
  const x = document.getElementById("navigation");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

// JS for opening and closing search bar
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// JS for dark mode selection made on website
const darkMode = function () {
  document.body.classList.toggle("dark-theme");
};

// JS for swapping the icon images when changing dark/light modes
let image_tracker = "dark_mode_black_24dp";

let imageChange = function () {
  if (image_tracker == "dark_mode_black_24dp") {
    document.getElementById("dark-mode-pic").src =
      "images/light_mode_white_24dp.svg";
    document.getElementById("dark-mode-pic").title = "Prepnúť na svetlý motív";
    image_tracker = "light_mode_white_24dp";
  } else {
    document.getElementById("dark-mode-pic").src =
      "images/dark_mode_black_24dp.png";
    document.getElementById("dark-mode-pic").title = "Prepnúť na tmavý motív";
    image_tracker = "dark_mode_black_24dp";
  }
};

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
