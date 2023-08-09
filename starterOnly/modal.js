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
const fermetureModal = document.querySelectorAll(".close");
const form=document.querySelector('form');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  document.querySelector(".formConfirmation").style.display = "none";
  document.querySelector(".modal-body").style.display = "block";
  modalbg.style.display = "block";
  
}


//TODO : fermer la modale
//Pour tous les éléments fermtureModal on ajoute un événement au click
fermetureModal.forEach((btn) => btn.addEventListener("click", closeModal));

//Fonction de fermture de la Modal
function closeModal() {
  //On affecte la propriété display = non à l'élément modalbg
  //On cache la modal
  modalbg.style.display = "none";
}

//Ajout d'un évévement lorsque l'on submit le formulaire
form.addEventListener("submit",(event)=>{

  //On empêche le comportement par défaut
  event.preventDefault();
  

if(validerChampCivilite(`first`,"Prénom") && 
    validerChampCivilite(`last`,"Nom") && 
    validerEmail(`email`) && 
    birthdate(`birthdate`) && 
    validerNbr('quantity') && 
    validerRadio(`location`,`location6`) &&
    validerCheckBox(`checkbox1`))
{
  document.querySelector(".modal-body").style.display = "none";
  document.querySelector(".formConfirmation").style.display = "block";
}

});
