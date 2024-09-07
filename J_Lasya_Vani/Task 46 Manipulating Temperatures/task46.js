var temperatures=[2,25,15,42,-30,13,52,23]
temperatures.forEach(function(temperature){
    console.log(temperature);
});
temperatures.forEach(temperature=>console.log(temperature));
temperatures.forEach(function(temperature){
    console.log((temperature * 9/5) + 32);
});
temperatures.forEach(temperature=>console.log((temperature * 9/5) + 32));
const tempinf=temperatures.map(function(temperature){
    return (temperature*9/5)+32;
});
console.log(tempinf);
const tempinff=temperatures.map(temperature=>(temperature*9/5)+32)
console.log(tempinff);
const belowFreezing = temperatures.filter(function(temperature) {
    return temperature < 0;
  });
  console.log(belowFreezing);
  
  // Rewrite the filter method using arrow function syntax to do the same thing
  const belowFreezingArrow = temperatures.filter(temperature => temperature < 0);
  console.log(belowFreezingArrow);