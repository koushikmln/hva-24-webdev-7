class employee{
    constructor(name,email,age,department,position,salary){
        this.name=name;
        this.email=email;
        this.age=age;
        this.department=department;
        this.position=position;
        this.salary=salary;
    }
introduce() {
        console.log(`Hello, I am ${this.name}, ${this.position}`);
    }
displaysalary(){
        console.log(`${this.salary}`)
    }
}

const employee1=new employee('lassu','l@gmail.com',13,'inf','faculty',500000)
console.log(employee1)
employee1.displaysalary();
employee1.introduce();

