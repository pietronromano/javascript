/*
Type Conversion in JavaScript
Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types. 
Explicit conversion happens when the programmer manually converts data from one type to another using built-in functions.

References: 
- https://javascript.info/type-conversions 
- https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion

*/ 
////////////////////////////////////////////////////////////////

//Declare a number as a string
let amount = '300';
console.log(amount, typeof amount);

// Convert string to number
amount = parseInt(amount);
console.log('parseInt', amount, typeof amount);

// Another way to convert string to number
amount = Number(amount);
console.log(amount, typeof amount);

// Convert number to string
amount = amount.toString();
console.log('toString', amount, typeof amount);
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);
console.log('parseFloat', amount, typeof amount);

// Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).
// Convert number to boolean
boolVar = Boolean(0);
console.log('Boolean(0)', boolVar, typeof boolVar);

/* Falsy vs Truthy Values
- 0, null, undefined, NaN, ""	 :   -> false
- any other value, 1,-1,"0", " " :    -> true
*/
boolVar = Boolean(123);
console.log('Boolean(123)', boolVar, typeof boolVar);

boolVar = Boolean("");
console.log('Boolean("")', boolVar, typeof boolVar);

boolVar = Boolean(" ");
console.log('Boolean(" ")', boolVar, typeof boolVar);


// Ways to get NaN
console.log(Number('hello'));
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);


////////////////////////////////////////////////////////////////
/* Type Coercion: Implicit vs Explicit 
Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
*/

let x;
x = 5;
console.log(x, typeof x);

// Coerced to a string
x = 5 + '5';
console.log(x, typeof x);

x = 5 + Number('5');
console.log(x, typeof x);

// Coerced to a number
x = 5 * '5';
console.log(x, typeof x);

// null is coerced to 0 as it is a `falsy` value
x = 5 + null;
console.log(x, typeof x);
x = Number(null);
console.log(x, typeof x);

x = Number(true);
x = Number(false);
console.log(x, typeof x);

// true is coerced to a 1
x = 5 + true;
console.log(x, typeof x);
// false is coerced to 0 (falsy)
x = 5 + false;
console.log(x, typeof x);

// Undefined is coerced to 0 (falsy)
x = 5 + undefined;
console.log(x, typeof x);