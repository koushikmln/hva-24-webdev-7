let fruits=[ "apple", "banana", "cherry", "date"];
fruits.forEach(function(val){
    console.log(val);
});
fruits.forEach((val)=>{
    console.log(val);
});
let totalCharacters=0;
fruits.forEach(function(val){
    totalCharacters+=val.length;
});
console.log(totalCharacters);
let reversedFruits=fruits.map(function(val){
    return val.split('').reverse().join('');
});
console.log(reversedFruits);
reversedFruits=fruits.map((val)=>{
    return val.split('').reverse().join('');
});
console.log(reversedFruits);
let longFruits=fruits.filter(function(val){
    return val.length>5;
});
console.log(longFruits);
longFruits=fruits.filter((val)=>{
    return val.length>5;
});
console.log(longFruits);
let array=fruits.filter(function(val){
    return val.includes('a');
});
console.log(array);
let aFruitsUpper=array.map(function(val){
    return val.toUpperCase();
});
console.log(aFruitsUpper);