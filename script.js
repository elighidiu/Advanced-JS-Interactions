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

//ON HOVER SHOW POKEMON

const poke1=document.querySelector(".poke1"), 
poke2= document.querySelector(".poke2"),
poke3 = document.querySelector(".poke3"),
poke4 = document.querySelector(".poke4"),

pidgeot=document.querySelector(".pidgeot"),
magikarp= document.querySelector(".magikarp"),
slowpoke = document.querySelector(".slowpoke"),
farfetchd = document.querySelector(".farfetchd");

poke1.addEventListener("mouseover", (e) => {
  let x = e.offsetX,
      y =e.offsetY-70;
  pidgeot.style.display="block";
  pidgeot.style.left=`${x}px`;
  pidgeot.style.top=`${y}px`;
});

poke1.addEventListener("mouseleave", () => {
  pidgeot.style.display="";
});


poke2.addEventListener("mouseover", (e) => {
  let x = e.offsetX,
      y =e.offsetY-100;
  magikarp.style.display="block";
  magikarp.style.left=`${x}px`;
  magikarp.style.top=`${y}px`;
});

poke2.addEventListener("mouseleave", () => {
  magikarp.style.display="";
});


poke3.addEventListener("mouseover", (e) => {
  let x = e.offsetX,
      y =e.offsetY-100;
  slowpoke.style.display="block";
  slowpoke.style.left=`${x}px`;
  slowpoke.style.top=`${y}px`;
});

poke3.addEventListener("mouseleave", () => {
  slowpoke.style.display="";
});


poke4.addEventListener("mouseover", (e) => {
  let x = e.offsetX,
      y =e.offsetY-100;
  farfetchd.style.display="block";
  farfetchd.style.left=`${x}px`;
  farfetchd.style.top=`${y}px`;
});

poke4.addEventListener("mouseleave", () => {
  farfetchd.style.display="";
});

//CHASER

 let box = document.querySelector(".box");
 let chaser = document.querySelector(".chaser");

 const onMouseMove = (e) =>{
  let left = e.offsetX;
  let top = e.offsetY;
  chaser.style.marginLeft = left + "px";
  chaser.style.marginTop = top + "px";
 }

 box.addEventListener("mousemove", onMouseMove); 


Array.from(document.querySelectorAll(".letter")).forEach(el => {
  el.innerText = randomLetter();
});

function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}
