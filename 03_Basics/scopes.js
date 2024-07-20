
          // Scopes in Js //

//scopes  has let var and const
//  {}  this are scopes and dont mix it up with obj "when it will come with function or if else " to usko bola jata hai scope of if else etc

if(true) {
    let a = 10
    var b = 20
    const c = 30   //if you declare it by c=30 then also it will be same 
}
//console.log(a);
//console.log(b);
//console.log(c);
//if we run this a and c will say not defined but the var will give the value
// as it will create chaos while if another person create one more a=20 it will change the value of the before run a 



//udersting global scope 
let a = 300   //it is called as global scope it can access by anywhere

if(true) {
    let a = 10
    var b = 20
    const c = 30
    console.log("INNER:", a);  //as you can see that the inside value didnt change it is as it is and is called block scope 
}
console.log(a);   //as we will declare a it give the output of the a which is global


// scope in windows  and code environment jo scope hota hai woh dono alag hota hai 

//  *******SCOPES IN JS 2*******   

// nested scopes 

function one(){        //basicallly  we can access the parent function form the child function whereas we cannot access child function from the parent 
    const username = "ajay"

    function two(){
        const website = "youtube"
        console.log(username);

    }
//console.log(website);

two()

}

one()



// now we will see in if else how the function works 

if(true) {                                //!!!!!! learn it again by chatgpt
    const username = "ajay"
    if (username === "ajay"){
        const website = " youtube"
        console.log(username + website);
    
      //console.log(website);  // this will not run as the scope has not access but the inside the parenthesis
}
//console.log(username);   
}


/* intresting

function addone(num){    // this 
    return num + 1       // is  
                        //  a 
}                       //function
console.log(addone(5));               //       

const addTwo = function(num){     // this 
    return num + 2                // is also a function
}                                 // but 
console.log(addTwo(5));                         // also called as a expression 



//but we if we write before the function 

console.log(addone(5));                 //in this it will run and give the answer as 6 
function addone(num){    
    return num + 1       
                    
}                      

console.log(addTwo(5));                 // in this it cannot access the addtwo- this is one of the concept called hosting --
const addTwo = function(num){     
}                              

*/