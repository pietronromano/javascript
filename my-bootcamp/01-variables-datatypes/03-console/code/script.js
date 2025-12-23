/*
Console Methods

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/Console

*/ 
////////////////////////////////////////////////////////////////

// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Using substitutions
//%d or %i: Outputs an integer.
//%s: Outputs a string.
for (let i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}

// Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);

// The console.dir() static method displays a list of the properties of the specified JavaScript object.
console.dir(window.document);
