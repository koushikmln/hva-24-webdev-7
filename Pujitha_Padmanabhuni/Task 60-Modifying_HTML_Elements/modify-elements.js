var x = document.getElementById("btn");
x.addEventListener("click", myFun);

function myFun() {
    var para = document.getElementById("id1");
    para.innerHTML = "Text has been changed";
}

document.addEventListener("mouseover", function() {
    var ele = document.getElementById("myDiv");
    ele.style.backgroundColor = "yellow";
    ele.style.color = "blue";
});

var y = document.getElementById("btn2");
y.addEventListener("click", fun3);

function fun3() {
    var ele = document.getElementById("htmlContent");
    ele.innerHTML = "<h1>HI</h1><br><p>HTML paragraph inserted thorugh eventlisteners";
}

var z = document.getElementById("visible");
z.addEventListener("click", fun4);

function fun4() {
    var ele = document.getElementById("id2");
    if (ele.style.display === "none") {
        ele.style.display = "block";
    } else {
        ele.style.display = "none";
    }
}