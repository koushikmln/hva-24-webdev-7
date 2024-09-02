function greet(name) {
    console.log("Hello " + name + "!!");
    alert("Hello Pujitha");
}

function greetDefault(name = "Guest") {
    console.log("Hello " + name);
}

let greetFunction = function greet2(name) {
    console.log("Hello " + name + " called using fun expression named");
}

let greetFunction2 = function(name) {
    console.log("Hello " + name + " called using fun expression anonymous");
}

greetFunction3 = (name) => {
    return "Hello " + name + " called using arrow fun";

}
var name = "Pujitha";
var name2 = "Vishnu";
greet(name);
greetDefault(name);
greetDefault();
greetFunction(name);
greetFunction2(name);
console.log(greetFunction3(name2));