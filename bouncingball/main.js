// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

class Ball {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} velX
   * @param {number} velY
   * @param {string | CanvasGradient | CanvasPattern} color
   * @param {number} radius
   */
  constructor(x, y, velX, velY, color, radius) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.radius = radius;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  move() {
    if (this.x + this.radius >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.radius <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.radius >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.radius <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (let i = 0; i < balls.length; i++) {
      if (this !== balls[i]) {
        const distanceX = this.x - balls[i].x;
        const distanceY = this.y - balls[i].y;
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );

        if (distance < this.radius + balls[i].radius) {
          if (this.radius > balls[i].radius) {
            balls.splice(i, 1);
            i--;
          }
          this.velX = -this.velX;
          this.velY = -this.velY;
        }
      }
    }
  }
}

/*
-------------------------

Fill balls

-------------------------
*/
let balls = [];
while (balls.length < 25) {
  let radius = random(10, 25);
  balls.push(
    new Ball(
      random(radius, width - radius),
      random(radius, height - radius),
      random(-7, 7),
      random(-7, 7),
      `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
      radius
    )
  );
}

function updateNumberOfBalls() {
  numOfBalls.textContent = balls.length();
}

/*
-------------------------

Clear canvas

-------------------------
*/
function clearCanvas() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);
}

/*
-------------------------

Add Frame request callback method

-------------------------
*/
function animate() {
  clearCanvas();
  for (let b of balls) {
    b.draw();
    b.move();
    b.collisionDetect();
  }
  requestAnimationFrame(animate);
}
// start animation
animate();
