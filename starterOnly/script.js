/** 
**Cette fonction prend un nom en paramètre et valide qu'il est au bon format
* ici : deux caractères au minimum
* @param {string} nom 
* @throws {Error}
*/
function validerChampCivilite(balise,texte) {
const baliseAValider=document.getElementById(`${balise}`);

    try{
        if (baliseAValider.value.length < 2) 
        {
            throw new Error(`Le ${texte} est trop court. `)
        }
    }
    catch(erreur){
        afficherMessageErreur(erreur.message,balise)
    }
   
   
}

function validerEmail(email) {
    const baliseEmail=document.getElementById(`${email}`)
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    try
    {
        if (!emailRegExp.test(baliseEmail.value)) 
        {
            throw new Error("L'email n'est pas valide.")
        }
    }
    catch(erreur)
    {
        afficherMessageErreur(erreur.message,email)
    }
   
}

function validerNbr(balise)
{
    const baliseNbr=document.getElementById(`${balise}`)
    let nbrRegExp = new RegExp("[0-9]+")
    try
    {
        if (!nbrRegExp.test(baliseNbr.value)) 
        {
            throw new Error("Veuillez saisir un nombre.")
        }
    }
    catch(erreur)
    {
        afficherMessageErreur(erreur.message,balise)
    }
}

function validerRadio(balise,nomBalise)
{
    let baliseCheckBox = document.querySelectorAll(`input[name="${balise}"]`)
    let check = ""
    for (let i = 0; i < baliseCheckBox.length; i++) {
        if (baliseCheckBox[i].checked) {
            check = baliseCheckBox[i].value
            break
        }
    }
    try{
        if(check=="")
        {
            throw new Error("Veuillez cocher une case.")  
        }
        else{
            afficherMessageErreur("",nomBalise)
        }
    }
    catch(erreur){
        afficherMessageErreur(erreur.message,nomBalise)
    }
    // console.log(couleur) // affiche la valeur du radio coché
}

function validerCheckBox(balise)
{
  let baliseCheckBox = document.getElementById(`${balise}`).checked
  try{
    if(!baliseCheckBox){
        throw new Error("Veuillez cocher la case J'ai lu et accepté les conditions d'utilisation.")  
    }
  }
  catch(erreur){
    afficherMessageErreur(erreur.message,balise)
  }
}

function afficherMessageErreur(message,balise) {
    
    let spanErreurMessage = document.getElementById(`erreurMessage${balise}`)

    if (!spanErreurMessage) {
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = `erreurMessage${balise}`
        const baliseAValider=document.getElementById(`${balise}`)
        const baliseParent=baliseAValider.parentNode
        baliseParent.appendChild(spanErreurMessage)
        spanErreurMessage.innerText = message
    }
    
    
}