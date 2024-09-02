function greet(name){
    console.log("Hello,",name,"!");
}
greet("pranathi");
function greetDefault(name="Guest"){
    console.log("Hello,",name,"!");
}
greetDefault();
let greetFunction=function greet(name){
    console.log("Hello,",name,"!");
}
greetFunction("pranathi");
let greetArrow=(name)=>{
    console.log("Hello,",name,"!");
}
greetArrow("pranathi");
