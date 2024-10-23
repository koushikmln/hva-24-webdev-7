let event = document.getElementById("button");

const eve = event.addEventListener('click',function(){
  console.log('Button click event executed');
});

let event1 = document.getElementById("hover");

const eve1 = event1.addEventListener('mouseover',function(){
  console.log('Mouseover event on div executed');
});

let event2 = document.getElementById("inp");

const eve2 = event2.addEventListener('input',function(){
  console.log('Input event executed');
});