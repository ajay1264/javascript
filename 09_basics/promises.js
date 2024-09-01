//A promise is like when your parent says they'll take you to the park after they finish work. You don't know exactly when they'll be done, but you trust that they will take you when they can. If everything goes well, you get to go to the park. If something goes wrong, maybe you can't go that day. The promise is the idea that you'll go to the park later, depending on what happens.

//we will see how to create promises 
//in most cases will be only consuming promises not creating it 

//how to create promises

const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //db calls, crptography, network
    setTimeout(function(){
       console.log('Async task is complete');
        resolve()                                       // now there is method we have to call that is resolve to go to .then function

    },1000)
  
})
promiseOne.then(function(){      //now the promise is created we can consume it by[.then] and it has a direct connection with the resolve 
    console.log("promise consumed");
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");

})

//in this promise is created and injected data and then it is consumed 
const promiseThree = new Promise(function(resolve, reject){  //in this there is data which is injected 
    setTimeout(function(){
        resolve({username: "Ajay", email: "ar@.com"})

    },1000)
})
promiseThree.then(function(user){    //.then will get the data from the promise   
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false      //take it as a error if true prnt error if false prnt ak 123
        if (!error) {         //
            resolve({username: "ak", password: "123"})
        } else {
            reject('Error: Something went wrong')
        }

    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() =>  console.log("the promise is either resolve or reject "))     


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false      //take it as a error if true prnt error if false prnt ak 123
        if (!error) {         
            resolve({username: "Javascript", password: "123"})
        } else {
            reject('Error: Something went wrong')
        }

    }, 1000)
})


async function consumePromiseFive(){        //this is also a way to consume promise as .then is alsos a way 
    try { const response = await promiseFive
    console.log(response);
    } catch(error) {
        console.log(error);
    }
}
consumePromiseFive()

//so we are consuming or fetching data from the url given website as this website has messed up data
async function getAllUsers(){
 try {
   const response = await fetch('https://jsonplaceholder.typicode.com/users')

   const data = await response.json()
   console.log(data);
 } catch (error){
    console.log("E: ", error );
 }
}
getAllUsers()


//this is also a way to consume data from the promise by .then method 
fetch('https://jsonplaceholder.typicode.com/users')     
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})

