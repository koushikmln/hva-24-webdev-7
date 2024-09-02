function doubleNumber(number){
    return number*2;
}
function squareNumber(number){
    return number**2;
}
function incrementNumber(number){
    return number+1;
}
function performOperation(number,operation) {
    return operation(number);
}
result=performOperation(5,doubleNumber);
console.log(result);
result=performOperation(5,squareNumber);
console.log(result);
result=performOperation(5,incrementNumber);
console.log(result);