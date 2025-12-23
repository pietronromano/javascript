/*
requestAnimationFrame

The requestAnimationFrame() method tells the browser that you wish to perform an animation 
and requests that the browser calls a specified function to update an animation before 
the next repaint. 
The method belongs to the Window interface.
The method takes as an argument a callback to be invoked before the repaint.

In this exercise, you will animate an image of a rocket moving across the screen from left to right, 
while also rotating it. The animation should last for 5 seconds.

References: 
- https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
- https://developer.mozilla.org/en-US/docs/Web/API/window/cancelAnimationFrame

*/ 
////////////////////////////////////////////////////////////////

const image = document.querySelector('img');
let start;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  if (elapsed > 5000) {
    done = true;
  }

  if (done) {
    return;
  }

  image.style.transform = `translateX(${elapsed / 10}px) rotate(${
    elapsed / 10
  }deg)`;

  //Call requestAnimationFrame again to continue the animation
  requestAnimationFrame(step);
}

//Start the animation
requestAnimationFrame(step);
