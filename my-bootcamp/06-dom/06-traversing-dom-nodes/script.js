/*
Traversing the DOM Nodes
Learn how to navigate through the DOM tree using parent, child, and sibling relationships.

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
- https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
- https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild 


**parentElement being null**
parentElement can be null if the node has no parent (for example, because it isn't attached to a tree) or its parent is not an Element. 
On the other hand, Node.parentNode always returns the parent node, which may be a Document or other node types.

*/ 
////////////////////////////////////////////////////////////////

let output;

// Get child nodes
const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

// Get parent node
const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Get sibling nodes
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
