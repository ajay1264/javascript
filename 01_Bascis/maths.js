//nums 
/*
const score = 400
console.log(score);  //this is normal way to know the number

const balance = new Number(100)
console.log(balance);  //in this with the 'Number' word we can specific that we want the only 

console.log(balance.toString().length);  //we wii know the number of string that is 100 that has 3 numbers 

console.log(balance.toFixed(2));
console.log(balance.toFixed(1));

const otherNumber = 22.5656
console.log(otherNumber.toPrecision(3)); // it will give the o/p as 223 but if there was 22 the o/p will be 22.6

const hundreds = 1000   
console.log(hundreds.toLocaleString('en-IN')); //use 'en IN' to get the commas in indian values 

*/

//maths 
/*
console.log(Math);
console.log(Math.abs(-4)); //abs will convert from negative num to positve but will not convert the from pos to neg
console.log(Math.round(4.6)); // it will return 5 as round of 4.6 is 5
console.log(Math.ceil(4.2));  // it will return as 5 as ceil means upper value should be imp
console.log(Math.floor(4.9));  // it will return as 4 as floor means lower value will show 
console.log(Math.min(4,5,6,7,8));  //it will give the smallest number from the seq
console.log(Math.max(5,6,6,7,8,9)); //it will give the biggest num in the list 
*/

//Returns a pseudorandom number between 0 and 1.
console.log((Math.random()*10)+1);

const min = 10 
const max =20

console.log(Math.floor(Math.random()* (max - min + 1)) + min);
//

