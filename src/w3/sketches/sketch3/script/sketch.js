let X;
let Y;
let velocityX = 3;
let velocityY = -2;

function setup() {
  setCanvasContainer('mysketch', 3, 2, true);
  background(255);
  X = width / 2.0;
  Y = height / 2.0;
}

function draw() {
  background(255);
  X += velocityX;
  Y += velocityY;
  ellipse(X, Y, 50);

  if (X < 0) {
    velocityX *= -1;
  } else if (X > width) {
    velocityX *= -1;
  }
  if (Y < 0) {
    velocityY *= -1;
  } else if (Y > height) {
    velocityY *= -1;
  }
}
