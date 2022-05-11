//TODO : Je veux afficher l'image qui m'est retournée en plus du nom et du prenom de l'utilisateur
//Afficher aussi l'email
//Faire ça un peu plus joli
//Faire une petite card pour chaque utilisateur

//Pour les lives d'après
//-->Pouvoir changer la page... (demander page 1, puis page 2)

//Encore après 
//faire un tableau avec la pagination déjà gérée (nb pages, éléments totaux...)


//Appel ajax, et on continue
//Requete GET
function getUsers(numeroPage){
    document.getElementById("allUtilisateurs").style.opacity = 0;
    document.getElementById("loader").style.opacity = 1;
    document.getElementById("pagination").innerHTML = '';
    const xhr = new XMLHttpRequest();
    const url = 'https://reqres.in/api/users?page='+numeroPage;
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


function createUser(){
    //On doit faire une requête post
    const xhr = new XMLHttpRequest();

    //1 - Mon URL
    const url = 'https://reqres.in/api/users';

    //2 - Ma méthode
    const methode = 'POST';

    //3 - Mon content-type 
    const contentType = "application/json;charset=UTF-8";

    //4 - Le contenu de ma requête (mes paramètres)
    let myForm = new FormData();
    myForm.append('name', 'Abdallah');
    myForm.append('job', 'Développeur');
    var json = convertToJson(myForm);


    xhr.open(methode, url);
    xhr.setRequestHeader("Content-Type", contentType);
    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 201){
                //On gère le retour de notre appel Ajax
                console.log("Response = " + xhr.response);
                const object = JSON.parse(xhr.response);
                console.log(object);
            }
            else if(xhr.status == 404){
                alert("Impossible de trouver l'url de la requête ajax");
            }
            else{
                alert("Une erreur est survenue");
            }
        };
    });

    xhr.send(json);
}

function createUserApiFetch(){
    const headers = new Headers();
    headers.append("Content-Type", "application/json")
   
    const body = JSON.stringify({
        name: document.getElementById("Nom").value,
        job: document.getElementById("Job").value
    }); 
    
    const init = { 
        method: 'POST',
        headers: headers,
        body: body };
    
    fetch('https://reqres.in/api/users', init)
        .then(response => {
            return response.json();
        })
        .then(response => {
            alert(response)
            console.log(response)
        })
        .catch(error => alert("Erreur : " + error));
}

function deleteUser(){
    const headers = new Headers();
   
    const init = { 
        method: 'DELETE',
        headers: headers
    };
    
    fetch('https://reqres.in/api/users/2', init)
        .then(response => {
            if(response.status == 204){
                alert("L'utilisateur a bien été supprimé");
            }
            else{
                alert("Impossible de supprimer l'utilisateur");
            }
        })
        .catch(error => alert("Erreur : " + error));
}

function editUser(){
    const headers = new Headers();
    headers.append("Content-Type", "application/json")
    headers.append("Authentification", "Bearer POUYDPOSY ODISUYD FGD KJFDF P")
   
    const body = JSON.stringify({
        name: document.getElementById("Nom").value,
        job: document.getElementById("Job").value
    }); 
    
    const init = { 
        method: 'PUT',
        headers: headers,
        body: body };
    
    fetch('https://reqres.in/api/users/2', init)
        .then(response => {
            return response.json();
        })
        .then(response => {
            alert(response)
            console.log(response)
        })
        .catch(error => alert("Erreur : " + error));
}



function convertToJson(datas){
    var object = {};
    datas.forEach((value, key) => object[key] = value);
    return JSON.stringify(object);
}


