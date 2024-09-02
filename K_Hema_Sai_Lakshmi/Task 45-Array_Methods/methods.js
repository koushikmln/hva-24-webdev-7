let numbers=[1,2,3,4,5];
numbers.forEach(function(number){
    console.log(number);
});
numbers.forEach(function(number){
console.log(number*2);
});
let squarenum=numbers.map(function(number){
    return number*number;
})
console.log(squarenum);
squarenum=numbers.map(number=>number*number);
console.log(squarenum);
let even = numbers.filter(function(number){
    return number%2==0;
});
console.log(even);
even = numbers.filter(number=>number%2==0);
console.log(even);
