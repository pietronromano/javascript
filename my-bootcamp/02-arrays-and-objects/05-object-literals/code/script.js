/*
Object Literals

An object is a collection of properties, and a property is an association between a key (or name) and a value. 
The value can be a primitive value, another object, or a function.
An object literal is a comma-separated list of name-value pairs wrapped in curly braces.

Literals represent values in JavaScript. 
These are fixed values—not variables—that you literally provide in your script.

Creating an object with object literal syntax initializer:
const obj = {
  key1: value1,
  key2: value2,
  ...
};

Accessing properties:
- Dot notation: obj.key1
- Bracket notation: obj['key1']


References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

*/ 
////////////////////////////////////////////////////////////////
let x;

// Creating an object
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

// Accessing object properties
x = person.name; // Dot notation
x = person['age']; // Bracket notation
x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];
console.log(x);
