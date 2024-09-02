let temperatures = [-3, 14, 22, 5, -10];
let callback = function(item) {
    console.log(item);
}
let callback2 = (item) => {
    console.log(item);
}
let convertor = function(item) {
    console.log((item * 9 / 5) + 32);
}
let convertor2 = (item) => {
    console.log((item * 9 / 5) + 32);
}

let convertor_n = function(item) {
    return (item * 9 / 5) + 32;
}
let convertor_n2 = (item) => {
    return (item * 9 / 5) + 32;
}

temperatures.forEach(callback);
console.log("callback2");
temperatures.forEach(callback2);
console.log("Converting");
temperatures.forEach(convertor);
console.log("Converting using arrow fun");
temperatures.forEach(convertor2);

temperaturesInFahrenheit = temperatures.map(convertor_n);
console.log("fun expression");
console.log(temperaturesInFahrenheit);

temperaturesInFahrenheit = temperatures.map(convertor_n2);
console.log("arrow expression");
console.log(temperaturesInFahrenheit);


let belowFreezing = temperatures.filter(function(item) {
    return item < 0;
});
console.log("fun expression filter");
console.log(belowFreezing);

belowFreezing = temperatures.filter((item) => item < 0);
console.log("arrow expression filter");
console.log(belowFreezing);