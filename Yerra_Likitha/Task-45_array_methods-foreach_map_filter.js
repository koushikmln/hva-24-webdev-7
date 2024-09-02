let numbers=[1,2,3,4,5]
numbers.forEach(function(x) {
    console.log(x);
});
numbers.forEach(function(number){
    console.log(number*2);
});
const squaredNumbers=numbers.map(function(number){
    return number*number;
});
console.log(squaredNumbers);
const squaredNumber=numbers.map(number=>number*number);
console.log(squaredNumber);
const evenNumbers=numbers.filter(function(number){
    return number%2==0;
});
console.log(evenNumbers);
const evenNumber=numbers.filter(number=>number%2==0);
console.log(evenNumber);