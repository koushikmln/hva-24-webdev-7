let student={};
student.name='Lasya';
student.mail='lasya@hey.com';
student.age=21;
console.log(student.name)
student.age=10;
console.log(student.age)
student.greet=function(){
    console.log(`hello, ${student.name}`);
}
student.greet()
student.address={
    country:'India',
    city:'Rajahmundry',
    pincode:'533102'
}
console.log(student.address.country);
student.address.pincode=534204;
console.log(student.address.pincode);
let friend={}
friend.name="Jaswanth";
friend.mail="jashu@123.com";
friend.age=19;
friend.address={
    country:"pakistan",
    city:"emoo",
    pincode:123456
}
friend.greet=function(){
    console.log(`Hello,${friend.name}`);
}
friend.greet();
let topper={};
topper.name='koushikred';
topper.mail="kou@123.com";
topper.age=21;
topper.greet=function(){
    console.log(`Hello,${topper.name}`);
}
topper.greet();
console.log(topper);

class student1{
    constructor(name,email,age,country,city,pincode){
    this.name="Lasya",
    this.email="lasyajana444@gmail.com",
    this.age=21
    this.address={
        country:'india',
        city:'rajahmundry',
        pincode:234765
    };
}
greet(){
    console.log(`hello, ${this.name}!`);
}
getfulladdress(){
    return `${this.address.country},${this.address.city},${this.address.pincode}`;
}
}
stud=new student1('lassu','lassu@gmail.com',23,'india','bhimavaram',534204)
stud.greet()
console.log(stud.getfulladdress());