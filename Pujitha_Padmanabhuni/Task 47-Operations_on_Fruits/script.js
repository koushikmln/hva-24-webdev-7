var callback = function printFun(item) {
    console.log(item);
}

var callback2 = function capital(item) {
    item = item[0].toUpperCase() + item.slice(1);
    console.log(item);
}
var callback3 = (item) => {
    item = item[0].toUpperCase() + item.slice(1);
    console.log(item);
}


var fruits = ["apple", "banana", "cherry", "date"];
fruits.forEach(callback);

console.log("Capitalized");
fruits.forEach(callback2);

console.log("Capitalized using arrow function");
fruits.forEach(callback3);

var totalCharacters = 0;
fruits.forEach(function(item) {
    totalCharacters += item.length;
})
console.log("Total characters are " + totalCharacters);

var callback4 = function(item) {
    let s = '';
    for (let i = item.length - 1; i >= 0; i--) {
        s += item[i];
    }
    return s;
}
var callback5 = (item) => {
    let s = '';
    for (let i = item.length - 1; i >= 0; i--) {
        s += item[i];
    }
    return s;
}
var reversedFruits = fruits.map(callback4);
console.log("Reversed" + reversedFruits);

var reversedFruits = fruits.map(callback5);
console.log("Reversed using arrow " + reversedFruits);

var longFruits = fruits.filter(function(item) {
    if (item.length >= 5) return item;
});
console.log(longFruits);

var longFruits = fruits.filter((item) => {
    if (item.length >= 5) return item;
});
console.log("Arrow fun " + longFruits);

var containsa = fruits.filter(function(item) {
    if (item.includes('a')) return item;
})
console.log("Items containing a are " + containsa);

var aFruitsUpper = fruits.map(function(item) {
    return item.toUpperCase();
})
console.log(aFruitsUpper);

function forEachArray(arr, callback) {

}