let people=[{ name: "John", age: 25 },
    { name: "ram", age: 30 },
    { name: "saleem", age: 22 },
    { name: "budh", age: 27 }];
function calculateAverageAge(people){
    let sum=0;
    people.forEach((val)=>{
        sum+=val.age;
    });
    let avg=sum/people.length;
    return avg;
}
const res=calculateAverageAge(people);
console.log(res);