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
//Elements de fermeture de la modal
const fermetureModal = document.querySelectorAll(".close");
//Elements formulaire
const form=document.querySelector('form');
//Bouton Fermer sur la modal de confirmation d'inscription
const btnFermerConfirmation=document.getElementById("btn-fermer");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  //Masque la div de confirmation d'inscription
  document.querySelector(".formConfirmation").style.display = "none";
  //Affiche la div d'inscription
  document.querySelector(".modal-body").style.display = "block";
  modalbg.style.display = "block";
}

//TODO : fermer la modale
//Pour tous les éléments fermtureModal on ajoute un événement au click
fermetureModal.forEach((btn) => btn.addEventListener("click", closeModal));

//Fonction de fermture de la Modal
function closeModal() {
  //On affecte la propriété display = none à l'élément modalbg
  //On cache la modal
  modalbg.style.display = "none";
}

//Ajout d'un évévement lorsque l'on submit le formulaire
form.addEventListener("submit",(event)=>
{
  //On empêche le comportement par défaut
  event.preventDefault();
  
  //Test si tous les champs sont valides à l'aide de fonction
  if(validerChampCivilite(`first`,"Prénom") && 
    validerChampCivilite(`last`,"Nom") && 
    validerEmail(`email`) && 
    birthdate(`birthdate`) && 
    validerNbr('quantity') && 
    validerRadio(`location`,`location6`) &&
    validerCheckBox(`checkbox1`))
    {
      //Si vrai on masque la modal d'inscription
      document.querySelector(".modal-body").style.display = "none";
      //Affiche la div de confirmation d'inscription
      document.querySelector(".formConfirmation").style.display = "block";
    }
});

//Ajout d'un événement losque l'on clique sur le bouton fermer
//de la div de confirmation d'inscription
btnFermerConfirmation.addEventListener("click",(event)=>{
  //On empêche le comportement par défaut
  event.preventDefault();
  //Masque la modal
  modalbg.style.display = "none";
  
})
