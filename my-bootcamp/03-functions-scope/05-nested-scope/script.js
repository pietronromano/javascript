/*
Nested Scope / Closures

Closures are a fundamental concept in JavaScript that allow inner functions to access variables from their outer (enclosing) functions, even after the outer function has finished executing. 
This is possible because functions in JavaScript form closures, which means they "remember" the environment in which they were created.


References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#closures
*/ 
////////////////////////////////////////////////////////////////

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y);

  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  console.log(y);
}
