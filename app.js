let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
}

// Autoplay
let slideInterval = setInterval(function() {
  plusSlides(1);
}, 3000);

 // Legg til håndtering av sveipebevegelser
const slideshowContainer = document.querySelector(".slideshow-container");

slideshowContainer.addEventListener("touchstart", function(e) {
  touchStartX = e.touches[0].clientX;
});
slideshowContainer.addEventListener("touchend", function(e) {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
const swipeThreshold = 100; // Juster terskelen etter behov
if (touchStartX - touchEndX > swipeThreshold) {
  plusSlides(1); // Sveip til venstre
} else if (touchEndX - touchStartX > swipeThreshold) {
  plusSlides(-1); // Sveip til høyre
  }
}