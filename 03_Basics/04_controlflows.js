// //control flow

// //if 
// if (true) {   //agar condition true hai toh code ke andar jayenge nhi toh nhi 
    
// }
// if (false) {
    
// }

// const isUserLoggedIn = true 


// if (isUserLoggedIn  === true) {
//     console.log("login succss");
    
// }
// // <,>,<=,>=,==,!=,===



// //if else
// const temperature = 41

// if (temperature < 50) {
//     console.log("temperature is less than 50");
    
// } else {
//     console.log("temprature is greater than 50");
    
    
// }


const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`user power : ${power}`);
    
}
console.log(`User power: ${power}`); // this code will not execute as it is called outside the scope in the global execution



//if else 
// for multiple checks

// const balance = 1000

// if (balance > 500) {
    
// } else if (balance < 500) {
    
// } else if (balance = 500){

// }

const isUserLoggedIn = true
const debitCard = true 
const loggedGoogle = true
const loggedEmail = false 

if (isUserLoggedIn && debitCard ) {   //&& will check the both condition that is true or false 
    console.log("allow to buy the course ");
    
    
}
if (loggedGoogle || loggedEmail) {  // usually this is and || it will check either 
    console.log("user logged in ");
    
}



// ******************** switch case *******************
switch (key) {
    case value:
        
        break;

    default:
        break;
}