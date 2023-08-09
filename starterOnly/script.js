/** 
**Cette fonction prend un nom en paramètre et valide qu'il est au bon format
* ici : deux caractères au minimum
* @param {string} nom 
* @throws {Error}
*/
function validerChampCivilite(balise,texte) {
const baliseAValider=document.getElementById(`${balise}`);
viderBaliseErreur(balise)
    try{
        if (baliseAValider.value.length < 2) 
        {
            throw new Error(`Veuillez entrer 2 caractères ou plus pour le champ du ${texte}. `)
        }
        return true
    }
    catch(erreur){
        afficherMessageErreur(erreur.message,balise)
    }
   
   
}

function validerEmail(email) {
    const baliseEmail=document.getElementById(`${email}`)
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    viderBaliseErreur(email)
    try
    {
        if (!emailRegExp.test(baliseEmail.value)) 
        {
            throw new Error("L'email n'est pas valide.")
        }
        return true 
    }
    catch(erreur)
    {
        afficherMessageErreur(erreur.message,email)
    }
   
}

function birthdate(balise)
{
    const baliseBirthdate=document.getElementById(`${balise}`)
    let birthdateRegExp = RegExp(/^\d{4}-\d{2}-\d{2}$/)
    viderBaliseErreur(balise)
    try
    {
        if (!birthdateRegExp.test(baliseBirthdate.value)) 
        {
            throw new Error("Vous devez entrer votre date de naissance.")
        }
        return true
    }
    catch(erreur)
    {
        afficherMessageErreur(erreur.message,balise)
    }   
}

function validerNbr(balise)
{
    const baliseNbr=document.getElementById(`${balise}`)
    let nbrRegExp = new RegExp("[0-9]+")
    viderBaliseErreur(balise)
    try
    {
        if (!nbrRegExp.test(baliseNbr.value)) 
        {
            throw new Error("Veuillez saisir un nombre.")
        }
        return true
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
    viderBaliseErreur(nomBalise)
    for (let i = 0; i < baliseCheckBox.length; i++) {
        if (baliseCheckBox[i].checked) {
            check = baliseCheckBox[i].value
            break
        }
    }
    try{
        if(check=="")
        {
            throw new Error("Vous devez choisir une option.")  
        }
        else{
            afficherMessageErreur("",nomBalise)
            return true
        }
    }
    catch(erreur){
        afficherMessageErreur(erreur.message,nomBalise)
    }
   
}

function validerCheckBox(balise)
{
  let baliseCheckBox = document.getElementById(`${balise}`).checked
  viderBaliseErreur(balise)
  try{
    if(!baliseCheckBox){
        throw new Error("Vous devez vérifier que vous acceptez les termes et conditions.")  
    }
    return true
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

function viderBaliseErreur(balise)
{
    // const baliseASupprimer = document.getElementById("erreurMessage")
    let baliseASupprimer = document.getElementById(`erreurMessage${balise}`)
   if(baliseASupprimer){
    baliseASupprimer.remove()
    }
}