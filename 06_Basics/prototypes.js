/*Prototypes in object 
prototype means ek kaam js leta hai usko kuch na kuch object deta hi hai 

       function
            ||
array => object => null
           || 
        string


*/

function multipleBy5(num){    //created a function
    return num*5
}
multipleBy5.power = 2    //here we mby5 power 2
// console.log(multipleBy5(5));   //then 5 * 5 =25
// console.log(multipleBy5.power);   //above 2 is declare as power
// console.log(multipleBy5.prototype); //in prototype there is empty object 

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai =  new createUser("chai",25)
const tea = new createUser("tea", 250)

chai.printMe()


/*
//here's what happens behind the scenes when the new keyword is used:
A new object is created: The new keyword initaites the creation of a new js object

A prototype is linked: the newly created objecct gets linked to the prototype of the constructor function
This means that it has access to properties and methods defined on the constructor prototype.

The constructor is called: The constructor function is called with specified arguments and this is bound to 
the newly created object. If no explicit return value is specified from the constructor,
javascript assumes this the newly created object to be the intended return value .

The new object is returned: After the constructor function has been called if it doesnt return a 
non primitive value (object,array,function etc) the newly created object  is returned



*/



