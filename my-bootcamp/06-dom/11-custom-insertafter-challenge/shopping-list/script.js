/*
insertAfter Function Challenge

Create a function named insertAfter that takes two parameters: newEl and existingEl. 
The function should insert newEl into the DOM immediately after existingEl.

References: 
- 

*/ 
////////////////////////////////////////////////////////////////

function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);
