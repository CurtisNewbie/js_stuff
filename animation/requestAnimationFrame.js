/*

  Modern version of async interval method based on frames

*/
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

let x = width / 2;
let y = height / 2;
let xChange = 50;
let yChange = 50;
let radius = 50;

function clearCanvas() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);
}

function draw() {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

/*
-------------------------------------------

 draw approximately 60fps but based on the computer performance and screen refresh rate

-------------------------------------------
 */
function animationCallback() {
  // reverse direction if necessary
  if ((x >= width) | (x <= 0)) {
    xChange = -xChange;
  }
  if ((y >= height) | (y <= 0)) {
    yChange = -yChange;
  }

  y += yChange;
  x += xChange;
  clearCanvas();
  draw();
  requestAnimationFrame(animationCallback);
}

/*
------------------------------------

  Always remeber to call this callback method for the first time

------------------------------------
*/
animationCallback();
