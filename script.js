//LIGHT MODE & DARK MODE

const pageMode=document.querySelector(".mode");

pageMode.addEventListener("click",()=>{
    document.querySelector('body').classList.toggle('darkMode'); //Toggle between adding and removing a class name from an element with JavaScript.
});

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

//ENLARGED PHOTO ON CLICK

let img = document.querySelectorAll("#myImg");

img.forEach(function (item, index) {
  // console.log(item);
  item.addEventListener('click', function () {
    img[index].classList.toggle('enlarged'); //Replaced ADD & REMOVE with TOGGLE 


    // let enl = document.querySelectorAll(".enlarged");
    // //console.log(enl);
    // enl.forEach(function (item, index) {
    //   item.addEventListener('click', function () {
    //     enl[index].classList.remove('enlarged'); // Removing class when clicked again on enlarged image

    //   });
    // });

  });
});


Array.from(document.querySelectorAll(".letter")).forEach(el => {
  el.innerText = randomLetter();
});

function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}
