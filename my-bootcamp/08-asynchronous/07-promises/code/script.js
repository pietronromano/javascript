/*
Promises Examples
  - Promises are a way to handle asynchronous operations in JavaScript
  - A Promise is an object representing the eventual completion or failure of an asynchronous operation.
  - Promises can be in one of three states: pending, fulfilled, or rejected
  - They allow chaining of asynchronous operations and provide better error handling
  - Promises are queued as microtasks, to be executed after the current script has finished but before any rendering or I/O events

References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
- https://javascript.info/promise-basics

*/ 
////////////////////////////////////////////////////////////////

// Create a promise
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log('Promise consumed..');
});

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});


// Consuming the Promise, multiline format
getUser
  .then((user) => {
    // Success
    console.log(user)}
  )
  .catch((error) => {
    // Error
    console.log(error)
  })
  .finally(() => {
    // Always executed
    console.log('The promise has been resolved or rejected')
  });

  // Consuming the Promise, single line format
getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or rejected'));

// Demonstrating that promises are asynchronous
// This will log before the promise resolves
console.log('Hello from global scope');
