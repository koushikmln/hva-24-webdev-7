let submit_button = document.getElementById("sub");

const eve = button.addEventListener('click',function(event){
    event.preventDefault();
    console.log("Form submitted!");
});

let textDiv  = document.getElementById("divText1");
let textDiv1 = document.getElementById("divText2");
let textDiv2 = document.getElementById("divText3");
let textDiv3 = document.getElementById("divText4");

const eve1 = textDiv.addEventListener('click',function(event1){
  if(event1.target.style.backgroundColor === 'white'){
    event1.target.style.backgroundColor = 'red';
  }
  else{
    event1.target.style.backgroundColor = 'white';
  }
});

const eve2 = textDiv1.addEventListener('click',function(event2){
  if(event2.target.style.backgroundColor === 'white'){
    event2.target.style.backgroundColor = 'red';
  }
  else{
    event2.target.style.backgroundColor = 'white';
  }
});

const eve3 = textDiv2.addEventListener('click',function(event3){
  if(event3.target.style.backgroundColor === 'white'){
    event3.target.style.backgroundColor = 'red';
  }
  else{
    event3.target.style.backgroundColor = 'white';
  }
});

const eve4 = textDiv3.addEventListener('click',function(event4){
  if(event4.target.style.backgroundColor === 'white'){
    event4.target.style.backgroundColor = 'red';
  }
  else{
    event4.target.style.backgroundColor = 'white';
  }
});

let newDiv = document.createElement('div');

newDiv.innerHTML =(`<div>
                   <button>red</button>
                   <button>yellow</button>
                   <button>blue</button>
                   <button>green</button>
                  </div>`);
                  
document.body.appendChild(newDiv);
