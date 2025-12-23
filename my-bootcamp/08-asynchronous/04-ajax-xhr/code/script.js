/*
 AJAX - Asynchronous JavaScript and XML
 - Used to request data from a server
 - Can be done in the background without interfering with the display and behavior of the existing page
 - Modern applications use AJAX for dynamic content loading

 XMLHttpRequest Object
 - Used to exchange data with a server behind the scenes
 - Can retrieve data from a URL without having to do a full page refresh
 - Can send data to a server in the background
 - Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.
    - Nowadays, the browser's Fetch API is often preferred for making AJAX requests due to its simpler and more powerful interface.

 Basic Steps to Use XHR
 1. Create an XMLHttpRequest object
 2. Configure it: specify the HTTP method (GET, POST, etc.) and the URL endpoint
 3. Set up a callback function to handle the response
 4. Send the request to the server
 5. Process the response when it arrives

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

*/ 
////////////////////////////////////////////////////////////////

const xhr = new XMLHttpRequest();

// Specify method and endpoint/URL

// 1: Simple local JSON file
//xhr.open('GET', './movies.json');

// 2: Using a public API 
xhr.open('GET', 'https://api.github.com/users/pietronromano/repos');

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);

    // 1: Simple local JSON file
    // data.movies.forEach((movie) => {
    //   const li = document.createElement('li');
    //   li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
    //   document.querySelector('#results').appendChild(li);
    // });

    // 2: Using a public API, repositories from GitHub
    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.pushed_at}`;
      document.querySelector('#results').appendChild(li);
    });

  }
};

// Send request, triggering the process handled above by onreadystatechange
xhr.send();
