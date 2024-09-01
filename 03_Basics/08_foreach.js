

//  -------------------loops-on-obj/array-------------loopobj.js

// loops in obj 


//it will check the index value then it will go for the index is < > than 10 than it will go to the console then it print the value then before exiting from the block it will go to index ++ then again repeat the process

// for (let i = 0; i <= 10; i++) {
//     const element = array[i];
    
// }

//for in loop in object 
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'Ruby',
    py: 'python'
}
for (const key in myObject) {
        console.log(`${key} shortcut is for ${myObject[key]}`);
        
    
}


//for in loop in array

/*const myArr = ["a", "j", "a", "y"]        //recheck this code in the chat gpt 

for (const Arr in myArr) {
    console.log(`Array of ajay is ${myArr}`);   // in arrays keys are 01234
   
        
    }


const programming = ["js", "rb", "py"]
for (const key in programming) {
    console.log(programming[key]);   
    
}


//---------for each loop ------------

//for each loop in array

const coding = ["js", "rb", "java"]

coding.forEach(function (val) {
   console.log(val);
})

//arrow function is for each loop in array 

const coding = ["js", "rb", "java"]

coding.forEach((item) => {
    console.log(item);
    
});


//a function printme can print just give the refernce to it 

const coding = ["js", "rb", "java"]

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)



//foreach has different access as it has access of items array and index

const coding = ["js", "rb", "java"]

coding.forEach( (item , index, arr)=> {
    console.log(item, index, arr);
})





//multiple objects in array and how to access it by foreach loop 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"

    },
    {


    },
    {

    },
    {

    },
]
 
myCoding.forEach(  (item)=> {
    console.log(item.languageFileName);
})



// for each loop did not return the value as it gives undefined 



//filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num)=>num > 4)
console.log(newNums);



//when we use parenthesis in arrow functions we have to wrtie return keyword 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num)=>  {
   return num > 4}                           //write the return keyword in the start of the opening parenthesis its because you start a scope {}
)
console.log(newNums);



//so you want the same op but using array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  //check this code in chatgpt get the correction
const newNums = []

const newNums=myNums.forEach((num)=>{
    if(num > 4) {
        newNums.push(num)
    }
})


//how to get the values from the dataabse 
const books = [
    {title:'book one', genre:'fiction', publish: 1980,edition: 2004},
    {title:'book two', genre:'history', publish: 1996,edition: 2004},
    {title:'book three', genre:'fiction', publish: 1980,edition: 2004},
    {title:'book four', genre:'history', publish: 2020,edition: 2004},
    {title:'book five', genre:'fiction', publish: 1980,edition: 2004},
    {title:'book six', genre:'history', publish: 1997,edition: 2004},
    {title:'book seven', genre:'fiction', publish: 1980,edition: 2004},
    
]

//const userBooks = books.filter((bk)=>bk.genre === 'history')

//let userBooks = books.filter((bk)=> {return bk.publish >= 1995})
let userBooks = books.filter((bk)=> {return bk.publish >= 1995 && bk.genre === 'history'})

userBooks = books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre === 'history'
})

//userBooks = books.filter((bk)=>)
console.log(userBooks);


*/