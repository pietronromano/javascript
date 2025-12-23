/*
Traversing the DOM Elements
Learn how to navigate and manipulate DOM elements using parent, child, and sibling relationships.

References: 
- https://www.w3schools.com/js/js_htmldom_navigation.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Element/children
- https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement

*/ 
////////////////////////////////////////////////////////////////

let output;

/**
 * The read-only children property returns a live HTMLCollection which contains all of the child elements of the element upon which it was called.
 * Element.children includes only element nodes. To get all child nodes, including non-element nodes like text and comment nodes, use Node.childNodes.
 */


// Get the parent, using a custom class selector
const parent = document.querySelector('.parentDiv');

for (const child of parent.children) {
  console.log(child.tagName);
}

//Store reference to children
output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child
const child = document.querySelector('.child');

/**
 * The read-only parentElement property of Node interface returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element. 
 * Node.parentNode on the other hand returns any kind of parent, regardless of its type.
 */
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Get sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';

