let student={};
student.name="Likhita";
student.email="likhitayerra@gmail.com";
student.age=20;
console.log(student.name);
student.age=50;
console.log(student.age);
student.greet=function(){
    console.log(`hello,${this.name}`);
} 
student.greet();
student.address={
    country:"India",
    city:"Vizianagaram",
    pin_code:"535580"
};
console.log(student.address.country);
student.address.pin_code="534204";
console.log(student.address.pin_code);
let friend={
    name:"mani",
    email:"maniyerra@gmail.com",
    age:17,
    address: {
        country:"india",
        city:"westGodavari",
        pin_code:"534204"
    },
    greet:function(){
        console.log(`hello, ${this.name}!`);
    }
};
friend.greet();
console.log(friend);
let topper={
    name:"satti",
    email:"satti@gmail.com",
    age:21,
    address: {
        country:"India",
        city:"Vizianagaram",
        pin_code:"537342"
    },
    greet:function(){
        console.log(`hello,${this.name}`);
    }
};
topper.greet();
console.log(topper);
class Student {
    constructor(name,email,age,country,city,pin_code){
        this.name=name;
        this.email=email;
        this.age=age;
        this.pin_code=pin_code;
        this.address={
            country:country,
            city:city,
            pin_code:pin_code

        };
    }
    greet(){
        console.log(`hello,${this.name}`)
    }
    getFullAddress(){
        return `${this.address.country},${this.address.city},-${this.address.pin_code}`;
    }
}
let me=new Student("Y", "your.email@example.com", 25, "India", "Bangalore", "560038");
let myfriend=new Student("a", "your.email@example.com", 25, "India", "Bangalore", "560038");
let anotherstudent=new Student("b", "your.email@example.com", 25, "India", "Bangalore", "560038");
console.log(me);
console.log(myfriend);
console.log(anotherstudent);
me.greet();
myfriend.greet();
anotherstudent.greet();
console.log(me.getFullAddress());
console.log(myfriend.getFullAddress());
console.log(anotherstudent.getFullAddress());
