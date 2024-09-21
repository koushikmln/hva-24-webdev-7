temperatures=[-3,14,22,5,-10];
temperatures.forEach(function(element){
    console.log(element);
});

temperatures.forEach((element)=>{
    console.log(element);
});

temperatures.forEach(function(temperature){
    console.log(temperature*(9/5)+32);
});

temperatures.forEach((temperature)=>{
    console.log(temperature*(9/5)+32);
})

temperaturesInFahrenheit=temperatures.map(function(temperature){
    return(temperature*(9/5)+32);
})

console.log(temperaturesInFahrenheit);

temperaturesInFahrenheit=temperatures.map((temperature)=>{
    return(temperature*(9/5)+32);
})

console.log(temperaturesInFahrenheit);

belowFreezing=temperatures.filter(function(temperature){
    return temperature<0;
})
console.log(belowFreezing);

belowFreezing=temperatures.filter((temperature)=>{
    return temperature<0;
})
console.log(belowFreezing);