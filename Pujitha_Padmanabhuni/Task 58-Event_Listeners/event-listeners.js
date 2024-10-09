document.getElementById("btn").addEventListener("click", function() {
    console.log("Click event executed");
})

var x = document.getElementById("myDiv");
x.addEventListener("mouseover", fun());

function fun() {
    console.log("Mouseover event on div executed");
}

var y = document.getElementById("input1");
y.addEventListener("input", fun2);

function fun2() {
    console.log("Input event executed");
}