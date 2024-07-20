//BMI CALCI
const form = document.querySelector('form')   //access the "form" in the html page 

form.addEventListener('submit', function(e){     //now add event listner for the sumbit button that can store values in height and weight 
   e.preventDefault()

//this usecase will give you empty value  const height
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){      //dont use this tech if height is not equal to nan instead use
  results.innerHTML = `please give a valid height ${height}`;
}else if(weight === '' || weight < 0 || isNaN(weight)){       
  results.innerHTML = `please give a valid weight ${weight}`;
}else {
const bmi = (weight / ((height*height)/10000)).toFixed(2)     //to fixed is used for the only 2 decimal so the value will not go in lengthy digits 
//show the results
results.innerHTML = `<span>${bmi}</span>`;

}



});