/*
Call Stack
The call stack is a data structure that keeps track of function calls in a program. 
When a function is invoked, it is added to the top of the call stack. 
When the function completes, it is removed from the stack. 
This helps manage the order of function execution and keeps track of where each function was called from.

References: 
- https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model

*/ 
////////////////////////////////////////////////////////////////

// Open 'sources' tab and put a breakpoint at the first() function

// First Example

function first() {
  console.log('first...');
}

function second() {
  console.log('second...');
}

function third() {
  console.log('third...');
}

first();
second();
third();

// Second Example

// function first() {
//   console.log('first...');
//   second();
// }

// function second() {
//   console.log('second...');
//   third();
// }

// function third() {
//   console.log('third...');
// }

// first();
