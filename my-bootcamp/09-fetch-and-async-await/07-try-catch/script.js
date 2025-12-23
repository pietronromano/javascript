/*
Try...Catch

The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown.

Syntax:
try {
  // Block of code to try
} catch (err) {
  // Block of code to handle errors
}
References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
- https://www.w3schools.com/js/js_errors.asp

*/ 
////////////////////////////////////////////////////////////////

try {
  console.log(x);
} catch (error) {
  console.log('Error: ' + error);
}

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }

  return number * 2;
}

try {
  const y = double('hello');
  console.log(y);
} catch (error) {
  console.log(error);
}
