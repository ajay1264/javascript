//string in js

//concate the string

const name = "ajay"
const repoCount = 10

//console.log(name + repoCount );
// in modern day people use string interpolation toh usme backticks(`) use hoti hai 

console.log(`hello my name is ${name} and my repo is ${repoCount}`);

//another way to declare a string 

const gameName = new String('hitesh') //we can use 'new' keyword as obj and write in the constructor

/*
console.log(gameName[0]);
console.log(gameName.__proto__); //access the 

console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));

//console.log(gameName.indexOf('a'));

//const newString = gameName.substring(0,4)
//console.log(newString);
*/
const anotherString = gameName.slice(-8, 4) // it will could count from backwards 
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);    
console.log(newStringOne.trim());  //this is ue for to remove the spaces from the words 

//how to replace the word in string 

const url = "https://ajay.com/ajay20#"

console.log(url.replace('20#','='));


