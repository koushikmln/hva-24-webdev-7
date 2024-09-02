var fruits=['apple','banana','cherry','date'];
fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase());
});
fruits.forEach(fruit=>{console.log(fruit.toUpperCase())});
var totalCharacters=0;
fruits.forEach(function(fruit){
    totalCharacters+=fruit.length;
});
console.log(totalCharacters);
let reversedFruits=fruits.map(function(fruit){
    return fruit.split('').reverse().join('');
});
console.log(reversedFruits);
reversedFruits=fruits.map(fruit=>fruit.split('').reverse().join(''));
console.log(reversedFruits);
let longFruits=fruits.filter(function(fruit){
    return fruit.length>5;
});
console.log(longFruits);
longFruits=fruits.filter(fruit=>fruit.length>5);
console.log(longFruits);
let fruitwithA=fruits.filter(function(fruit){
    return fruit.includes('a');
});
console.log(fruitwithA);
let aFruitUpper=fruitwithA.map(function(fruit){
    return fruit.toUpperCase();
})
console.log(aFruitUpper);


