class Employee {
    constructor(name, email, age, department, position, salary) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }

    introduce() {
        console.log(`Hello, I am ${this.name}, ${this.position}.`);
    }

    displaySalary() {
        console.log(`Salary: $${this.salary}`);
    }
}


const newEmployee = new Employee("Abhi", "abhi123@gmail.com", 25, "Software", "Team Lead", 4000);
console.log("newEmployee object:");
console.log(newEmployee); 

const manager = new Employee("Raju", "Raju123@gmail.com", 40, "Sales", "Sales Manager", 9000);
console.log("manager object:");
console.log(manager);

newEmployee.introduce();       
newEmployee.displaySalary();  

manager.introduce();           
manager.displaySalary();      