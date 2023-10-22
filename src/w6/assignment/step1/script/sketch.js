let emitter;
let emitters = [];
let gravity = 0;

function setup() {
  setCanvasContainer('mysketch', 3, 2, true);

  emitter = new Emitter(width / 2, 0);

  gravity = createVector(0, 0.01);

  background(255);
}

function draw() {
  emitter.addParticle();
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
  }

  background(255);
  emitter.update(gravity);
  emitter.display();
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].update(gravity);
    emitters[i].display();
  }
  console.log(emitter.particles.length);
}

// function mousePressed() {
//   emitters.push(new Emitter(mouseX, mouseY));
// }
