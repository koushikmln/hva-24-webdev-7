function higherOrderFunction(num, callback) {
    callback(num);
}

function callbackFunction(num) {
    console.log(num + " in callback fun");
}
var callback2 = function(num) {
    console.log(num + " in callback of fun expression");
}

var callback3 = function(num) {
    console.log(num * num + " in callback printing squares");
}

function newHigherOrderFunction(num1, num2, callback) {
    callback(num1, num2);
}

var callback4 = function(num1, num2) {
    console.log(num1 + num2, " callback fun which adds 2 numbers");
}
higherOrderFunction(10, callbackFunction);
higherOrderFunction(20, callback2);
higherOrderFunction(3, callback3);
newHigherOrderFunction(10, 20, callback4);