/*
Mouse Events
////////////////////////////////////////////////////////////////
Mouse events are fired when a pointing device (usually a mouse) is used to interact with a web page. 
Common mouse events include click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, contextmenu (right-click), wheel, dragstart, drag, and dragend.
 
References: 
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent


*/ 
////////////////////////////////////////////////////////////////

// Select the logo element
const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};
const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
