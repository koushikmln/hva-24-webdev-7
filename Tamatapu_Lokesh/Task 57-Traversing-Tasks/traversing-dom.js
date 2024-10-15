const traverse1 = document.getElementById("list1");

let firstItem = traverse1.firstElementChild;

while (firstItem){
console.log(firstItem.textContent); 

 firstItem = firstItem.nextElementSibling; 

}

const traverse2 = document.getElementById("list2");

let lastItem = traverse2.lastElementChild;

while (lastItem){
  console.log(lastItem.textContent);
  lastItem = lastItem.previousElementSibling; 
}

const traverse3 = document.getElementById("list3");

const listItems = traverse3.children;

for (let i = 0; i < listItems.length; i++) {

    console.log(listItems[i].textContent); // Log the content

}

