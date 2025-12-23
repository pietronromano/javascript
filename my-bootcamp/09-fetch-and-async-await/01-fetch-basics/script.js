/*
 Fetch Basics
 Fetch is a modern way to make network requests in JavaScript 
 It replaces older methods like XMLHttpRequest, which uses callbacks for handling responses.
 It is built into most modern browsers and provides a more powerful and flexible feature set.
 The fetch() function takes a URL as an argument and returns a Promise.
 It returns a Promise that resolves to the Response object representing the response to the request.

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

*/ 
////////////////////////////////////////////////////////////////

// Fetching a JSON file
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/pietronromano')
  .then((response) =>{ 
    const json = response.json(); 
    return json;
  })// receiving the response as JSON fromp previous then
  .then((data) => {
    document.querySelector('h1').textContent = data.login;
  });
