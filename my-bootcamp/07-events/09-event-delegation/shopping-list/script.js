/*
Event Delegation
------------------------------
Event Bubbling allows us to take advantage of event delegation.
Instead of adding event listeners to each individual list item,
we add a single event listener to the parent <ul> element.
This technique is called event delegation and is more efficient,
especially when dealing with a large number of child elements.

When an event occurs on a child element, it bubbles up to the parent,
where we can handle it. We check if the event target is a list item
before performing any actions.


**target and currentTarget**
We're using two different properties of the event object to access the element that was clicked. 
- event.currentTarget: refers to the element to which this event handler has been attached, in the example below, it's the <ul> element. 
- event.target: refers to the element that triggered the event, in this case, it's the specific <li> that was clicked.



////////////////////////////////////////////////////////////////
References: 
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation

*/ 
////////////////////////////////////////////////////////////////
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Inefficient way to handle events on multiple items
// Add an event listener on all items
// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     console.log('Clicked on item:', e.target.textContent);
//   });
// });

// Add a single event listener on the parent (Event Delegation)
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('Clicked on item:', e.target.textContent);

    console.log(`Target: ${e.target.tagName}`);
    console.log(`Current target: ${e.currentTarget.tagName}`);
  }
});

list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});
