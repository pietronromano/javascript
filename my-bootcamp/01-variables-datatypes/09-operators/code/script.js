/*
Arithmetic Operators

References: 
- https://javascript.info/operators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

*/ 
////////////////////////////////////////////////////////////////
// 1. Arithmetic Operators
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// Concatenation
x = 'Hello' + ' ' + 'World';

// Exponent (to the power of)
x = 2 ** 3;

// Increment
x = 1;
// x = x + 1;
x++;

// Decrement
// x = x - 1;
x--;

// 2. Assignment Operators
x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;


// 3. Comparison Operators

// Equal to (Just the value, not the type)
console.log(2 == '2'); // true

// Equal to (Type and value)
console.log(2 === '2'); // false

// Not equal to (Just the value, not the type)
console.log(2 != '2'); // false

// Not equal to (Type and value)
console.log(2 !== 2); // false

// Greater than and less than
console.log(10 > 5);
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 >= 5);

/*
Remainder: %
The remainder operator %, despite its appearance, is not related to percents.
The result of a % b is the remainder of the integer division of a by b.
Examples:
*/
console.log( 5 % 2 ); // 1, the remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, the remainder of 8 divided by 3
console.log( 8 % 4 ); // 0, the remainder of 8 divided by 4