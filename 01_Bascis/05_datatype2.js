// primitive data type

// 7 types :String , Number , Boolean, null , Undefined, Symbol , Bigint

//const score = 100
//const scoreValue = 100.3

//const isLoggedIn = false 
//const outsideTemp = null 
//let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //isme id not equal hai symbol se isliye woh false hai

const bigNumber = 12345678912n


//Reference non primitive

// Array, Object, Function  


const heros = ["shaktiman" , "hanuman"]
let myObj = {
    name: "ajay"
    age: 22,
}
console.log("myObj");
//const myFunction = function(){
    //console.log("hello world");

/* 
undefined typeof value undefined  
null typeof value object 
boolean typeof value boolean 
number typeof value number
object typeof value object 
string typeof value string 


read more about the typeof in mdn doc
*/