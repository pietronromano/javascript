/*
Global Function Scope

Objectives:
- Understand global scope
- Access global variables in functions and blocks
- Understand variable shadowing 

Scope Explanation:
The scope is the current context of execution in which values and expressions are "visible" or can be referenced. 
If a variable or expression is not in the current scope, it will not be available for use. 
Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.
JavaScript has the following kinds of scopes:
- Global scope: The default scope for all code running in script mode.
- Module scope: The scope for code running in module mode.
- Function scope: The scope created with a function.

Variable Shadowing:
Variable shadowing occurs when a variable declared within a certain scope (e.g., function or block) has the same name as a variable declared in an outer scope. 
The inner variable "shadows" the outer variable, making it inaccessible within the inner scope.


References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Function_scope
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/window

*/ 
////////////////////////////////////////////////////////////////

// DOM 'window' is globally scoped
console.log(window);

// Accessing global 'window' properties
console.log(window.innerWidth);
console.log(document.title);
console.log(innerWidth);

// Global scope variable
const x = 100;

console.log(x, 'in global');

function run() {
  // Access global vars in functions
  console.log(window.innerHeight);
  console.log(x, 'in function');
}
run();

// Access global vars in blocks
if (true) {
  console.log(x, 'in block');
}

function add() {
  // Overwriting global x (variable shadowing)
  const x = 1;
  const y = 50;
  console.log(x + y);
}

// Can not access a function scoped variable in global scope
// Uncaught ReferenceError: y is not defined in the global scope
console.log(y);

add();
