let listmain = document.getElementById("list");

const newlist = document.createElement('li');

let len = listmain.children.length;

newlist.textContent = `New Item ${listmain.children.length + 1}`;

listmain.appendChild(newlist);

const event = document.getElementById("addButton");

const eve = event.addEventListener('click',function(){
  
  const newlist = document.createElement('li'); 
  
  newlist.textContent = `New Item ${listmain.children.length + 1}`;
  
  listmain.appendChild(newlist);
});

function removeLastListItem() { 
  
  const listmain = document.getElementById('list');

if (listmain.lastElementChild) { 
  listmain.removeChild(listmain.lastElementChild); 
  
} 
}

document.getElementById('removeButton').addEventListener('click', removeLastListItem);





