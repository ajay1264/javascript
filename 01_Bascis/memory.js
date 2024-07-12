//memory in js 

// Stack memory saglya primitive type madhe use hote  
//Heap memoey saglya non primitive type madhe use hote

//jab bhi stack memory define hoti hai matlab jo bhi variable declare kiya uski copy milti hai 
//jab bhi heap memory define hoti hai tab uska refernce milta hai yani ki uski copy 

//stack mhnje eka varti ek block astat mhnje ek tyre varti dusra tyre tya varti tisra
//
/*
let myYoutubename = "ajay.com"

let anothername = myYoutubename  //2
anothername = "chai aur code"

console.log(myYoutubename);
console.log(anothername);
// out madhe my chi value ajay ch dakhavtey ani an madhe chaicode mhnje
// line 2 ch kahi badal nhi jhal actually  
*/

let userOne = {
    email: "user@gmail.com", // he save honar heap madhea as a reference
    emailId: "userbyl"  // he save honar heap madhe

}
let userTwo = userOne   //ani usertwo tya refernce madhun ti info uchalnar 
userTwo.email = "ajay@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
