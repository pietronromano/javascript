async function getUser() {
  const url = 'https://api.github.com/users/pietronromano';
  console.log('Fetching user data from:', url);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getUser();
