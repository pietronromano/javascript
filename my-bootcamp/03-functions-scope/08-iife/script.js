/*
IFFEs - Immediately Invoked Function Expressions

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
It has its own scope, which means variables defined inside the IIFE cannot be accessed from outside.

Syntax:
(function() {
  // code here
})();

You can also pass parameters to an IIFE:
(function(param) {
  // code here
})(argument); 

References: 
- https://developer.mozilla.org/en-US/docs/Glossary/IIFE

*/ 
////////////////////////////////////////////////////////////////

// IFFE Syntax (Has it's own scope and runs right away)
(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

// Params
(function (name) {
  console.log('Hello ' + name);
})('Shawn');

// Named IIFE (Can only be called recursively)
(function hello() {
  console.log('Hello');
})();
