let tempertaures=[-3, 14, 22, 5,-10];
tempertaures.forEach(function(val){
    console.log(val);
});
tempertaures.forEach((val)=>{
    console.log(val);
});
tempertaures.forEach(function(val){
    val=(val*9/5)+32;
    console.log(val);
});
tempertaures.forEach((val)=>
    {
    val=(val*9/5)+32;
    console.log(val);
});
console.log(tempertaures);
let temperaturesInFahrenheit=tempertaures.map(function(val){
    return (val*9/5)+32;
});
console.log(temperaturesInFahrenheit);
temperaturesInFahrenheit=tempertaures.map((val)=>{
    return (val*9/5)+32;
});
console.log(temperaturesInFahrenheit);
let belowFreezing=tempertaures.filter(function(val){
    return val<0;
})
console.log(belowFreezing);
belowFreezing=tempertaures.filter((val)=>{
    return val<0;
})
console.log(belowFreezing);

