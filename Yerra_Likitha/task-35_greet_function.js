function greet(name) {
    return `Hello ${name}!`;
}
console.log(greet('likhita'))

function greetDefault(name='Guest') {
    return 'Hello' + ' '+ name;
}
console.log(greetDefault('likhi'))
 
const greetFunction= function(name){
    return 'Hello' +' '+ name;
}
console.log(greetFunction('sai'))

const greetArrow =(name) =>`Hello , ${name}`;
console.log(greetArrow('Sai'))
