//dates 
/*
let myDate = new Date()
console.log(myDate);
*/ 
//now we convert the date to string 
/*
let myDate = new Date()
console.log(myDate.toString()); 
console.log(myDate.toDateString()); //Fri Jul 12 2024
console.log(myDate.toISOString());  //2024-07-12T16:31:34.303Z
console.log(myDate.toJSON());       //2024-07-12T16:33:52.231Z
console.log(myDate.toLocaleString()); //7/12/2024, 4:33:52 PM
console.log(myDate.toLocaleTimeString()); //4:33:52 PM

console.log(typeof myDate);  // date ki datatype object hi ayegi 
*/

// to declare a specific date 
/*
let myCreatedDate = new Date(2023, 0, 23);  //javascript main months 0 se start hote hai 
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
*/

//timestamps [ex quiz kisne fast diya ]


let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:"long"
}