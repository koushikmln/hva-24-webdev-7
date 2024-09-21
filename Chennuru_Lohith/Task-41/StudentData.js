let student={};
student.name="Lohith";
student.email="chennurulohith@gmail.com";
student.age=22;

console.log(student.name);

student.age=10;
console.log(student.age);

student.greet = function(){
    console.log("Hello, "+student.name);
}
student.greet();

student.address={ 
    country:"India", city:"Vissannapeta", pin_code:521215
};

console.log(student.address.country);

console.log(student.address.pin_code="521201");

console.log(student);

friend={ name:"Mahi", email:"mahithrinadhreddy@gmail.com", age:22,
      greet: function(){
        return "Hello, "+friend.name + "!";
      },
        address: {
            country: "USA",
            city: "Virginia",
            pin_code: 24072
        }
      }  


 console.log(friend.greet());
 console.log(friend);
  

 topper={ name:"Poojitha", email:"poojithach@gmail.com", age:21,
  greet: function(){
    return "Hello, "+topper.name + "!";
  },
    address: {
        country: "India",
        city: "VJD",
        pin_code: 521001
    }
  }  


console.log(topper.greet());
console.log(topper);

class Student{
  constructor(name,email,age,country,city,pin_code){
      this.name=name;
      this.age=age;
      this.email=email;
      this.address= {
        country: country,
        city:city,
        pin_code:pin_code
      }
  }
   greet() {

      return "Hello, "+ this.name;
    
  }
   getFullAddress(){
    return this.address.country+", "+this.address.city+"-"+this.address.pin_code;
   }

}

let student1=new Student("Lohith","chennurulohith@gmail.com",22,"India","Vissannapeta",521215);
console.log(student1.greet());
console.log(student1.getFullAddress());

