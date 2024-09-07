const fruits=[ "apple", "banana", "cherry", "date"]
fruits.forEach(function(fruit){
    console.log(fruit.charAt(0).toUpperCase()+fruit.slice(1).toLowerCase());

});
fruits.forEach(fruit=>{
    console.log(fruit.charAt(0).toUpperCase()+fruit.slice(1).toLowerCase());
});
let tc=0;
fruits.forEach(function(fruit){
    tc+=fruit.length;
});
console.log(tc)
var revf=fruits.map(function(fruit){
    return fruit.split('').reverse().join('');
})
console.log(revf);
const reversedFruitsArrow = fruits.map(fruit => fruit.split('').reverse().join(''));
console.log(reversedFruitsArrow);

const fruitsWithAArrow = fruits.filter(fruit => fruit.includes('a'));

const aFruitsUpperArrow = fruitsWithAArrow.map(fruit => fruit.toUpperCase());
console.log(aFruitsUpperArrow);
