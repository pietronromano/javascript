/*
Form Submission Events


////////////////////////////////////////////////////////////////
References: 
- https://developer.mozilla.org/en-US/docs/Web/API/FormData

*/ 
////////////////////////////////////////////////////////////////

const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  // Get value with .value
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}
// Option 1: 
//form.addEventListener('submit', onSubmit);


// Option 2: Using the FormData Object
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Get individual items
  const item = formData.get('item');
  const priority = formData.get('priority');

  console.log(item, priority);

  // Get al entried as an Iterator
  const entries = formData.entries();
  console.log(entries);

  // Loop through entries: each entry is an array [name, value]
  for (let entry of entries) {
    console.log(entry[1]);
  }
}
form.addEventListener('submit', onSubmit2);
