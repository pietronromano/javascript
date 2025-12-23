/*
Window Events
- Events that are fired on the window object
- Common window events: load, DOMContentLoaded, resize, scroll, focus, blur
////////////////////////////////////////////////////////////////
References: 
- https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
- https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
- https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
- https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll_event
- https://developer.mozilla.org/en-US/docs/Web/API/Window/focus_event
- https://developer.mozilla.org/en-US/docs/Web/API/Window/blur_event


** page load vs DOMContentLoaded **
The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts (including async, deferred, and module scripts), iframes, and images, except those that are loaded lazily. 
This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.

** Script placement and defer attribute **
- If you place your script at the end of the body, it will run after the DOM is loaded.
  - Nowadays, it's common to place scripts at the end of the body to ensure that the DOM is fully loaded before the script runs.
- If you place your script in the head, it may run before the DOM is loaded, so you should use the `defer` attribute to ensure it runs after the DOM is ready.
  - In the past, scripts were often placed in the head without `defer`, which could lead to issues if the script tried to access DOM elements that hadn't been loaded yet.
  - see index.html:
    <!-- Script in head -->
    <!-- Use `defer` when you put script in head -->
    <script src="./script.js" defer></script>

*/ 
////////////////////////////////////////////////////////////////

// On Page Load
// Old way:
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };
// New way:
window.addEventListener('load', () => console.log('Page Loaded'));

// On DOM Load
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

console.log('Run me');

// Resize Event
window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// Scroll Event
window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

// Focus & Blur Events
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
