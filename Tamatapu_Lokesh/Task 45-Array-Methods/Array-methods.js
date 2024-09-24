let numbers=[1,2,3,4,5];//array declaration

//forEach() function
numbers.forEach(function(number){console.log(number)});
numbers.forEach(function(number_double){console.log(number_double*2)});

//crating a new array using map() function
let squareNumber=numbers.map(function(number){
  return number*number;
});

//rewriting squareNumber using arrow and map
squareNumber=numbers.map(number =>  number*number);

console.log(squareNumber);

//creating a new array using filter()
let evenNumbers=numbers.filter(function(number){
  if(number%2==0){
    return number;
  }
});

//rewriting evenNumbers using arrow and filter
evenNumbers=numbers.filter(number => number%2==0);
console.log(evenNumbers);

