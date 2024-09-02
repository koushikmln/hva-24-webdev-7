let people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 28 }
];
function calculateAverageAge(people){
    let totalage=0;
    people.forEach(function(person){
        totalage+=person.age;
    })
    avg=totalage/people.length;
    return avg;
}
let average=calculateAverageAge(people);
console.log(average);
