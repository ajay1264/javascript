// array 2
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash","batman"]
/*
marvel_heros.push(dc_heros)

console.log(marvel_heros);
//we can also access the values 
console.log(marvel_heros[3]);
//yet this is not a good way to merge 

marvel_heros.concat(dc_heros)  //[concat]Combines two or more arrays. This method returns a new array without modifying any existing arrays
console.log(marvel_heros);   //yet concat array will push a new array so to merge it we have use diff meth


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);  //yes this statement will merge the array and gives us single equal elelment 


// INSTEAD OF CONCAT WE USUALLY USE SPREAD OP
//SPREAD OPERATOR  

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//now we will see array inside a array inside a array 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);
*/
//this is immp as we will use in data scrapping /object main aya ya phir string main 

console.log(Array.isArray("Ajay")); // now u can see ki yeh array show nhi kar raha hai toh instead 
console.log(Array.from("Ajay"));       //ab Ajay array main convert hogaya 


//imp case 

console.log(Array.from({name: "Ajay"}));  //array show karne ke badle ye ek empty array show kar rha hai 

//e.g
let score1 = 100
let score2 = 200
let score3 = 300 

console.log(Array.of(score1,score2,score3) );     //  "of" Returns a new array from a set of elements.

