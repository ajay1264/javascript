
// ---------------------------method --------.js   08

/*
//using map method to add number on the existing number
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map((num)=> num + 10)     //10 will add in the above array list 

console.log(newNums);



//using foreach method to add number on the existing number   //recheck this code in chat gpt 

const myMoney = [10, 20, 30]     

myMoney.forEach(element => {
    console.log(`the values are ${myMoney}`);
});




//------------chaining method ------

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers
               .map((num)=> num * 10)
               .map((num)=> num + 1) 
               .filter((num)=> num >= 40)           //so in chaining method we can use multiple map and filter method back to back yet it will calulate the reult as per the above result 

console.log(newNums);               



//----------------reduce method -----------reduce.js


const array = [1, 2, 3, 4];

const initailvalue = 0;
const sumWithInitial = array .reduce(
    (accumulator, currentvalue)=> accumulator + currentValue,      //working: 0+1,1+2,3+3,6+4=10
    initialValue
);
console.log(sumWithInitial));          //output: 10  

//how to declare using reduce method in fuction 
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)
console.log(myTotal);



//how to declare using reduce method in arrow fuction 

const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, currval) => (acc+currval),0)

console.log(myTotal);



//assume a shoping cart  where the customer add items in the cart

const shopingCart = [
    {
        itemName: "js course",
        price: 100
    },
    {
        itemName: "java course",
        price: 300
    },
    {
        itemName: "python course",
        price: 1534
    },
    {
        itemName: "web dev course",
        price: 1200
    },
]

const  pricetopay = shopingCart.reduce((acc, item) => acc + item.price,0)
console.log(pricetopay);

*/