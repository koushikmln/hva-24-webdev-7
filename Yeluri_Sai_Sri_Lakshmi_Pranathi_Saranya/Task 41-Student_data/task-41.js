let student={
    name:"pranathi",
    email:"yp@gmail.com",
    age:20
};
console.log(student.name);
student.age=10;
console.log(student.age);
student.greet=function(){
    console.log(`Hello,${this.name}!`);
};
student.greet();
student.address={
    country:"india",
    city:"tanuku",
    pin_code:534222
};
console.log(student.address.country);
student.address.pin_code=534201;
console.log(student.address.pin_code);
let friend={
    name:"sai",
    email:"sai@gmail.com",
    age:20,
    address:{
        country:"india",
    city:"tanuku",
    pin_code:534222
    },
    greet:function(){
        console.log(`Hello,${this.name}!`);
    }

};
friend.greet();
console.log(friend);
let topper={
    name:"saranya",
    email:"sarru@gmail.com",
    age:20,
    address:{
        country:"india",
    city:"tanuku",
    pin_code:534222
    },
    greet:function(){
        console.log(`Hello,${this.name}!`);
    }

};
topper.greet();
console.log(topper);
class Student{
    constructor(name,email,age,country,city,pin_code){
        this.name=name;
        this.email=email;
        this.age=age;
        this.country=country;
        this.city=city;
        this.pin_code=pin_code;
    }
    greet(){
        console.log("Hello,",this.name)
    }
    getFullAddress(){
        return `${this.country},${this.city}-${this.pin_code}`;
    }
}
let obj1=new Student("pranathi","yp@email.com",20,"inida","tanuku",534222);
let obj2=new Student("sai","sai@email.com",20,"india","tanuku",534222);

let obj3=new Student("saran","sarru@email.com",20,"india","tanuku",534222);
console.log(obj1);
console.log(obj2);

console.log(obj3);
obj1.greet();
obj2.greet();
obj3.greet();
console.log(obj1.getFullAddress());
console.log(obj2.getFullAddress());
console.log(obj3.getFullAddress());