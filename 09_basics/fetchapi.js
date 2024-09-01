/*
fetch api has a special qeue it is called as priority qeue usually goes from callback and directly to the refernce not to the global object 
fetch('something')
usually when fetch is called it goes in two main parts
1)data or space find karne ke liye /space reserve karne ke liye bhagta hai
onfulfilled[] yeh hai promise ka resolve 
onRejecton[]   yeh hai promise ka rejection 
in this array we cannot put values as this arrays are private fields 




2) web browser/node handling=> browser api ko handle karne ke liye 
now this will give a network request 
either it will go to resolve or reject 
in most of the cases 

watch the video no 41 for more
 */