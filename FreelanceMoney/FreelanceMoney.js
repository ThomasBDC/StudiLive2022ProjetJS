//Arrondir le résultat pour ne pas avoir 512.1654654654 (deux décimales max)
//Raffraichir le résultat au changement de l'input (onchange et onkeyup)
//Vérifier les données (si <0)
//Stocker en cookie le formulaire, pour le remplir avec notre dernier calcul
//Historique de calcul (seulement si clic sur calculer)
//Imprimer la page ??
//Convertir en pdf ou Excel ??
//Animation ??
//Envoyer mail ??

function CalculGain(){
    //On récupère le formulaire dans le html    
    let myForm = document.getElementById("formCalculGain");
    //On le transforme en objet FormData
    let formObj = new FormData(myForm);
    
    //On récupère les inputs de notre formulaire par leurs noms
    let tauxHoraire = formObj.get('TH');
    let tauxJournalier = formObj.get('TJM');
    let extras = formObj.get('Extras');

    let qtetauxHoraire = formObj.get('QteTH');
    let qtetauxJournalier = formObj.get('QteTJM');
    let qteextras = formObj.get('QteExtras');

    let charges = formObj.get('Charges');

    //On commence le calcul
    let gainHeure = tauxHoraire * qtetauxHoraire;

    let gainJour = tauxJournalier * qtetauxJournalier;

    let gainExtras = extras * qteextras;

    let totalBrut = gainHeure + gainJour + gainExtras;


    let chargeADeduire = (totalBrut * (charges/100));
    let totalNet = totalBrut - chargeADeduire;

    document.getElementById("resultatBrut").innerText = totalBrut+" €";
    document.getElementById("resultatDifference").innerText = chargeADeduire+" €";
    document.getElementById("resultatNet").innerText = totalNet+" €";

}