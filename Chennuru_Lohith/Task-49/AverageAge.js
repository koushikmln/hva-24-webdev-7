let People=[
    {name:"Lohith",age:22},
    {name:"Littu",age:22},
    {name:"Mahi",age:21}
    
];

function calculateAverageAge(people){
    let sumofages=0;
    people.forEach(function(person) {
        sumofages=sumofages+person.age;
    });

        let average=(sumofages)/ people.length ;
        return average;
    };

console.log(calculateAverageAge(People));