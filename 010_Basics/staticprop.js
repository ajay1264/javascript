class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createdId(){
        return '123'
    }
}
const ajay = new User("ajay")
//console.log(ajay.createdId);





///
class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email

    }
}
const iphone = new Teacher("iphone","ph@gmai.com")
//iphone.logMe();
console.log(iphone.createdId);
