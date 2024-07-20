            // -------ARROW FUNCTIONS------arrowfunction.js
/*
              
//thin that you are handling a page where you were takinng money for the course 

const user = {
    username: "ajay",
    price: 999,

    welcomeMessage: function(){        //so you have to show message welcome     
        console.log(`${this.username}, welcome to website`);     //"this" is use for the arrow functions 
        //console.log(this);        //now the context is shown in the o/p  
    }
}
//user.welcomeMessage()    //so till "this" value was ajay but after changing the context the value changed to roy
//user.username = "roy"
//user.welcomeMessage()


//under console explaination: so pehle ek hi tarika tha js ko run karke woh tha browser ke andar but abhi uske different engines hai jisko naam diya node etc 
// jo browser ke andar jo obj hai woh global object hai /open google=>inspect=>console=>"console.log(this);"=>clk window aur woh ek global object hai
console.log(this);        //in this there is a empty {} brackets 




//

function chai(){
    console.log(this);
}

chai()  //as you can see there is multiple values shown in the output 


function chai(){
    let username = "ajay"  //we will see after writing username and accessing it 
    console.log(this.username); //we cannot do this as this value will come undefined
}

chai()  //as you can see there is multiple values shown in the output 


//aur kaise declare kar sakte hai arrow functions ke through

const chai = () =>{       //using "=>" we can declare this arrow function
    let username = "ajay"
    console.log(this);

}
chai()


// this is how arrow functions is written () => {}
//how to add using arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));


//IMPLICIT RETURN with the above example
//agar { } curlies use hua toh return keyword likhna hoga 
const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(3,4));


//abhi agar AF se object return karna hoga toh 

const addTwo = (num1, num2) => ({username: "ajay" })  //obj return ke liye humme {} use karna imp hai 

console.log(addTwo(3,4));

*/


//    ---------[IIFE]-- Immediately Invoked Expressions ------------ 


// def: functions immediately execute hojaye
//global scope ko pollute nhi karan hai hume

function chai(){
    console.log(`DB connected`);

}
chai()


//jab global scope pollute ho jata hai 
 //named iife
(function chai(){                   //((){})();
    console.log(`DB connected`);

})();  //so humne dekha ki hum () brackets fuction ke around lagake aur phir uske end main direct function call karke use likh sakte hai 

//unnamed iife -

( (name)=> {                                    // (()=>{})();   this is done by arrow function 
    console.log(`db connected to ${name}`);
}) ('ajay')




//   ---------Javascript Execution Context  ------ JEC.js

//{} this is code file and this is global execution context usually the code has divided into 2 phase first is "memory creationn phase" 2nd is "Execution phase"  
//and also there is one more context that is "Function Execution Context" and "Eval Execution Context"
//javasscript is single threaded
//remember every one has different context like in node bun windows 
/*
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result = addNum(val1, val2)
let result2 = addNum(10,2)

/*phases of above code
1) Global Execution it is allocated in " this "
2) Memory phase -val1 > undefined
                 val2 > undefined 
                 addNum > defination
                 result1 > undefined
                 result2 > undefined 
3) Execution phase - val1 <-10
                     val2 <-5
                    addNum -> ke andar kuch bhi nhi hora hai"-
                    line 7 -> new variable ennvironment + execution thread 
4) memory phase:         Execution phase:
   val1-> undefined       num1 -> 10 
   val2-> undefined       num2 -> 5
   total-> undefined      total -> 15 (it can be deleted after the execution)
5) now again the 1 & 2 phases will repeat 


//  call stack ---check this out in chatgpt
// google-> inspect -> sources -> new snippet(chai.js) -> 
function one(){
    console.log("one");
}
functiontwo(){
    console.log("two");
}       
functionthree(){
    console.log("three");
}       
one()
two()
three()

*/



