/** 
**Cette fonction prend deux paramètres : l'id de la balise et la value du label associé
cette fonction valide que le champ est au bon format
* ici : deux caractères au minimum
*Retourne vrai si le champ est valide
*/
function validerChampCivilite(balise,texte) {
//Récupération de la balise
const baliseAValider=document.getElementById(`${balise}`);
//Appel de la fonction viderBaliseErreur afin de supprimer le message d'erreur 
//d'une precedente valiaton du formulaire
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

/** 
**Cette fonction prend un paramètre : l'id de la balise email
cette fonction valide qu'un champ email est au bon format 
* ici : XX@XX.XX
*Retourne vrai si le champ est valide
*/
function validerEmail(email) {
    //Récupération de la balise
    const baliseEmail=document.getElementById(`${email}`)
    //Création d'une expression régulières de type XX@XX.XX
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    //Appel de la fonction viderBaliseErreur afin de supprimer le message d'erreur 
    //d'une precedente valiaton du formulaire
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


/** 
**Cette fonction prend un paramètre : l'id de la balise date de naissance
cette fonction valide qu'un champ date de naissance est au bon format 
* ici : 00/00/0000
*Retourne vrai si le champ est valide
*/
function birthdate(balise)
{
    const baliseBirthdate=document.getElementById(`${balise}`)
    //Création d'une expression régulières de type 1111-11-11
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

/** 
**Cette fonction prend un paramètre : l'id de la balise d'un champ nombre
cette fonction valide que le champ est bien remplie avec des nombres 
*Retourne vrai si le champ est valide
* 
*/
function validerNbr(balise)
{
    const baliseNbr=document.getElementById(`${balise}`)
     //Création d'une expression régulières de type valeur numérique
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

/** 
**Cette fonction prend deux paramètres : le nom de la balise checkbox et la value du dernier label
cette fonction valide qu'une checkbox a été sélectionné
* *Retourne vrai si un boton est sélectionné
*/
function validerRadio(balise,nomBalise)
{
    //Récupération des input de la balise
    let baliseCheckBox = document.querySelectorAll(`input[name="${balise}"]`)
    let check = ""
    viderBaliseErreur(nomBalise)
    //Pour chaque bouton récupéré on vérifie s'il a été coché
    //Si c'est le cas nous intérompons la boucle
    for (let i = 0; i < baliseCheckBox.length; i++) {
        if (baliseCheckBox[i].checked) {
            check = baliseCheckBox[i].value
            break
        }
    }
    //Si aucun bouton radio de sélectionnée alors on affiche un message d'erreur
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

/** 
**Cette fonction prend un paramètre : l'id de la balise d'un champ checkbox
cette fonction valide que la checkbox est coché 
*Retourne vrai si la chexkbox est coché
* 
*/
function validerCheckBox(balise)
{
    //Récupération de la propriété checked de la balise passée en paramétre
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

/** 
**Cette fonction prend deux paramètres : le message d'erreur a affiché
*et le champ qui n'est pas valide
*/
function afficherMessageErreur(message,balise) {
    
    //Récupére la balise d'un message d'erreur précedement créé
    let spanErreurMessage = document.getElementById(`erreurMessage${balise}`)

    //Si la balise n'existe pas on la créé
    if (!spanErreurMessage) {
        //Création d'une balise span
        spanErreurMessage = document.createElement("span")
        //Ajout de l'id permettant l'identification
        spanErreurMessage.id = `erreurMessage${balise}`
        //Recupération de l'ID du champ non valide passé en paramètre
        const baliseAValider=document.getElementById(`${balise}`)
        //Récupération de la balise parent
        const baliseParent=baliseAValider.parentNode
        //Ajout de la balise span au parent
        baliseParent.appendChild(spanErreurMessage)
        //Ajout du message d'erreur à la balise span
        spanErreurMessage.innerText = message
    }
    
}

/** 
**Cette fonction prend un paramètre : l'id de la balise d'un champ 
*cette fonction supprime la balise span avec le message d'erreur lié à la balise passé en paramètre
* 
*/
function viderBaliseErreur(balise)
{
    let baliseASupprimer = document.getElementById(`erreurMessage${balise}`)
    if(baliseASupprimer)
    {
        baliseASupprimer.remove()
    }
}