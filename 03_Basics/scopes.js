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


// intresting

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

