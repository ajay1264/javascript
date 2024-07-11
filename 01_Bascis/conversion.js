let score ="33"

console.log(typeof score);// imagine aapko frontend main koi bhi value di gayi and apko pata nhi so to know the datatype
console.log(typeof (score));

//ab agar woh number "" main diye hai toh woh string hai but mujhe pata hai ki woh number hai
//so we will use this to check'

let valueInNumber = Number(score)
console.log(typeof valuedInNumber);
console.log(valueInNumber);

//case 2
/*let scores ="33abc"
console.log(typeof score);


let valueInNumber = Number(score)
console.log(typeof valuedInNumber);  <=1
console.log(valueInNumber); 

usually isme answer number hi ayega 1 ka but uska data
type NAN ayega not a number it is wierd but remember the case


*/


//case 3
/*let scores = null
console.log(typeof score); <=1
console.log(typeof (score)); <=2

let valueInNumber = Number(score)
console.log(typeof valuedInNumber); <=3
console.log(valueInNumber);  <=4

output: object 
        object 
        number
        0

*/

// "33" ~ 33
// "33abc" !~ NaN [not a number]
// true ~ 1 , false ~ 0

/*
let booleandIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

o/p: 
1 ~ true 0 ~ false
" " ~ false 
"ajay" ~ true 

*/
/* to convert number to string 

let someMNumber =33 

let stringNumber = Sftring(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

*/
