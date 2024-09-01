
//Ternary operator
//condition  ? true : false

//e.g 
/*

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");




//   -------------------------Loops/iterators   ---------------loops.js
// for loop- syntax 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5 ){
        //console.log("5 is fucked");
    }

console.log(element);
    
}

//e.g
for (let i = 0; i < 5; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`inner loop value: ${j} and inner loop ${i}`);
    }
}

//how to multiply using for loop 

for (let i = 0; i < 5; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 5; j++) {
        //console.log(`inner loop value: ${j} and inner loop ${i}`);
        console.log(i + `*` + j + ` = ` + i*j);   //i+ x j = + ixj     1+ x 2 = 2
    }
}

//how to do array with for loop
let myArray = ["flash", "barman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}



//how to stop loop 
// break & continue 
//this is break 
for (let index = 1; index <=20; index++) {
    if (index == 5 ){
        console.log(`detected 5`);
        break;

        
    }

    console.log(`value of i is ${index}`);
    
}


//this is a continue
for (let index = 1; index <=20; index++) {
    if (index == 5 ){
        console.log(`detected 5`);
        continue                          //conntiue is like it will continue the count until 4 and detect 5 then it will again start running 

        
    }

    console.log(`value of i is ${index}`);
    
}


//   -----------------do-while loop ------------dowhileloop.js

//syntax:
do {
    
} while (condition);


//how to use while 
let index = 0 
while(index <= 10 ) {
    console.log(`value of index is ${index}`);
    index = index + 2 
}


//how to use while loop in array

let myArray = ["flash", "superman", "batman"]

let arr = 0 
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}



// do while loop 
//syntax
//    do {
    
//   } while (condition);

let score = 10 
//let score = 11       //imagine if we write 11 when the value we want to get is 10 so there the while loop will come as it kaam pehle hota hai condition baad main check hoti hai 
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);




//  ----------------- for of loop ------------ loops2.js

// for of 
//["", "", ""] 
//[{},{},{}]

//for of loop on array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

//for loop in string 

const greetings = "Hello world"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

*/

