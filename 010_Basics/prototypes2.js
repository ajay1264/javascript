//
/*
//so we have to add .truelength where ever the string is there
//let myName = "hitesh" 
//console.log(myName.length);
//console.log(myName.length);


//let myHeros = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",


//     // getSpiderPower: function(){
//     //     console.log(`spidy power is ${this.spiderman}`);
//     // }
    
// }

let heroPower = { 
}
    
Object.prototypeOf.hitesh = function(){       //in this you acquire the top level hirerachy and now hitesh is present in all the objects
        console.log('hitesh is present in all objects');
    }

Array.prototype.heyHitesh = function(){
    console.log('hitesh says hello ');
}    

// heroPower.hitesh()
// myHeros.hitesh()

//heroPower.heyHitesh()





//ineritance

const user = {
    name:"chai",
    email:"c@google.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
//Teacher.__proto__ = user


//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);

console.log(TeachingSupport.makeVideo);
console.log(TASupport.isAvailable);
console.log(TASupport.makeVideo);

*/

let anotherUsername = "ajayroy"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()


anotherUsername.trueLength()
"hitesh".trueLength()
"Icetea".trueLength()

