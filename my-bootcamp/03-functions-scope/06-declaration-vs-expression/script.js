/*
Declaration vs Expression

In JavaScript, functions can be defined in two primary ways: function declarations and function expressions.

1. Function Declaration:
A function declaration defines a named function using the 'function' keyword followed by the function name and parameters. 
Function declarations are hoisted, meaning they can be called before they are defined in the code.

Example:
function greet(name) {
  return 'Hello, ' + name + '!';
}

2. Function Expression:
A function expression defines a function as part of a larger expression, typically assigned to a variable. 
Function expressions are not hoisted, so they cannot be called before they are defined.

Example:
const greet = function(name) {
  return 'Hello, ' + name + '!';
};

Key Differences:
- Hoisting: Function declarations are hoisted, while function expressions are not.
  - Hoisting means that function declarations can be invoked before their definition in the code, whereas function expressions cannot.
- Naming: Function declarations must have a name, while function expressions can be anonymous or named.
- Usage Context: Function expressions can be used as arguments to other functions or assigned to variables, while function declarations are standalone.

References: 
- 

*/ 
////////////////////////////////////////////////////////////////

// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

// When using declarations, you can invoke the function before the declaration. With expressions, you can not
console.log(addDollarSign(100));

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));
