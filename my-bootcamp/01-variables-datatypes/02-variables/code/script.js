/*
Variables
------------------------------
A variable is a named container for storing data values.
Ways to declare a variable in JavaScript:
- var: (old way, avoid using it)
- let: (modern way, can be re-assigned) 
- const: (modern way, cannot be re-assigned)


var vs let
------------------------------
The main difference between var and let is their scope. 
- Scope refers to the accessibility of variables in different parts of your code.
- var has global scope and let has block scope. 
- var's global scope means that you can use the variables defined with var in the entire script. 
- On the other hand, let has block scope, which means you can only use variables defined with let in the specific block of code in which they were defined. 
- Remember, a block of code will always start with { and end with }, which is how you can recognize them.

References: 
- https://javascript.info/variables
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Declarations



*/ 
////////////////////////////////////////////////////////////////
// Strict mode forces variable declarations and helps catch common coding errors and "unsafe" actions, ES5 feature
//'use strict'; 
myUndeclaredVar = 'something'; // Implicit global variable (not recommended), not allowed in strict mode

var myVar = 'Hello World'; // Old way to declare a variable, declares a variable with function scope
console.log(myVar);

// Modern way to declare variables, ES6 feature
let firstName = 'John'; 
const lastName = 'Doe';
let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// We cannot re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
// (NOTE: This is our first look at Arrays and Objects, will see more in a later section)
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

// Declaring an object
const person = {
  firstName: 'Brad',
};
person.firstName = 'John';
person.email = 'brad@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);

/*
Uppercase constants
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.
Such constants are named using capital letters and underscores.
For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:
*/
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00