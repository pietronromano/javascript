/*
Web Animation API

The Web Animation API provides a way to create complex animations directly in JavaScript.
This API combines the capabilities of CSS animations and JavaScript to offer more control and flexibility over animations. 
It allows developers to define keyframes and animation options, control playback, and manipulate animations dynamically.
In this example, we create a simple rolling ball animation that changes color as it rotates. We also provide controls to play, pause, reverse, speed up, and slow down the animation.

References: 
- MDN Web Docs - Web Animations API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
*/ 
////////////////////////////////////////////////////////////////

const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speed-up');
const slowDown = document.getElementById('slow-down');

const rollAnimation = [
  {
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'white',
  },
  {
    color: 'blue',
    offset: 0.3,
  },
  {
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
    color: 'white',
  },
];

const rollOptions = {
  duration: 3000,
  iterations: Infinity,
};

const roll = ball.animate(rollAnimation, rollOptions);

play.addEventListener('click', () => {
  roll.playbackRate = 1;
  roll.play();
});
pause.addEventListener('click', () => roll.pause());
reverse.addEventListener('click', () => roll.reverse());
speedUp.addEventListener(
  'click',
  () => (roll.playbackRate = roll.playbackRate * 2)
);
slowDown.addEventListener(
  'click',
  () => (roll.playbackRate = roll.playbackRate * 0.5)
);
