function greet(name) {
    return "Hello, "+ name+"!";
    
}
let myname="Lohith";
let message=greet(myname);
console.log(message);


function greetDefault(name_1="Guest"){
    return "Hello, "+ name_1+"!";

}
//let my_name="Amma";
let msg=greetDefault();
console.log(msg);

let greetFunction = function(name){
    return "Hello, "+name+"!";
}
console.log(greetFunction(myname));

let greetArrow=(name) =>{
    return "Hello, "+name+"!";
}
console.log(greetArrow(myname));