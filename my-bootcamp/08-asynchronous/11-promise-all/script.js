/*
 Full example of using Promise.all to handle multiple asynchronous requests.

 1. We define a function `getData` that returns a promise for an XMLHttpRequest to fetch data from a given endpoint.
 2. We create three promises to fetch data from 'movies.json', 'actors.json', and 'directors.json'.
 3. We also create a dummy promise that resolves immediately with the string 'Hello World'.
 4. We use `Promise.all` to wait for all four promises to resolve.
 5. If all promises resolve successfully, we log the results as an array.
 6. If any promise rejects, we catch the error and log it.

References: 
- Promise.all: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

*/ 
////////////////////////////////////////////////////////////////

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');

const dummyPromise = new Promise((resolve, reject) => {
  resolve('Hello World');
});

// Takes in promises
Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
  .then((data) => {
    // Returns an array of promise results
    console.log(data);
  })
  .catch((error) => console.log(error));
