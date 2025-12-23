/*
Multiple Selectors

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
- https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName

**HTMLCollection vs NodeList**
- A NodeList is a collection of nodes such as elements and text nodes. A NodeList can be live or static depending on how it is retrieved. For example, the NodeList returned by querySelectorAll() is static, while the NodeList returned by childNodes is live.
- The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list.

An HTMLCollection in the HTML DOM is live; it is automatically updated when the underlying document is changed. For this reason it is a good idea to make a copy (e.g., using Array.from) to iterate over if adding, moving, or removing nodes.

*/ 
////////////////////////////////////////////////////////////////

// querySelectorAll()
// Returns a NodeList
const listItems = document.querySelectorAll('.item');

// Access elements by index
console.log(listItems[1].innerText);

// Setting a color for specific element
listItems[1].style.color = 'red';

// We can use forEach() on a NodeList
listItems.forEach((item, index) => {
  item.style.color = 'red';

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    item.innerHTML = ` Oranges
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
});

// getElementsByClassName()
// Returns an HTMLCollection

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

// getElementsByTagName()
// Returns an HTMLCollection
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);
