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