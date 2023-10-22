let particle;
let gravity;
let emitters = [];

function setup() {
  setCanvasContainer('mysketch', 3, 2, true);

  particle = new Particle(width / 2, 0);
  gravity = createVector(0, 0.02);

  for (let i = 0; i < 110; i++) {
    emitters.push(new Emitter(random(width), random(height), 1)); // 1은 각 에미터당 생성할 입자 수
  }

  colorMode(HSL, 360, 100, 100, 100);
  background(255);
}

function draw() {
  // console.log(particle.isDead());
  if (particle.isDead()) {
    particle = new particle(width / 2, 0);
  }

  particle.applyForce(gravity);
  particle.update();
  background(255);
  particle.display();

  for (let i = 0; i < emitters.length; i++) {
    emitters[i].update();
    emitters[i].display();
  }
}
