//     ---------maps -------

//collection of key value pairs 
//maps are more like arrays as it has unique values 

//how to declare maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNited")
map.set('Fr', "France")
map.set('C', "Canada")
//map.set('C', "Canada")    //maps value should be unique as it will not repeat any value 


//console.log(map);



// for loop for this map

//for (const key of map) {
for (const [key,value] of map) {       //we can print key and value different by key, value 
    console.log(key ,':-' , value);
   // console.log(key);
    
}
