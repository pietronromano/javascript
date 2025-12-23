/*
Block Scope

Objectives:
- Understand block scope
- Differentiate between var, let, and const

Block Scope:
- A block is defined by curly braces { ... }.
- Variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block they are defined in. 
- Variables declared with `var` are function-scoped, meaning they are accessible throughout the entire function they are defined in, regardless of block boundaries.

Hoisting:
- var declarations, wherever they occur in a script, are processed before any code within the script is executed. Declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. 
- This behavior is called hoisting, as it appears that the variable declaration is moved to the top of the function, static initialization block, or script source in which it occurs.


References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#block_scope

*/ 
////////////////////////////////////////////////////////////////

var bar = 2; // Put on the window object, also global scope
const x = 100; // global scope, accessible everywhere, but not on the window object

// An If statement is a block
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

// Using var
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
// c is function scoped, so it is accessible here
console.log(c);

// var IS function scoped
function run() {
  var d = 100;
  console.log(d);
}
run();
// d is not accessible here
// console.log(d);



