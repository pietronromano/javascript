/*
Strings

References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings#strings
*/ 
////////////////////////////////////////////////////////////////

const firstName = 'John';
const age = 31;

// Concatenation
let x;
x = 'Hello, my name is ' + firstName + ' and I am ' + age + ' years old';       

// Template Literals
x = `Hello, my name is ${firstName} and I am ${age} years old`;
console.log(typeof x); // string

// String Properties and Methods

// Creating a "string object" (NOT GENERALLY NEEDED: JS does this automatically when using a propery or method on a primitive string)
//Warning: You should rarely find yourself using String as a constructor.
const s = new String('Hello World');
console.log(typeof s); // object!

x = s.length;

// Access value by key
x = s[0];

// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;

// Change case
x = s.toUpperCase();
x = s.toLowerCase();

// charAt() - returns the character at the specified index
x = s.charAt(0);

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('d');

// substring() - search a string for a specified value
x = s.substring(2, 5);
x = s.substring(7);

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);

// trim() - remove whitespace from beginning and end of string
x = '         Hello World';
x = x.trim();

// replace() - replace all instances of a string
x = s.replace('World', 'John');

// includes() - returns true if the string is found
x = s.includes('Hell');

// valueOf() - returns the primitive value of a variable
x = s.valueOf();

// split() - returns an array of chatacters/words in a string
x = s.split('');

console.log(x);


//CHALLENGE: Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);
