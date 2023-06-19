


var slidePosition = 0;

function nextSlide() {
  showSlide(slidePosition  -1);
}

function previousSlide() {
  showSlide(slidePosition + 1);
}

function goToSlide(index) {
  showSlide(index);
}

function showSlide(index) {
  const slides = document.getElementsByClassName("Containers");
  const circles = document.getElementsByClassName("dots");
  const thumbnails = document.getElementsByClassName("thumbnail");

  slidePosition = index;

  if (slidePosition >= slides.length) {
    slidePosition = 0;
  } else if (slidePosition < 0) {
    slidePosition = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    circles[i].classList.remove("enable");
    thumbnails[i].style.opacity = "0.6";
  }

  slides[slidePosition].style.display = "block";
  circles[slidePosition].classList.add("enable");
  thumbnails[slidePosition].style.opacity = "1";
}
console.log('showSlide')
console.log(slidePosition)
window.onload = function() {
  showSlide(slidePosition);
};
window.addEventListener('scroll', function () {
    var scrollButton = document.querySelector('.scroll-up-button');
    if (window.scrollY > 100) { // Adjust the scroll threshold as desired
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
