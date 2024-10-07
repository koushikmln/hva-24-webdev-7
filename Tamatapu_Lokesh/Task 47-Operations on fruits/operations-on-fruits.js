//defining and initializing array
let fruits = ['apple', 'banana', 'cherry', 'date'];

//Iterate and Log Using forEach()
fruits.forEach(function (fruit) {
  console.log(fruit.toUpperCase());
});

fruits.forEach((fruit) => console.log(fruit.toUpperCase()));

//Calculate Total Characters Using forEach()
let totalCharacters = 0;
fruits.forEach(function (fruit) {
  totalCharacters += fruit.length;
});
console.log(totalCharacters);

//Iterate and Create a New Modified Array Using map()
let reversedFruits = fruits.map(function (fruit) {
  fruit.split('').reverse().join('');
});
console.log(reversedFruits);

reversedFruits = fruits.map((fruit) => fruit.split('').reverse().join(''));
console.log(reversedFruits);

//Iterate and Create a New Filtered Array Using filter()
let longFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});
console.log(longFruits);

longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits);
