// getterandsetter is used for the encryption of the password or to hide the thing that should be hide
// Getter: A method that gets the value of a specific property.
//Setter: A method that sets the value of a specific property.


class User {
    constructor(email, password){   
    this._email = email;
    this._password = password;
    }

    //getter for email 
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toLowerCase()
    }

}
const ajay = new User("ak@gmail.com", "123")
console.log(ajay.password);
console.log(ajay.email);