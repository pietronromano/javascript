/*
Arrays - Basics

References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://javascript.info/array

An array is a special variable, which can hold more than one value at a time.
Arrays are used to store multiple values in a single variable.

JavaScript arrays are resizable and can contain a mix of different data types.
This is in contrast to Java and C, where arrays have a fixed size and can only contain elements of the same data type.

*/ 
////////////////////////////////////////////////////////////////

let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

// Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

fruits[3] = 'strawberry';

// Using the length as the index will always ADD on the the end
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);
