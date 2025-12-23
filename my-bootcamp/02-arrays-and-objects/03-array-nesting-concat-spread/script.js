/*
Array Nesting, Concat, Spread, and Static Methods

Objectives:
- Nest arrays within arrays
- Use concat() to concatenate arrays
- Use the spread operator (...) to concatenate arrays
- Use flat() to flatten nested arrays
- Use static methods of the Array object:
  - isArray()
  - from()
  - of()

References: 
- MDN Array Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

*/ 
////////////////////////////////////////////////////////////////

let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];

// Nesting arrays

// Nesting berries inside of fruits
fruits.push(berries);

// Now we can access 'blueberry' with the following
x = fruits[3][1];

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() - Concatenate arrays
x = fruits.concat(berries);



// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// Static methods of Array object

// isArray() - Check is is an array
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from('12345');

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

