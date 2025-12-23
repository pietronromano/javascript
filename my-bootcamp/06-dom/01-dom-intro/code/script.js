/*
 Document Object Model (DOM) Introduction

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API
- https://www.w3schools.com/js/js_htmldom.asp

*/ 
////////////////////////////////////////////////////////////////

// Global window object
console.log(window);

// The document object is part of the window object
console.dir(window.document);

// We can access DOM elements directly with properties
console.log(document.body);
console.log(document.links[0]);

// We can set properties of elements
document.body.style.backgroundColor = 'lightblue';

// We also have methods to select elements more directly
document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';

// Modern way to select elements, similar to CSS selectors
document.querySelector('#main h1').innerText = 'Hello';
