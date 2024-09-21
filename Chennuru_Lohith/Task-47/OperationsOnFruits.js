let fruits=["apple","banana","cherry","date"];
fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase());
});

fruits.forEach((fruit)=>{
    console.log(fruit.toUpperCase());
});

let totalCharacters=0;
fruits.forEach(function charcount(){
    totalCharacters++;
})

console.log(totalCharacters);

reversedFruits=fruits.map(function(fruit){
    return fruit.split('').reverse().join();
});
console.log(reversedFruits);

reversedFruits=fruits.map( (fruit)=>{
    return fruit.split('').reverse().join();
});
console.log(reversedFruits);


let longFruits=fruits.filter(function (fruit){
    return fruit.length>5;
});
console.log(longFruits);

longFruits=fruits.filter((fruit)=>{
    return fruit.length>5;
})
console.log(longFruits);

let aFruits=fruits.filter(function (fruit){
    return fruit.includes("a");
});

console.log(aFruits);

let aFruitsUpper=aFruits.map(function (afruit){
    return afruit.toUpperCase();
})

console.log(aFruitsUpper);