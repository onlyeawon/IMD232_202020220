class ball {
  constructor(posX, posY, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass * 5;
    this.color = color(h, s, v);
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    fill(this.color);
    colorMode(HSL, 360, 100, 100);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }
}

let balls = [];
let gravity;
let wind;

function setup() {
  setCanvasContainer('mysketch', 1, 1, true);

  colorMode(HSL, 360, 100, 100);
  for (let n = 0; n < 10; n++) {
    balls.push(new ball(radom(width), 0, random(1, 20), random(360), 100, 50));
  }

  gravity = createVector(0, 0.1);
  wind = createVector(0.5, 0);

  background(255);
}

function draw() {
  background(255);
  balls.forEach((each) => {
    const scaledG = p5.Vector.mult(gravity, each.mass);
    each.applyForce(scaledG);
    each.applyForce(wind);
    each.update();
    each.display();
  });
}

function mousePressed() {
  for (let n = 0; n < balls.length; n++) {
    balls[n] = new ball(radom(width), 0, random(1, 20), random(360), 100, 50);
  }
}
