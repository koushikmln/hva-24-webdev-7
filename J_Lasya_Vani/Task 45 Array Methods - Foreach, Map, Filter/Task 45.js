
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
numbers.forEach(function(number) {
  console.log(number * 2);
});
    const squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(squaredNumbers);

const squaredNumbersArrow = numbers.map(number => number * number);
console.log(squaredNumbersArrow);

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers);

const evenNumbersArrow = numbers.filter(number => number % 2 === 0);
console.log(evenNumbersArrow);
