let arr = [1, 2, 3, 4, 5];
let callback = function(item) {
    console.log(item);
}
arr.forEach(callback);

let callback2 = function(item) {
    console.log(item * 2);
}
arr.forEach(callback2);

let callback3 = (item) => {
    return item * item;
}
let squaredNumbers = arr.map(callback3);
console.log(squaredNumbers);


let callback4 = function(item) {
    if (item % 2 == 0)
        return item;
}
let callback5 = (item) => {
    if (item % 2 == 0)
        return item;
}
let evennumbers = arr.filter(callback4);
console.log(evennumbers);

evennumbers = arr.filter(callback5);
console.log(evennumbers);