
//CAROUSEL
var slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  // select all elements with class name mySlides
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active"); //Removing class active from elements which are not visible


  }
  slideIndex++;

  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active"); // Added class active on the visible element

  setTimeout(showSlides, 3000); // Change image every 3 seconds

}

//Parallax effect on carousel
window.addEventListener("scroll", () => {
  let active = document.querySelector(".active");
  let scrollValue = window.scrollY;

  active.style.transform = `translateY(-${scrollValue * 0.5}px)`;

});

Array.from(document.querySelectorAll(".letter")).forEach(el => {
  el.innerText = randomLetter();
});

function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}




