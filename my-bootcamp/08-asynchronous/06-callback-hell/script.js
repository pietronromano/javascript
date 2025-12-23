/*
 Callback Hell Examples
  - A situation where multiple nested callbacks make code hard to read and maintain
  - Often occurs in asynchronous programming when each operation depends on the result of the previous one
  - Leads to deeply nested structures that are difficult to follow

  Solutions to Avoid Callback Hell:
  1. Promises
     - Allow chaining of asynchronous operations
     - Provide better error handling
  2. Async/Await
     - Syntactic sugar over Promises
     - Makes asynchronous code look and behave like synchronous code


References: 
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_asynchronous_programming
- https://callbackhell.com/

*/ 
////////////////////////////////////////////////////////////////

function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
    // Simulating network delay, Math.random() returns a float between 0 and 1
    // so multiplying by 3000 gives a range between 0 and 3000 milliseconds,    
    // and adding 1000 ensures a minimum delay of 1000 milliseconds
  }, Math.floor(Math.random() * 3000) + 1000);
}

getData('./movies.json', (data) => {
  let moveTitles  = '';
  data.forEach((movie) => moveTitles += ` ${movie.title} - `); 
  document.getElementById('movies').innerText = moveTitles;
  console.log(data);
  getData('./actors.json', (data) => {
    let actorNames  = '';
    data.forEach((actor) => actorNames += ` ${actor.name} - `); 
    document.getElementById('actors').innerText = actorNames;
    console.log(data);
    getData('./directors.json', (data) => {
      let directorNames  = '';
      data.forEach((director) => directorNames += ` ${director.name} - `); 
      document.getElementById('directors').innerText = directorNames;
      console.log(data);
    });
  });
});
