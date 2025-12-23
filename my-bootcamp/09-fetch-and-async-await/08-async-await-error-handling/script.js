/*
 Async/Await Error Handling

References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

*/ 
////////////////////////////////////////////////////////////////

const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Request Failed');
    }

    const data = await response.text();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Request Failed');
  }

  const data = await response.text();

  console.log(data);
};

// getUsers();
getPosts().catch((error) => console.log(error));
