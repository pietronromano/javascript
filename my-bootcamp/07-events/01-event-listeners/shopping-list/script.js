/*
 Event Listeners

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

**EventTarget.addEventListener**
The most flexible way to set an event handler on an element is to use the EventTarget.addEventListener method. 
This approach allows multiple listeners to be assigned to an element and enables listeners to be removed, if needed, using EventTarget.removeEventListener.

*/ 
////////////////////////////////////////////////////////////////

const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

/* 
//JavaScript Event Listener: only allows one event handler 
clearBtn.onclick = function () {
  console.log('Clear Items');
};
*/

// addEventListener(): more flexible, allows multiple event handlers, and removal
clearBtn.addEventListener('click', () => console.log('Clear Items'));

// Use named function
clearBtn.addEventListener('click', onClear);

// Fire off event from JS
setTimeout(() => clearBtn.click(), 5000);

// removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

/*
Triggering built-in events
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events#triggering_built-in_events
*/
function simulateClick() {
  // Attach the event listener again in as it was removed
  clearBtn.addEventListener('click', onClear);

  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  const cancelled = !clearBtn.dispatchEvent(event);

  if (cancelled) {
    // A handler called preventDefault.
    console.log("cancelled");
  } else {
    // None of the handlers called preventDefault.
     console.log("not cancelled");
  }
}

document.querySelector('#simulate').addEventListener('click', simulateClick);