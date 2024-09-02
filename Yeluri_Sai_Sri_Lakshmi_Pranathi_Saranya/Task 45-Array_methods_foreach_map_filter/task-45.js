let numbers=[1,2,3,4,5];
numbers.forEach(function(val){
    console.log(val);
});
numbers.forEach(function(val){
    console.log(val*2);
});
let squaredNumbers=numbers.map(function(val){
    return val*val;
});
console.log(squaredNumbers);
squaredNumbers=numbers.map((val)=>{
    return val*val;
});
console.log(squaredNumbers);
let evenNumbers=numbers.filter(function(val){
    return val%2===0;
});
console.log(evenNumbers);
evenNumbers=numbers.filter((val)=>{
    return val%2===0;
});
console.log(evenNumbers);

