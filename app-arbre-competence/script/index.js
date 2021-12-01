import { Activity } from "./activity";
import { Level } from "./level";
import { Skill } from "./skill";

let formContainer = document.querySelector('#form-activities');
console.log(formContainer);

// -----------------------------------------------------------------------------------
//                   Affichage de la liste d'activité
// -----------------------------------------------------------------------------------

function renderActivities() {
    let uri = "http://localhost:3000/activities";

    fetch(uri)
        .then(res => res.json())
        .then(activities => {
            let template = '';
            activities.forEach(activity => {
                let activityDetails = new Activity(activity)
                template += activityDetails.getActivities();
                formContainer.innerHTML = template;
            });
            displaySkillsList();
        })
}

// -----------------------------------------------------------------------------------
//                Affichage de la liste de compétences 
// -----------------------------------------------------------------------------------

function displaySkillsList() {
    let plusIcons = document.querySelectorAll('.plus-icon');
    for (let i = 0; i < plusIcons.length; i++) {
        plusIcons[i].addEventListener("click", getSkillsList);
    }
}

function getSkillsList(e) {
    let id = e.target.getAttribute("id").substring(4);
    let template = document.querySelector(`#skills-container${id}`);
    let uri = "http://localhost:3000/skills?idActivity=" + id;

    fetch(uri)
    .then(res => res.json())
    .then(skills => {
        template.innerHTML = '';
        skills.forEach(skill => {
            skillDetails = new Skill(skill)
            template.innerHTML += skillDetails.getSkills();
            //formContainer.appendChild(template);
        });
        template.classList.toggle('hide');
        displayLevelList();
    })
}

// -----------------------------------------------------------------------------------
//                       Affichage de la liste de niveaux
// -----------------------------------------------------------------------------------

function displayLevelList() {
let skillIcons = document.querySelectorAll('.list-skills span');
    for (let i = 0; i < skillIcons.length; i++) {
        skillIcons[i].addEventListener("click", getLevelsList);
    }
}

function getLevelsList(e) {
    //let id = e.target.getAttribute("id").substring(4);
    let levelsContent = document.querySelectorAll('.levels-container');
    for (let i = 0; i < levelsContent.length; i++) {
    
        let uri = "http://localhost:3000/level";
    
        fetch(uri)
            .then(res => res.json())
            .then(levels => {
                levelsContent[i].innerHTML = '';
                levels.forEach(level => {
                    levelDetails = new Level(level)
                    levelsContent[i].innerHTML += levelDetails.getLevels();
                });
                levelsContent[i].classList.toggle('hide');
            })
    }
}

// -----------------------------------------------------------------------------------
//                       Post d'un nouvel utilisateur 
// -----------------------------------------------------------------------------------

let form = document.getElementById("form");

    
    function postUser() {
        let uriUser = "http://localhost:3000/users";
        let uriProgress = "http://localhost:3000/progress";
    
    
    
        const doc = {
            firstname: form.firstname.value,
            lastname: form.lastname.value
        }

        fetch(uriUser, {
            method: "POST",
            body: JSON.stringify(doc),
            headers:{ 'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(newUser => {
                console.log(newUser);

                alert("bamab");
                const docProgress = [
                    {
                        idUser: newUser.id,
                        idSkill: "C1",
                        idLevel: 1
                    },
                    {
                        idUser: newUser.id,
                        idSkill: "C2",
                        idLevel: 1
                    }
                ]
                fetch(uriProgress, {
                    method: "POST",
                    body: JSON.stringify(docProgress),
                    headers: { 'Content-Type': 'application/json' }
                })
                    .catch(e => {
                    console.log(e);
                })
        })

        window.location.replace("/");
}


let buttonValid = document.getElementById('valid-btn');
console.log(buttonValid);
buttonValid.addEventListener('click', postUser);

renderActivities();