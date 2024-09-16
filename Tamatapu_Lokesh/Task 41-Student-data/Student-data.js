let student = {};

student.name = "Lokesh"; 
student.email = "lokeshtamatapu@gmail.com"; 
student.age = 21; 

console.log(student.name); 

student.age = 10;

console.log(student.age);

student.greet = function() {
    console.log(`Hello, ${this.name}!`);
};


student.greet(); 

student.address = {
    country: "India", 
    city: "Visakhapatnam",
    pin_code: "530009" 
};

console.log(student.address.country); 

student.address.pin_code = "530008";

console.log(student.address); 

let friend = {
    name: "Ravi", 
    email: "ravi123@gmail.com", 
    age: 24, 
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    },
    address: {
        country: "India", 
        city: "Bangalore", 
        pin_code: "560038" 
    }
};


friend.greet(); 


console.log(friend);

let topper= {
    name: "Raju", 
    email: "raju123@gmail.com", 
    age: 23, 
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    },
    address: {
        country: "India", 
        city: "chennai", 
        pin_code: "523435" 
    }
};


topper.greet(); 


console.log(topper);

class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country: country,
            city: city,
            pin_code: pin_code
        };
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }

    getFullAddress() {
        return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
    }
}


let myself = new Student("Lokesh", "lokeshtamatapu@gmail.com", 21, "India", "AndhraPradesh", 530009);
let myFriend = new Student("Ravi", "ravi123@gmail.com", 24, "India", "Karnataka", 531244);
let anotherStudent = new Student("Raju", "raju123@gmail.com.com", 23, "India", "TamilNadu", 423348);

console.log(myself); 
console.log(myFriend); 
console.log(anotherStudent); 


myself.greet(); 
console.log(myself.getFullAddress()); 

myFriend.greet(); 
console.log(myFriend.getFullAddress());

anotherStudent.greet(); 
console.log(anotherStudent.getFullAddress()); 