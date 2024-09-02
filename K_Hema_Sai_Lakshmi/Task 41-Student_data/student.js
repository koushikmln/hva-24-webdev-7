let student = {};
student.name="sai";
student.age=20;
student.email="sai123@gmail.com";
console.log(student.name);
student.age=10;
console.log(student.age);
student.greet=function(){
    console.log(`hello ,${this.name}`)
};
student.greet();
student.address={
    country: "INDIA",
    city: "VDF",
    pin_code: "10001"
}
console.log(student.address.country);
student.pin_code=531001;
console.log(student.address);
let friend={
    name1:"Alice",
    email:"alicejohnson@example.com",
    age:21,
    address:{
        country: "UK",
        city: "London",
        pin_code: "E1 6AN",
    },
    greet: function(){
        console.log(`hello ,${this.name1}`);
    }
};
friend.greet();
console.log(friend);
topper={
    name2:"john",
    age:23,
    gmail:"john123@gmail.com",
    address:{
        country:"UK",
        city:"London",
        pincode:67890
    },
    greet:function(){
        return `Hello ${this.name2}`;
    }

}
console.log(topper);
console.log(topper.greet());

class Student1 {
    constructor(name4,email,age,countrty,city,pin_code){
        this.name=name4;
        this.age=age;
        this.email=email;
        this.address={
        country: countrty,
        city:city,
        pin_code:pin_code
        };
        
    }
    greet1() {
        console.log(`hello ${this.name}`);
    }
    getFullAddress() {
        return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
    }
}
let user1 = new Student1("Alice Johnson", "alice.johnson@example.com", 25, "USA", "New York", "10001");
user1.greet1();
console.log(user1.getFullAddress());

let friend1 = new Student1("Bob Smith", "bob.smith@example.com", 26, "Canada", "Toronto", "M5H 2N2");
console.log(friend1);
friend1.greet1();
console.log(friend1.getFullAddress());
let topper1 = new Student1("Charlie Brown", "charlie.brown@example.com", 27, "UK", "London", "SW1A 1AA");

console.log(topper1);
topper1.greet1();
console.log(topper1.getFullAddress());
