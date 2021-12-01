let list = "http://localhost:3000/users";
let apprenant = document.querySelector('.apprenants');

function apprenantList(){

    fetch(list)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function (users) {
        let tabUser = users;
        for (let i = 0; i < tabUser.length; i++) {
            let app = tabUser[i];
            apprenant.innerHTML += `<div class=" p-3"> 
                                        <div>
                                    <a href="/template/progression.html?id=${app.id}">
                                        ${app.lastname} ${app.firstname} 
                                    </a>
                                        </div>
                                    </div>`;
        }
    });  
}

let input = document.querySelector('#search');
input.addEventListener('change', filter)

function filter(e){
    apprenant.innerHTML='';

    let valeur = e.target.value;
    let uri = "http://localhost:3000/users?lastname="+ valeur;
    fetch(uri)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (user) {
            let tabUser = user;

        for (let i = 0; i < tabUser.length; i++) {
            let app = tabUser[i];
            apprenant.innerHTML += `<div class=" p-3"> 
                                        <div>
                                            <a href="/template/progression.html?id=${app.id}">
                                            ${app.lastname} ${app.firstname} 
                                            </a>
                                        </div>
                                    </div>`;
        }
        if ( apprenant.innerHTML=='') {
            apprenantList();
        }
    })
}

apprenantList();




