export class User{
    _id;
    _firstname;
    _lastname;

    constructor(data){
        this._id = data.id;
        this._firstname = data.firstname;
        this._lastname = data.lastname
    }
}