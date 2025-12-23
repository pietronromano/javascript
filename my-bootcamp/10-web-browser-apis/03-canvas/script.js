/*
Canvas API 

References: 
- Packt, Javascript Beginner to Professional, Chapter 14: HTML5, Canvas, and JavaScript
- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

*/ 
////////////////////////////////////////////////////////////////

const canvas = document.getElementById('my-canvas');
// ctx is a CanvasRenderingContext2D object (see dev tools)
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// Draw circle
ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// Draw lines
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw text
ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillText('Hello World', 300, 100, 300);
ctx.strokeText('Hello World', 300, 500, 300);

// Draw image
const image = document.querySelector('img');
image.style.display = 'none';

// Ensure the image is loaded before drawing
image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100));
