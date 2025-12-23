/*
 Promise Chaining

References: 
-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining

*/ 
////////////////////////////////////////////////////////////////

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // true; // Change to false to see successful resolution

    if (error) {
      reject('Error: Something went wrong');
    } else {
      resolve({ name: 'John Doe', age: 30 });
    }
  }, 1000);
});

// Chaining multiple .then() calls to process the resolved value step by step
// Each .then() receives the result of the previous one
// Adding a .catch() to handle any errors that may occur in the chain
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
    return 123;
  })
  .then((x) => console.log('This will run no matter what', x));
