//TODO : Je veux afficher l'image qui m'est retournée en plus du nom et du prenom de l'utilisateur
//Afficher aussi l'email
//Faire ça un peu plus joli
//Faire une petite card pour chaque utilisateur

//Pour les lives d'après
//-->Pouvoir changer la page... (demander page 1, puis page 2)

//Encore après 
//faire un tableau avec la pagination déjà gérée (nb pages, éléments totaux...)


function ShowUsers(){
    //Initialise ma requête
    //Je mets ma lettre dans mon enveloppe

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=1');
    
    //Je veux choper le retour de ma requête
    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200){
                //On gère le retour de notre appel Ajax
                console.log("Response = " + xhr.response);
                const object = JSON.parse(xhr.response);

                let myhtml = "";
                object.data.forEach(element => {
                    myhtml += '<div><p>'+element.first_name+' '+element.last_name+'</p> </div>'
                });
                document.getElementById("allUtilisateurs").innerHTML = myhtml;
            }
            else if(xhr.status == 404){
                alert("Impossible de trouver l'url de la requête ajax");
            }
            else{
                alert("Une erreur est survenue");
            }
        };
    });


    //Je la donne au facteur
    xhr.send();
}