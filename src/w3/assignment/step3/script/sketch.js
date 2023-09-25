let pos;
let vel;
let acc;
let radius = 20;

let center;
let mouse;
let centerToMouse;
let centerAddMouse;

function setup() {
  setCanvasContainer('mysketch', 3, 2, true);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  console.log(pos);
  console.log(vel);

  center = createVector(width / 2, height / 2);
  mouse = createVector();
  centerToMouse = createVector();
  centerAddMouse = createVector();

  fill('black');
  acc = p5.Vector.random2D();
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background('white');
  acc.mult(0.4);
  vel.add(acc);
  vel.limit(4);
  pos.add(vel);

  noStroke();
  ellipse(pos.x, pos.y, 2 * radius);
  center.set(pos.x, pos.y);
  mouse.set(mouseX, mouseY);
  centerToMouse = p5.Vector.sub(mouse, center);
  acc.set(centerToMouse.x, centerToMouse.y);
  strokeWeight(1);
  stroke('black');

  line(pos.x, pos.y, mouseX, mouseY);

  if (mouseIsPressed === true) {
    centerAddMouse = p5.Vector.add(mouse, center);
    acc.set(centerAddMouse.x, centerAddMouse.y);
    acc = p5.Vector.random2D();
  } else {
    // rect(25, 25, 50, 50);
  }
}
