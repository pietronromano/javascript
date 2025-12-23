/*
Insert Elements in the DOM

Objectives:
- Learn how to insert elements, text, and HTML into the DOM using various methods.

Methods to Explore:
1. insertAdjacentElement(position, element) 
    - Inserts a given element at a specified position relative to the target element.
2. insertAdjacentText(position, text) 
    - Inserts a given text string at a specified position relative to the target element.
3. insertAdjacentHTML(position, html) 
    - Inserts a given HTML string at a specified position relative to the target element.
4. insertBefore(newNode, referenceNode) 
    - Inserts a new node before a specified existing child node of a parent node.

References: 
-  MDN Web Docs:
   - insertAdjacentElement: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
   - insertAdjacentText: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText
   - insertAdjacentHTML: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
   - insertBefore: https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

*/ 
////////////////////////////////////////////////////////////////

// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

// insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

insertElement();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
