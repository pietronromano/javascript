/*
  COMMON FETCH OPTIONS
  method: HTTP method you want to use
  body: Data you want to send. Usually to be put in a database, etc
  headers: Any HTTP headers you want to send

References: 
  - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#creating_a_request_object

*/

////////////////////////////////////////////////////////////////

function createPost({ title, body }) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({ title: 'My Post', body: 'This is my Post' });
