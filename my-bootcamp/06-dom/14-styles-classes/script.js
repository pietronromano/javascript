/*
Obtaining and Modifying Styles and Classes in the DOM

References: 
- Element.className: https://developer.mozilla.org/en-US/docs/Web/API/Element/className
- Element.classList: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
- Element.style: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/ 
////////////////////////////////////////////////////////////////

const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className - Gets a string of all classes
  console.log(itemList.className);
  // Changing the classes with className
  text.className = 'card dark';

  // classList - Array of classes, which also has methods to add, remove, toggle and replace
  console.log(itemList.classList);

  // We can loop through the classes
  itemList.classList.forEach((c) => console.log(c));

  // Add, remove, toggle, replace
  text.classList.add('dark');
  text.classList.remove('card');
  text.classList.toggle('hidden');
  text.classList.replace('card', 'dark');

  // style property - Add styles to elements
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;
