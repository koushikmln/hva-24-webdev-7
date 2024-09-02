function greet(name) {
    return `Hello, ${name}!`;
}

let Greeting = greet("Lokesh");
console.log(Greeting);

function greetDefault(name = "Guest") {
    return `Hello, ${name}!`;
}

let defaultGreeting = greetDefault("Ram");
console.log(defaultGreeting);

const greetFunction = function(name) {
    return `Hello, ${name}!`;
};

let Greeting1 = greetFunction("Raju");
console.log(Greeting1);

const greetArrow = (name) => `Hello, ${name}!`;

let Greeting2 = greetArrow("Ravi");
console.log(Greeting2);


