export class Activity {
    _id;
    _wording;

    constructor(data) {
        this._id = data.id
        this._wording= data.wording
    }

    getActivities() {
        return `<ul>
                    <li class="list-activities">
                        <span>
                            <svg width="22" height="22" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="star${this._id}" d="M15 0.210003L19.0596 11.6374H29.96L21.0656 18.349L24.2463 30.1266L15 23.0648L5.7554 30.1266L8.9344 18.349L0.0382996 11.6374H10.9387L15 0.210003Z" />
                            </svg>
                        </span>
                        ${this._id} - ${this._wording}
                        <span class="plus-icon">
                            <svg width="22" height="22" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="plus${this._id}" d="M14.1667 28.3346C6.34667 28.3261 0.0085 21.9879 0 14.1679V13.8846C0.155833 6.09999 6.56625 -0.100759 14.3508 0.00124054C22.1383 0.106074 28.3815 6.47399 28.3305 14.26C28.2795 22.0474 21.9541 28.3346 14.1667 28.3346ZM7.08333 12.7512V15.5846H12.75V21.2512H15.5833V15.5846H21.25V12.7512H15.5833V7.08457H12.75V12.7512H7.08333Z" />
                            </svg>
                        </span>
                    </li>
                    <div id="skills-container${this._id}" class="skills-container hide"></div>
                </ul>`
    }
}