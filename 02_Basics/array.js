//array
// js arrays are resizeable that means we can add more elements that can be mixed of any datatype 
//declare a array 

const myArr = [1, 2, 3, 4, 5]
//console.log(myArr);

const myHeros = ["shaktiman", "sherkhan"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

//array methods 

//myArr.push(6)  //The push() method in JavaScript adds one or more elements to the end of an array and returns the new length of the array
//myArr.pop()   //simply array ki jo last value rahegi usko remove kardega

//myArr.unshift(8)  //usually not use much but it add the value in first of the array list 
//myArr.shift()    //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

//console.log(myArr.includes(9));  //it will tell whether there is 9 if its in there it will say true either false 
//console.log(myArr.indexOf(3));   // in myArr on third position it is 2 so the o/p will be 


//const newArr = myArr.join() // this newArr will copy the refernce of myArr 

//console.log(myArr);        
//console.log(typeof newArr);  //and they will also changed the datatype as string 

//slice and splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);


/*
slice method: The slice() method creates a new array from a portion of an existing array without modifying the original array.


let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Using slice() to create a new array with elements from index 1 to 3 (exclusive)
let slicedFruits = fruits.slice(1, 4); // ['banana', 'cherry', 'date']

console.log(fruits);       // Original array remains unchanged: ['apple', 'banana', 'cherry', 'date', 'elderberry']
console.log(slicedFruits); // New array created by slice(): ['banana', 'cherry', 'date']


splice method: The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

*/
let months = ['January', 'March', 'April', 'June'];

// Using splice() to remove elements and add new ones
let removedMonths = months.splice(1, 2, 'February', 'May');

console.log(months);         // Original array modified: ['January', 'February', 'May', 'June']
console.log(removedMonths);  // Elements removed by splice(): ['March', 'April']





