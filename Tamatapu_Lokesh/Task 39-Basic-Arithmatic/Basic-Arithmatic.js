function addNumbers(num1,num2){
    return num1+num2;
}

function multiplyNumbers(num1,num2){
    return num1*num2;
}

function subtractNumber(num1,num2){
    return num1-num2;
}

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}

function  performArithmetic(num1,num2,operation){
    return operation(num1,num2);
}

const addResult = performArithmetic(5, 3, addNumbers);
console.log(addResult);

const multiplyResult = performArithmetic(5, 3, multiplyNumbers);
console.log(multiplyResult); 

const subtractResult = performArithmetic(5, 3, subtractNumber);
console.log(subtractResult); 

const divideResult = performArithmetic(5, 3, divideNumbers);
console.log(divideResult); 

