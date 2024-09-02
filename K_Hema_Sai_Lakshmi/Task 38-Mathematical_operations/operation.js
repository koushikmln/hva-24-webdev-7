function doubleNumber(num1){
    return num1*2;
}
function squareNumber(num1){
    console.log(num1**2);
}
function incrementNumber(num1){
    return num1+1;
}
function performOperation(num1,func){
    return func(num1);
}
console.log(performOperation(5,doubleNumber));
performOperation(5,squareNumber);
console.log(performOperation(5,incrementNumber));