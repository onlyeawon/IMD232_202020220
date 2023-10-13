let moverA;
let gravity;
let isDragging = false;
let dragOffset;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
  moverA = new Mover(width / 2, height / 2, 10);
  gravity = createVector(0, 0.3);
  dragOffset = createVector(0, 0);
}

function draw() {
  background(255);

  if (isDragging) {
    // If the ball is being dragged, update its position to the mouse position.
    moverA.pos.x = mouseX + dragOffset.x;
    moverA.pos.y = mouseY + dragOffset.y;
  } else {
    // Apply gravity only if not dragging the ball.
    let gravityA = createVector(gravity.x, gravity.y);
    gravityA.mult(moverA.mass);
    moverA.applyForce(gravityA);
  }

  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();
}

function mousePressed() {
  // Check if the mouse is over the ball.
  let d = dist(mouseX, mouseY, moverA.pos.x, moverA.pos.y);
  if (d < moverA.radius) {
    isDragging = true;
    // Calculate the offset from the ball's center to the mouse.
    dragOffset.x = moverA.pos.x - mouseX;
    dragOffset.y = moverA.pos.y - mouseY;
    // Stop the ball's motion while dragging.
    moverA.vel.mult(0);
    moverA.acc.mult(0);
  }
}

function mouseReleased() {
  isDragging = false;
}
