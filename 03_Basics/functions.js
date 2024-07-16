//functions
/*
console.log("A");
console.log("j");
console.log("a");
console.log("y");

instead of these we can use function to call them at once 


//how to declare a function 

function sayMyName() {
    console.log("A");
    console.log("j");
    console.log("a");
console.log("y");

    
}

sayMyName()   // to execute


//basics function name(paraameters) after the name they are called as parameters 
// and after the console where the function will be call in the bracket is called arguement
//function to add numbers 

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);

}
addTwoNumbers(3,4)

//this is normal calc but what  is someone put string  instead of number 


function addTwoNumbers(number1, number2){
    console.log(number1 + number2);

}
addTwoNumbers(3,"4")

const result = addTwoNumbers(3,5)

//console.log("Result:", result);  //the function has returned the value but the the function has undefined


function addTwoNumbers(number1, number2){



let result = number1 + number2
return result
//console.log("ajay");   //you cannot run this console as after the return it will not run any console 
}

const result = addTwoNumbers(3,5)
 
console.log("Result:",result);  // this the proper way to write the function 



//this is a also new to write the function 

function addTwoNumbers(number1, number2){
    return number1 + number2      // as you can we didnt write the let and all the thing we just wrote return

}

const result =addTwoNumbers(3,5)

console.log("Result", result);




//now what we can write in the function 

function loginUserMessage(username) {
    
    return `${username} just logged in`
}
//console.log(loginUserMessage("ajay"));
console.log(loginUserMessage());    // as we do not put any message inside the parenthesis we will get the value undefined

*/

//now how to use a if statment inside a function

function loginUserMessage(username = "ajay") {         //in this if the user did not enter any value it will default show ajay
   // if(username === undefined){                      //if is used if there is no value put then it will show the the console of pleas...
    if(!username){                                  //this will also execute same ! means not true
        console.log("Please enter a username ");
        return                                          //the value is undefined it will stop the further console
    }
    return `${username} just logged in `
}
console.log(loginUserMessage());                  // but if you put the value inside it then it will overwrite ajay and show the new value 




