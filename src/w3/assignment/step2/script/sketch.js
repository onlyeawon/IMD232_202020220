let pos;
let vel;
let acc;
let radius = 20;

let center;
let mouse;
let centerToMouse;

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

  fill('black');
  acc = p5.Vector.random2D();
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background('white');
  //   acc = p5.Vector.random2D();
  acc.mult(0.4);
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);

  //   if (pos.x < 0) {
  //     pos.x = width;
  //   } else if (pos.x > width) {
  //     pos.x = 0;
  //   }
  //   if (pos.y < 0) {
  //     pos.y = height;
  //   } else if (pos.y > height) {
  //     pos.y = 0;
  //   }

  noStroke();
  ellipse(pos.x, pos.y, 2 * radius);
  center.set(pos.x, pos.y);
  mouse.set(mouseX, mouseY);
  centerToMouse = p5.Vector.sub(mouse, center);
  acc.set(centerToMouse.x, centerToMouse.y);
  strokeWeight(1);
  stroke('black');

  //   centerTovel.set(pos.x, pos.y);
  //   centerToacc.set(pos.x, pos.y);
  //   acc.mult(100);
  //   vel.mult(10);
  line(pos.x, pos.y, mouseX, mouseY);

  //   centerTovel = p5.Vector.sub(centerTovel, vel);
  //   centerToacc = p5.Vector.sub(centerToacc, acc);
}
