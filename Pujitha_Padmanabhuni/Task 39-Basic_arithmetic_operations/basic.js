function addNumbers(num1, num2) {
    return num1 + num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function divideNumbers(num1, num2) {
    if (num2 == 0) {
        return "Error:Can't divide by zero";
    }
    return num1 / num2;
}

function performArithmetic(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(addNumbers(10, 20));
console.log(multiplyNumbers(10, 20));
console.log(subtractNumbers(10, 20));
console.log(divideNumbers(10, 90));

console.log(performArithmetic(5, 3, addNumbers));
console.log(performArithmetic(5, 3, multiplyNumbers));
console.log(performArithmetic(5, 3, subtractNumbers));
console.log(performArithmetic(5, 3, divideNumbers));