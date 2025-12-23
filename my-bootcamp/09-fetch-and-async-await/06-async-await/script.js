/*
Async / Await
- Async functions always return a promise.
- await makes JavaScript wait until that promise settles and returns its result.
  - await can only be used inside async functions.
- Error handling with try/catch or .catch() on the returned promise.

References: 
-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

*/ 
////////////////////////////////////////////////////////////////

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 20 });
  }, 1000);
});

promise.then((data) => {
  console.log(data)
});

async function getPromise() {
  const response = await promise;
  console.log(response);
}
getPromise();


/////////////////////////////////////////////////////////////////
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}
getUsers();

/////////////////////////////////////////////////////////////////
const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  throw new Error('Hello');

  console.log(data);
};

getPosts().catch((error) => {
  console.log(error)
});
