function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//TODO : fermer la modale
//Pour tous les éléments modalClose on ajoute un événement au click
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
// launch modal close
function closeModal() {
  //On affecte la propriété display = non ) l'élément modalbg
  //On cache la modal
  modalbg.style.display = "none";
}

