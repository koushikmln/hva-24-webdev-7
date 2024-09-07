function addnumbers(num1,num2){
    return num1+num2;
}
function multiplynumbers(num1,num2){
    return num1*num2;
}
function subtractnumbers(num1,num2){
    return num2-num1;
}
function dividenumbers(num1,num2){
return num1/num2;
}
function performarithimetic(num1,num2,operation){
    return operation(num1,num2)
}
console.log(performarithimetic(5,3,addnumbers));
console.log(performarithimetic(5,3,multiplynumbers));
console.log(performarithimetic(5,3,subtractnumbers));
console.log(performarithimetic(5,3,dividenumbers));