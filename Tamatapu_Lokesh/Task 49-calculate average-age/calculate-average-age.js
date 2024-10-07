//Define the Array of People
let people = [{name:'Raju',age:25},{name:'Ramu',age:23},{name:'Ravi',age:24}];

//Define the calculateAverageAge Function Using forEach
function calculateAverageAge(people){
  let sum=0;
  people.forEach(function(person){
    sum+=person.age;
  });
  let average=sum/(people.length);
  return average;
}

//Call the calculateAverageAge Function
const result=calculateAverageAge(people);
console.log(result);