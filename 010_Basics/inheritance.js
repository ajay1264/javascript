class User {
    constructor(username){
        this.username = username
    }     
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
const user = new User("ajay");
user.logMe();

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai", "a@mia", "123")
chai.addCourse()

