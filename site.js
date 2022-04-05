function disBonjour(){
    alert("Bonjour monsieur");
}

function utiliseLesSelecteurs(){
    //Récupérer tous les éléments via leurs nom de balise html
    // <div></div>
    let mesDiv = document.getElementsByTagName('div');
    console.log(mesDiv);

    //Récupérer un élément via son identifiant
    // <div id="noeud"></div>
    let monElement = document.getElementById('noeud');
    console.log(monElement);

    //Récupérer les élements via leurs noms 
    // <input name="monnom" />
    let ElementByName = document.getElementsByName('monNom'); 
    console.log(ElementByName);

    //récupérer les élements par classe 
    // <div class="maClasse"></div>
    let ElemByClass = document.getElementsByClassName('maClasse');
    console.log(ElemByClass);

    //récupérer un élément comme on pourrait le faire en CSS

    //va récupérer le premier élément correspondant
    let querySelector = document.querySelector('p i.maClasse');

    //va récupérer tous les éléments correspondant
    document.querySelectorAll('div')
    console.log(querySelector);
}



function RemplaceLeTexte(){
    //Récupérer le texte qui est dans l'input
    let textInput = document.getElementById('leTexteARecuperer').value;
    
    //Récupérer le noeud <p id="leTexteARemplacer">
    let monParagraphe = document.querySelector('#leTexteARemplacer');
    
    //Mettre le texte de l'input
    //dans le noeud
    monParagraphe.textContent = textInput;
}

function RefreshWysiwyg(){
    let textTitre = document.getElementById('titreWysiwyg').value;
    document.querySelector('#titreWysiwygResultat').textContent = textTitre;

    let textContent = document.getElementById('contentWysiwyg').value;
    document.querySelector('#contentWysiwygResultat').textContent = textContent;

    let imgSrc= document.getElementById('imgWysiwyg').value;
    document.getElementById('imgWysiwygResultat').src = imgSrc;
}

var btn = document.getElementById("btnGenererWysiwyg");
btn.addEventListener('click', RefreshWysiwyg);


var mesInputsWithEvents = document.querySelectorAll(".onChangeRefreshWysiwyg");

mesInputsWithEvents.forEach(monInput => {
    //Mon itération
    monInput.addEventListener("keyup", RefreshWysiwyg);
    monInput.addEventListener("change", RefreshWysiwyg);
});