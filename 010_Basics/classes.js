/*
//javascript and classes 

//oop is programming paradime and it simply means that style of code reference 

//object 
-collection of properties and methods 
-tolowercase

//why use oop

//parts of oop
object literal it means literal only

-constructor function
-prototypes
-classes
-instances(new this)

// 4 pillars
Abstraction 
Encapsulation
Inheritance
Polymorphism

*/

//object literal 

// const user = {
//     username: "ajay",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         //console.log(`Username: ${this.username}`);        //  [.this] will give you the value that is outside the function without this the value will be undefined 
//         console.log(this);
//     }
// }
// console.log(user.username);
// //console.log(user.getUserDetails());
// console.log(this);                          //when we call .this to global function it will give you a empty curly braces 


//construction main

//const promiseOne = new Promise()   // in this [new] is the constructor main which is doing the work for all the promises

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //return this 
}
const userOne =  new User("ajay",12, true)

//const userTwo = User("AR",11, false)      //as we can see the usertwo overwrited the value of one as it will make a huge clash upfront 
const userTwo = new User("AR",11, false)      //so the solution is to use new keyword to stop the clashes 
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);   //it is a refernce of ourself

//instanceof method 
