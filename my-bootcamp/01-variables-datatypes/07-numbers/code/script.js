/*
Numbers

References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

*/ 
////////////////////////////////////////////////////////////////

let x = 5;

// When used as a function, Number(value) converts a string or other value to the Number type. 
// If the value can't be converted, it returns NaN.
const num = new Number(5);

// toString() - returns a string representation of the number
x = num.toString();
// To get the length
x = num.toString().length;

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

// toPrecision() - returns a number with the specified length
x = num.toPrecision(3);

// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US');

// valueOf - Get value
x = num.valueOf();
console.log(x);

/* 
The Number object itself has some properties and methods
The built-in Number object has properties for numerical constants, such as maximum value, not-a-number, and infinity. 
You cannot change the values of these properties and you use them as follows:
*/
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

