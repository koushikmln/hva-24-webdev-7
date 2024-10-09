var item = document.getElementById("list1").firstElementChild;
console.log(item.textContent);

var a = document.getElementById("id1").nextElementSibling.textContent;
console.log(a);


var ele = item.nextElementSibling;
while (ele) {
    console.log(ele.textContent);
    ele = ele.nextElementSibling;
}

var item = document.getElementById("list2").lastElementChild;
while (item) {
    console.log(item.textContent);
    item = item.previousElementSibling;
}

var collection = document.getElementById("list3").children;
for (var i = 0; i < collection.length; i++) {
    console.log(collection[i].textContent);
}