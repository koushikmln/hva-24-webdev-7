function greet(name){
    return "Hello"+name+"!";
}
s=greet("Sai")
console.log(s);
function greetDefault(name="user"){
    return "Hello "+"User"+"!";
}
console.log(greetDefault())
x = function(name){
    return "Hello "+name+"!";
}
console.log(x("sai"));
greetarrow=(user)=> "hello"+user+"!";
console.log(greetarrow("sai"));