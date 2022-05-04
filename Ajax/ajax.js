//TODO : Je veux afficher l'image qui m'est retournée en plus du nom et du prenom de l'utilisateur
//Afficher aussi l'email
//Faire ça un peu plus joli
//Faire une petite card pour chaque utilisateur

//Pour les lives d'après
//-->Pouvoir changer la page... (demander page 1, puis page 2)

//Encore après 
//faire un tableau avec la pagination déjà gérée (nb pages, éléments totaux...)


//Appel ajax, et on continue
function getUsers(numeroPage){
    document.getElementById("allUtilisateurs").style.opacity = 0;
    document.getElementById("loader").style.opacity = 1;
    document.getElementById("pagination").innerHTML = '';
    const xhr = new XMLHttpRequest();
    const url = 'https://reqres.in/api/users?delay=3&page='+numeroPage;
    xhr.open('GET', url);
    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200){
                //On gère le retour de notre appel Ajax
                console.log("Response = " + xhr.response);
                const object = JSON.parse(xhr.response);
                setUsersInPage(object);
            }
            else if(xhr.status == 404){
                alert("Impossible de trouver l'url de la requête ajax");
            }
            else{
                alert("Une erreur est survenue");
            }
        };
    });
    xhr.send();
}

//On affiche le résultat de l'appel ajax dans la page
function setUsersInPage(listUsers){
    //On ajoute la liste des utilisateurs
    let myhtml = "";
    listUsers.data.forEach(element => {
        myhtml += '<div><img src="'+element.avatar+'"/><p>'+element.first_name+' '+element.last_name+'</p> </div>'
    });
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("allUtilisateurs").innerHTML = myhtml;
    document.getElementById("allUtilisateurs").style.opacity = 1;
    //On crée la pagination
    let nbPage = listUsers.total_pages;
    let currentPage = listUsers.page;

    let htmlPagination = "";
    for (let i = 1; i <= nbPage; i++) {
        if(i == currentPage){
            htmlPagination += '<button class="btn active" disabled>'+i+'</button>'
        }
        else{
            htmlPagination += '<button class="btn" onclick="getUsers('+i+')">'+i+'</button>'
        }
    }

    document.getElementById("pagination").innerHTML = htmlPagination;
}

document.addEventListener("DOMContentLoaded", function() {
    getUsers(1);
});
