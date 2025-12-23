/*
 Fetch Error Handling

References: 
- NOTE: THIS TEST WEB SITE IS NO LONGER AVAILABLE: http://httpstat.us
  - SO THE EXAMPLES BELOW MAY NOT WORK AS INTENDED
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#handling_the_response
*/ 
////////////////////////////////////////////////////////////////


// Make a request to something that doesn't exist
// Catch ONLY runs on a network error
fetch('http://hello123.net')
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });

// Test with response.ok
fetch('https://api.github.com/users/pietronromano/repos')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Request Failed');
    }
    return response;
  })
  .then((response) => {
    console.log('success:', response);
  })
  .catch((error) => {
    console.log(error);
  });

// Check for specific code
fetch('http://httpstat.us/200')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Not Found');
    } else if (response.status === 500) {
      throw new Error('Server Error');
    } else if (response.status !== 200) {
      throw new Error('Request Failed');
    }
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });
