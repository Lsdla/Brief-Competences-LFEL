import { Skill } from "./skill";

export class Level {
    _id;
    _wording;

    constructor(data) {
        this._id = data.id
        this._wording= data.wording
    }

    getLevels() {
        return  `
                    <li class="list-levels">
                        ${this._id} - ${this._wording}
                        <span>
                            <input type="checkbox" name="level">
                        </span>
                    </li>
                `
    }
}