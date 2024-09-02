function addNubers(num1,num2){
    return num1+num2;
}
function numltiplyNumbers(num1,num2){
    return num1*num2;
}
function substractNumber(num1,num2){
    return num1-num2;
}
function divideNumber(num1,num2){
    if (num2!==0){
        return num1/num2;
    }
    return "error";
}
function performArithmetic(num1,num2,operation){
    return operation(num1,num2);
}
result=performArithmetic(5,3,addNubers);
console.log("addition:",result);
result=performArithmetic(5,3,numltiplyNumbers);
console.log("multiplication:",result);
result=performArithmetic(5,3,divideNumber);
console.log(result);
result=performArithmetic(5,3,substractNumber);
console.log(result);
result=performArithmetic(5,0,divideNumber);
console.log(result);
