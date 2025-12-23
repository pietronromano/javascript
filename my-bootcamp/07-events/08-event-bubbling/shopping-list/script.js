/*
 Event Bubbling
 Event bubbling is a type of event propagation where the event starts from the deepest target element and then bubbles up to its parent elements in the DOM hierarchy.

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events#event_bubbling


*/ 
////////////////////////////////////////////////////////////////

const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  console.log('Button was clicked');
  e.stopPropagation();
});

div.addEventListener('click', () => {
  console.log('Div was clicked');
});

form.addEventListener('click', () => {
  console.log('Form was clicked');
});

// Event Bubbling: Body click event fires when clicking on any element inside body
document.body.addEventListener('click', function (e) {
  console.log('Body clicked: ',e.target.nodeName);
});