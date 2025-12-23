/*
 Keyboard Events

 There are three main keyboard events:
 - keypress: fires when a key that produces a character value is pressed down
 - keydown: fires when any key is pressed down
 - keyup: fires when a key is released
References: 
- https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
- https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event
- https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event


*/ 
////////////////////////////////////////////////////////////////
const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  console.log('keydown');
  // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes
  if (e.keyCode === 13) {
    alert('You pressed enter');
  }

  // code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  // repeat
  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  // shiftKey, ctrlKey & altKey
  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
};

// Event Listeners
itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
