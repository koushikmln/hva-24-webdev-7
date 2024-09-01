var student = {};
student.name = "Pujitha";
student.email = "puji@gmail.com";
student.age = 20;

console.log(student.name);

student.age = 100;
console.log(student.age);

student.greet = function() {
    console.log("Hello " + student.name);
}
student.greet();

address = {
    country: 'India',
    city: 'NSP',
    pin_code: '534275'
};
student.address = address;

console.log(student.address.city);

student.address.pin_code = '542378';
console.log(student.address.pin_code);

var friend = {
    name: "Jyoshna",
    email: "jyoshna@gmail.com",
    age: 20,
    greet: function() {
        console.log("Hello " + this.name);
    }
};
friend.greet();


topper = {
    name: "Jaswari",
    email: 'jaswari@gmail.com',
    age: 21,
    greet: function() {
        console.log("Hello topper " + this.name);
    }
};
topper.greet();

class Student {
    constructor(name, email, age, country, city, pincode) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country: country,
            city: city,
            pincode: pincode
        }

    }
    greet() {
        console.log("Hello " + this.name);
    }
    getFullAddress() {
        console.log(this.address.country + "," + this.address.city + "-" + this.address.pincode);
    }
}
const student1 = new Student("Pujitha Padmanabhuni", "pujitha@example.com", 21, "India", "Hyderabad", "500001");
const friend1 = new Student("Ravi Kumar", "ravi@example.com", 22, "India", "Bangalore", "560001");
const topper1 = new Student("Ananya Sharma", "ananya@example.com", 23, "India", "Mumbai", "400001");

console.log(student1);
console.log(friend1);
console.log(topper1);

student1.greet();
friend1.greet();
topper1.greet();

console.log(student1.getFullAddress());
console.log(friend1.getFullAddress());
console.log(topper1.getFullAddress());