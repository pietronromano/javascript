/*
 Example Project: Random User Generator
 Description: This project fetches random user data from an external API and displays it on the webpage. 
 The background color changes based on the user's gender.

References: 
- API Documentation: https://randomuser.me/documentation

*/ 
////////////////////////////////////////////////////////////////

function fetchUser() {
  showSpinner();
  // Using a CORS proxy to avoid CORS issues with the photos
  fetch('https://randomuser.me/api', { headers: { 'Access-Control-Allow-Origin': '*' } })
    .then((res) => res.json())
    .then((data) => {
      hideSpinner();
      displayUser(data.results[0]);
    });
}

function displayUser(user) {
  const userDisplay = document.querySelector('#user');

  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'rebeccapurple';
  } else {
    document.body.style.backgroundColor = 'steelblue';
  }

  userDisplay.innerHTML = `
  <div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.picture.large}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span> ${user.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
  </div>
</div>
  `;
}

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}

document.querySelector('#generate').addEventListener('click', fetchUser);

fetchUser();
