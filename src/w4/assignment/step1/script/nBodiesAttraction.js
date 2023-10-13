let bodies = [];
let numBodies = 50;

let G = 0.3;

let showVector = false;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  reset();
  for (let i = 0; i < numBodies; i++) {
    let body = new Body(random(width), random(height));
    bodies.push(body);
  }
}

function draw() {
  background(255);

  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 40; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  // for (let i = 0; i < 10; i++) {
  //   bodies[i] = new Body(random(width), random(height), random(0.1, 1));
  // }

  bodies = [];

  for (let i = 0; i < numBodies; i++) {
    // 새로운 Body 객체를 생성하고 배열에 추가
    let body = new Body(random(width), random(height));
    bodies.push(body);
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }

  for (let i = 0; i < bodies.length; i++) {
    let body = bodies[i];
    body.applyForce(gravity); // 중력 적용
    body.update();
    body.display();
    body.displayVectors();
  }
}
