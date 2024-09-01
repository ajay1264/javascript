//project 1
//colour scheme switcher so when u click on any colur it will change the bgcolor  so when you click on the block of that color it will change the color into that 

//as there is span which contain four buttons we will select the button element first and then body 

const buttons = document.querySelectorAll('.button');    //so we selected all the buttons 
console.log(buttons);
const body = document.querySelector("body")
//so in console we have get a node list so we can use foreach 
buttons.forEach(function(button){
  console.log(button)
  //event listner will act on the button 
  button.addEventListener('click',function(e){
    console.log(e)      
    console.log(e.target)
    if(e.target.id === 'grey'){   
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){   
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){   
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){   
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'pink'){   
      body.style.backgroundColor = e.target.id;
    }

    

  })
});
//we can also add more buttons and but 
//by adding in html file one more span and adding a if statement that targets the span id and change the color of the block