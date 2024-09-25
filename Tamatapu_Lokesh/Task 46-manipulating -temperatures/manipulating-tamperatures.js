let temperature=[-3,-14,-22,5,-10]//declaring array

//iteration using forEach function nad callback function as function expression
temperature.forEach(function(number){
  console.log(number);
});

//iteration using forEach function nad callback function as arrow function syntax
temperature.forEach(number=>console.log(number));

//temperature convertion from celsius to fahrenheit
temperature.forEach(function(number){
  number=(number * 9/5) + 32;
  console.log(number)
});

temperature.forEach(number=>console.log((number*9/5)+32));

let temperaturesInFahrenheit= temperature.map(function(number){return (number*9/5)+32});
console.log(temperaturesInFahrenheit);

temperaturesInFahrenheit=temperature.map(number=>(number*9/5)+32);
console.log(temperaturesInFahrenheit);

let belowFreezing=temperature.filter(function(number){if(number<0){
  console.log(number)
}});
console.log(belowFreezing)

belowFreezing=temperature.filter(number=>number<0);
console.log(belowFreezing);