var btn_slider_l = document.querySelector(".btn-slider-left");
var btn_slider_r = document.querySelector(".btn-slider-right");
var c_img = document.querySelector(".c_slider").querySelector(".c_img");

var numb_img = 4; /*mettre le nombre d'images du slider*/
var color = "#0984e3"; /*mettre couleur choisie pour les controls*/

var circle1 = document.querySelector(".circle1");// ajouter 1 variable pour chaque cercles
var circle2 = document.querySelector(".circle2");// ajouter 1 variable pour chaque cercles
var circle3 = document.querySelector(".circle3");// ajouter 1 variable pour chaque cercles
var circle4 = document.querySelector(".circle4");// ajouter 1 variable pour chaque cercles

var numb_circle = 1; /*mettre à la slide par défaut*/

slideLoop();

btn_slider_l.addEventListener("click", () => {
  numb_circle = numb_circle - 1;
  slideLoop();
})

btn_slider_r.addEventListener("click", () => {
  numb_circle = numb_circle + 1;
  slideLoop();
})

// une fonction par cercles
// ajustez numb_circle
circle1.addEventListener("click", () => {
  numb_circle = 1;
  slideLoop();
})

circle2.addEventListener("click", () => {
  numb_circle = 2;
  slideLoop();
})

circle3.addEventListener("click", () => {
  numb_circle = 3;
  slideLoop();
})

circle4.addEventListener("click", () => {
  numb_circle = 4;
  slideLoop();
})

// fonction finale (changement de slide)
function slideLoop(){
  // une condition par image et cercles
  // pensez à ajuster le code des conditions pour chaque "item"(backgroundColor, left)
  if(numb_circle == 2){
    circle1.style.backgroundColor = "inherit";
    circle2.style.backgroundColor = color;
    circle3.style.backgroundColor = "inherit";
    circle4.style.backgroundColor = "inherit";
    c_img.style.left = -100 + "%";
  }
  if(numb_circle == 3){
    circle1.style.backgroundColor = "inherit";
    circle2.style.backgroundColor = "inherit";
    circle3.style.backgroundColor = color;
    circle4.style.backgroundColor = "inherit";
    c_img.style.left = -200 + "%";
  }
  if(numb_circle == 4){
    circle1.style.backgroundColor = "inherit";
    circle2.style.backgroundColor = "inherit";
    circle3.style.backgroundColor = "inherit";
    circle4.style.backgroundColor = color;
    c_img.style.left = -300 + "%";
  }
  if(numb_circle == 1){
    circle1.style.backgroundColor = color;
    circle2.style.backgroundColor = "inherit";
    circle3.style.backgroundColor = "inherit";
    circle4.style.backgroundColor = "inherit";
    c_img.style.left = 0 + "%";
  }

  // ne pas changer celles-ci :
  if(numb_circle < 1){
    numb_circle = numb_img;
    slideLoop();
  }
  if(numb_circle > numb_img){
    numb_circle = 1;
    slideLoop();
  }
}

// Fin slider | Code des autres fonctionnalités
var accueil = document.querySelector(".li_accueil");
var propos = document.querySelector(".li_propos");
var horaires = document.querySelector(".li_horaires");
var contact = document.querySelector(".li_contact");
var cabinet = document.querySelector(".li_cabinet");
var section = 0;

accueil.addEventListener("click", () =>{
	section = 1;
  scroll();
})

propos.addEventListener("click", () =>{
	section = 2;
  scroll();
})

horaires.addEventListener("click", () =>{
	section = 3;
  scroll();
})

contact.addEventListener("click", () =>{
	section = 4;
  scroll();
})

cabinet.addEventListener("click", () =>{
	section = 5;
  scroll();
})

function scroll(){
  if(section == 1) {
      document.querySelector(".accueil").scrollIntoView({
        behavior: 'smooth',
        block: "end"
      })
  }

  if(section == 2) {
      document.querySelector(".a_propos").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      })
  }

  if(section == 3) {
      document.querySelector(".horaires").scrollIntoView({
        behavior: 'smooth',
        block: "end"
      })
  }

  if(section == 4) {
      document.querySelector(".contact").scrollIntoView({
        behavior: 'smooth',
        block: "end"
      })
  }

  if(section == 5) {
      document.querySelector(".c_slider").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      })
  }
}
