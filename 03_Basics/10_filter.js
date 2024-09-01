//filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num)=>num > 4)
console.log(newNums);



//when we use parenthesis in arrow functions we have to wrtie return keyword 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num)=>  {
   return num > 4}                           //write the return keyword in the start of the opening parenthesis its because you start a scope {}
)
console.log(newNums);



//so you want the same op but using array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  //check this code in chatgpt get the correction
const newNums = []

const newNums=myNums.forEach((num)=>{
    if(num > 4) {
        newNums.push(num)
    }
})


//how to get the values from the dataabse 
const books = [
    {title:'book one', genre:'fiction', publish: 1980,edition: 2004},
    {title:'book two', genre:'history', publish: 1996,edition: 2004},
    {title:'book three', genre:'fiction', publish: 1980,edition: 2004},
    {title:'book four', genre:'history', publish: 2020,edition: 2004},
    {title:'book five', genre:'fiction', publish: 1980,edition: 2004},
    {title:'book six', genre:'history', publish: 1997,edition: 2004},
    {title:'book seven', genre:'fiction', publish: 1980,edition: 2004},
    
]

//const userBooks = books.filter((bk)=>bk.genre === 'history')

//let userBooks = books.filter((bk)=> {return bk.publish >= 1995})
let userBooks = books.filter((bk)=> {return bk.publish >= 1995 && bk.genre === 'history'})

userBooks = books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre === 'history'
})

//userBooks = books.filter((bk)=>)
console.log(userBooks);


