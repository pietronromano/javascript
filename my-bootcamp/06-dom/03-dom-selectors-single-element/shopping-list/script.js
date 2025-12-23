/*
Single Element DOM Selectors

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

**querySelector()*+
The Document method querySelector() returns the first Element within the document 
that matches the specified CSS selector, or group of CSS selectors. 
If no matches are found, null is returned.
querySelector() is available on all element nodes, not just document nodes.
- Use the dot "." for custom class selectors, e.g., document.querySelector(".myclass")
- Use the # "#" for ID selectors, e.g., document.querySelector("#myid")


**getElementById()**
Unlike some other element-lookup methods such as Document.querySelector() 
and Document.querySelectorAll(), getElementById() is only available as a method of 
the global document object, and not available as a method on all element objects in the DOM. 
Because ID values must be unique throughout the entire document, there is no need for "local" versions of the function.
*/

////////////////////////////////////////////////////////////////
debugger; //stop here for debugging

// document.getElementById()
console.log(document.getElementById('app-title'));

// Get attributes
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()
// Use any CSS selector
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// CAN Use these methods on other elements (not just document, unlike getElementById)
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
