/*
Input Events
- input event
- change event
- focus and blur events
References: 
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur_event


*/ 
////////////////////////////////////////////////////////////////

const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  console.log(isChecked ? 'Checked' : 'Not Checked');
}

function onFocus() {
  console.log('Input is focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'red';
}

function onBlur() {
  console.log('Input is not focused');
  itemInput.style.outlineStyle = 'none';
}

// input, change, focus and blur events
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
