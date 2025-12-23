/*
Data Types 

References: 
- https://javascript.info/types
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#data_structures_and_types
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
- Why typeof null == object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
- "function object" type: https://262.ecma-international.org/5.1/#sec-11.4.3

The latest ECMAScript standard defines eight data types:
    Seven data types that are primitives:
        - Boolean. true and false.
        - null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
        - undefined. A top-level property whose value is not defined.
        - Number. An integer or floating point number. For example: 42 or 3.14159.
        - BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
        - String. A sequence of characters that represent a text value. For example: "Howdy".
        - Symbol. A data type whose instances are unique and immutable.

    ...and Object is the 8th data type: https://developer.mozilla.org/en-US/docs/Glossary/Object
*/ 
////////////////////////////////////////////////////////////////

// String: with single or double quotes
const firstName = 'Sara';
const lastName = "O'Connor";
console.log('firstName:',firstName, typeof firstName);

//Template literals are enclosed by the back-tick (`) (grave accent) character instead of double or single quotes.
// Basic literal string creation
const template1 = `In JavaScript '\n' is a line-feed.`;

// Multiline strings
const template2 =`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;

// String interpolation
const friend = "Lev", time = "today";
console.log(`Hello ${friend}, how are you ${time}?`);


// Number
const age = 30;
const temp = 98.9;
console.log('age:',age, typeof age);
console.log('temp:',temp, typeof temp);

// Boolean
const hasKids = true;
const isMarried = false;
console.log('hasKids:',hasKids, typeof hasKids);

// Null
const nullVar = null;
console.log('nullVar:',nullVar, typeof nullVar); // object (this is a known JS quirk)

// Undefined: 
// NOTE it is not considered a good practice to explicitly assign undefined to a variable
// Null is used to indicate 'no value' whereas undefined means a variable has been declared but not assigned a value

let score;
console.log('score:',score, typeof score); // undefined

// Symbol
// Unique identifier: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// Used in advanced scenarios like object property keys
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;
console.log('BigInt:', n, typeof n);

// Reference Types
// Array: special type of object
const numbers = [1, 2, 3, 4];
console.log('numbers array:', typeof numbers);

// Object Literal
const person = {
  firstName: 'Brad',
  lastName: 'Traversy',
  age: 36
};
console.log('person object:', typeof person);

//Function variable
function sayHello() {
  console.log('Hello');
}
const funcVariable = sayHello;
console.log(funcVariable);
console.log(typeof funcVariable);
