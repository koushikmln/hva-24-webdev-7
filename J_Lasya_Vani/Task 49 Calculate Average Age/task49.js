
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 40 }
  ];
function calculateAverageAge(people) {
    let totalAge=0;
    people.forEach(function(person) {
     totalAge += person.age;
    });
const averageAge = totalAge / people.length;

    return averageAge;
}
const averageAgee = calculateAverageAge(people);

console.log("Average Age:", averageAgee);
