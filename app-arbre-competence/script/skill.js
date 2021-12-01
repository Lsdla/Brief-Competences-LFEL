export class Skill {
    _wording;

    constructor(data){
        this._wording= data.wording
    }
}



/**
 * get des compétences pour chaque user au clique sur chaque user on récupére son id qu'on met dans l'uri
 * mise en place d'un html dynamique 
 * template += `
      <div class="skill">
        <h2>${activity.id}</h2>
        <p>${skill.wording}</p>
        <a href="/details.html?id=${skill.id}">Read more</a>
      </div>
 */