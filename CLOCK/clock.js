//digital clock 
//document.querySelector('clock')

const clock = document.getElementById('clock')


//now we want to a thing that can help to run the clock every sec as there is a event in js that is setinterval method it can run the time as it is not used in big project 
setInterval(function(){
let date = new Date()
//console.log(date.toLocaleString());
clock.innerHTML = date.toLocaleTimeString();

},1000);


