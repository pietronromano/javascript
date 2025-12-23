/*
Creating and Appending Elements
Learn how to create new DOM elements and append them to existing elements in the document.

References: 
-  https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
-  https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
-  https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

*/ 
////////////////////////////////////////////////////////////////

//Create a new div element: initially, parentNode and parentElement are null, as it is not yet part of the DOM
const div = document.createElement('div');

div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

//Append the new div element to the existing ul element in the DOM
document.querySelector('ul').appendChild(div);

//Create a text node with the content 'Hello World' and append it to the newly created div element
const text = document.createTextNode('Hello World');
div.appendChild(text);



