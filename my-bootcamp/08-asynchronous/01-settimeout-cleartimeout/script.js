/*
setTitmeout and clearTimeout

Objectives:
- Understand how to use setTimeout to schedule code execution after a delay
- Learn how to use clearTimeout to cancel a scheduled timeout

References: 
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout 
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout
*/ 
////////////////////////////////////////////////////////////////

// setTimeout - takes in a callback and a time to wait until that callback is executed

setTimeout(function () {
  console.log('Hello from callback');
}, 2000);

// Named function
setTimeout(changeText, 3000);

function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

// clearTimeout() will clear a timer
const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Timer Cancelled');
});


/*
 MdN Web Docs Example: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
*/
setTimeout(() => {
  console.log("this is the first message");
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);

/*
Output:
- this is the third message
- this is the second message
- this is the first message
Notice that the first function does not create a 5-second "pause" before calling the second function. Instead, the first function is called, but waits 5 seconds to execute. While the first function is waiting to execute, the second function is called, and a 3-second wait is applied to the second function before it executes. Since neither the first nor the second function's timers have completed, the third function is called and completes its execution first. Then the second follows.
 Then finally the first function is executed after its timer finally completes.
To create a progression in which one function only fires after the completion of another function, see the documentation on Promises.
*/