 let fruits = ["apple", "banana", "cherry", "date"];
 fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase());
 })
fruits.forEach(fruit=>console.log(fruit.toUpperCase()));
let totalCharacters=0;
fruits.forEach(function(fruit){
    totalCharacters+=fruit.length;
})
console.log(totalCharacters);
let reversedFruits = fruits.map(function(fruit){
    return fruit.split('').reverse().join('');
})
console.log(reversedFruits);
reversedFruits=fruits.map(fruit=>fruit.split('').reverse().join(''));
console.log(reversedFruits);
let longFruits=fruits.filter(function(fruit){
    return fruit.length>5;
})
console.log(longFruits);
longFruits=fruits.filter(fruit=>fruit.length>5);
console.log(longFruits);
let aFruits = fruits
.filter(function(fruit) {return fruit.includes('a');})
.map(function(fruit) { return fruit.toUpperCase()});
console.log(aFruits);
aFruits = fruits
.filter(fruit=>fruit.includes('a'))
.map(fruit=>fruit.toUpperCase());
console.log(aFruits);