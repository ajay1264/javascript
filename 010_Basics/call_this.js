//call keyword 

function SetUsername(username){
    //complex db calls 
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}
const chai = new createUser("chai","c@MAIL","123")
console.log(chai);