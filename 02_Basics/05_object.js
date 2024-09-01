//objects 

/*
const tinderUser = new Object()  // this is a singleton obj 

console.log(tinderUser);

const tinderUser = {}  //this is a non singleton obj 

tinderUser.id = "123abc"
tinderUser.name = "ajay"
tinderUser.isLoggedIn = false

console.log(tinderUser);   //as it will showcase all the data put into it 


const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ajay",    //you can create a object inside a object in that one more obje
            lastname: "roy"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);  //you can access by just puting a dot 



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 ={ obj1, obj2}
console.log(obj3);     // yet this will give the same array problem in which it will not combine properly 


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2)  // assign will arrane the object together and {} this will make an array in which all the values wil come under

console.log(obj3);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2}
console.log(obj3);   // yet again we will use the spread operator and most of the time we will use spread operator for the merging process



//database se value kaise ati hai 

const users = [

   {
    id:1,
    email: "a@gmail.com"
   },
   {
    id:2,
    email: "k@gmail.com"
   }
];

console.log(users[0].email);

*/


const tinderUser = {}  //this is a non singleton obj 

tinderUser.id = "123abc"
tinderUser.name = "ajay"
tinderUser.isLoggedIn = false

console.log(tinderUser);  

console.log(Object.keys(tinderUser));    //Object.keys(tinderUser);: Returns an array containing the keys of the tinderUser object. eg id name isloggedin
console.log(Object.values(tinderUser));   //Returns an array containing the values of the tinderUser object. This will log ["123abc", "ajay", false]
console.log(Object.entries(tinderUser));   //Returns an array of arrays, where each inner array contains a key-value pair from the tinderUser object. This will log [["id", "123abc"], ["name", "ajay"], ["isLoggedIn", false]]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // this will let you know that is there any value is existing or not 
