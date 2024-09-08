var people = [
    { name: 'Pujitha', age: 20 },
    { name: 'Charishma', age: 21 }
];

function calculateAverageAge(people) {
    var sum = 0;
    people.forEach(function(item) {
        sum += item.age;
    });
    var age = sum / people.length;
    return age;
}

console.log(calculateAverageAge(people));