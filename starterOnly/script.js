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