/*
 Event Object

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/Event
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget

Event Object Properties:
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen

*/ 
////////////////////////////////////////////////////////////////

const logo = document.querySelector('img');

function imageOnClick(e) {
  // Event properties
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.type);
  console.log(e.timeStamp);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.offsetX);
  console.log(e.offsetY);
  console.log(e.pageX);
  console.log(e.pageY);
  console.log(e.screenX);
  console.log(e.screenY);
}

function imageOnDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('click', imageOnClick);
logo.addEventListener('drag', imageOnDrag);



// e.preventDefault() method prevents the default behavior
const preventDefaultBtn = document.querySelector('#preventDefault')
preventDefaultBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Prevent Default was clicked');
});


///////////////////////////////////////
/* 
**The value of "this" within the handler**
It is often desirable to reference the element on which the event handler was fired, such as when using a generic handler for a set of similar elements.
When attaching a handler function to an element using addEventListener(), the value of this inside the handler will be a reference to the element. 
It will be the same as the value of the currentTarget property of the event argument that is passed to the handler.
*/
preventDefaultBtn.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of myElement
  console.log(e.currentTarget === this); // logs `true`
});


//As a reminder, arrow functions do not have their own this context.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods
preventDefaultBtn.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is th Window object, NOT preventDefaultBtn
  console.log(e.currentTarget === this); // logs `false`
});