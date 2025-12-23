// Destructuring imports from utils.js 
const { capitalizeWords, makeMoney } = require('./utils');
// Importing the Person class from Person.js
const Person = require('./Person');

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

const person1 = new Person('John', 30);
person1.greet(); 
