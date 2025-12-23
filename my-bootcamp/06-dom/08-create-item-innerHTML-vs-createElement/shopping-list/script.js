/*
Create elements using innerHTML vs createElement

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
- https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
- https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode


**innerHTML**:
- Quick to write and easy to read.
- Can introduce security risks (XSS) if not careful with user input.
- Less performant for large or complex DOM manipulations since it re-parses HTML.
*/ 
////////////////////////////////////////////////////////////////

// Quick & Dirty
function createListItem(item) {
  const li = document.createElement('li');

  li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;

  document.querySelector('.items').appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');
createNewItem('Cheese');
