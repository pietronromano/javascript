/*
Geolocation APIs

The Geolocation API allows the user to provide their location to web applications if they so desire. 
For privacy reasons, the user is asked for permission to report location information.
WebExtensions that wish to use the Geolocation object must add the "geolocation" permission to their manifest. 
The user's operating system will prompt the user to allow location access the first time it is requested.

References: 
- https://developer.mozilla.org/en-US/docs/Web/API
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

*/ 
////////////////////////////////////////////////////////////////

// getCurrentPosition()
function currentSuccess(pos) {
  const coords = pos.coords;

  document.getElementById('latitude').textContent = `Latitude: ${coords.latitude}`;
  document.getElementById('longitude').textContent = `Longitude: ${coords.longitude}`;
  document.getElementById('accuracy').textContent = `Within: ${coords.accuracy} meters`;
}

function currentError(err) {
  document.getElementById('error').textContent = `Error: ${err.code} - ${err.message}`;
}

const currentOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

navigator.geolocation.getCurrentPosition(currentSuccess, currentError, currentOptions);

// watchPosition()
const target = {
  latitude: 41.3874387,
  longitude: -71.394839,
};

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    document.getElementById('destination').textContent = 'You have reached your destination!';
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
);
