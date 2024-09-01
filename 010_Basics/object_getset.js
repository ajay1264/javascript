const User = {
    _email: 'fjdjkls',
    _password: "567",

    get email(){
        return this._email.toUpperCase();
        
    },
    set email(value){
        this._email = value
    }
}
const chai = Object.create(User)
console.log(chai.email);

//private properties in es22 