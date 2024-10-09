//Task1
document.getElementById("submit").addEventListener("click", fun1);

function fun1(event) {
    event.preventDefault();
    console.log("Form submitted");
}

//Task2
var a = document.getElementById("div1");
var b = document.getElementById("div2");
var c = document.getElementById("div3");
a.addEventListener("click", fun3);
b.addEventListener("click", fun3);
c.addEventListener("click", fun3);

function fun3() {
    if (this.style.backgroundColor === "white") {
        this.style.backgroundColor = "red";
    } else {
        this.style.backgroundColor = "white";
    }
}

//Task 3
var redbtn = document.getElementById("red");
redbtn.addEventListener("click", function() {
    fun2("red");
});

var yellowbtn = document.getElementById("yellow");
yellowbtn.addEventListener("click", function() {
    fun2("yellow");
});

var bluebtn = document.getElementById("blue");
bluebtn.addEventListener("click", function() {
    fun2("blue");
});

var greenbtn = document.getElementById("green");
greenbtn.addEventListener("click", function() {
    fun2("green");
});

function fun2(colour) {
    var ele = document.getElementById("colorChange");
    ele.style.backgroundColor = colour;
}