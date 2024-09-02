let temperatures=[-3.14,22,5,-10];
temperatures.forEach(function(temperature){
   console.log(temperature);
});
temperatures.forEach(temperature=>{
    console.log(temperature);
});
temperatures.forEach(function(temp){
    const fahrenheit=(temp*9/5)+32;
    console.log(fahrenheit);
});
temperatures.forEach(temperature=>
    x=(temperature*9/5)+32);
    console.log(x);
let temperatureinFahrenheit=temperatures.map(function(temp){
    return (temp*9/5)+32;
});
console.log(temperatureinFahrenheit);
temperatureinFahrenheit=temperatures.map(temp=>(temp*9/5)+32);
console.log(temperatureinFahrenheit);
let belowFreazing=temperatures.filter(function(temperature){
    return temperature<0;
});
console.log(belowFreazing);
belowFreazing=temperatures.filter(temperature=>temperature<0);
console.log(belowFreazing);