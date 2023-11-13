const {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Common,
  Constraint,
  MouseConstraint,
  Mouse,
  Vertices,
  Svg,
  Bodies,
} = Matter;

Common.setDecomp(decomp);

// create engine
const engine = Engine.create(),
  world = engine.world;

// create runner
const runner = Runner.create();

const oWidth = 800;
const oHeight = 600;

let ropeA;
let ropeB;
let ropeC;

let m;
let mc;

const A = [];
const C = [];

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

  for (let i = 0; i < 10; i++) {
    A[i] = random(100, 200);
    C[i] = random(200, 300);
  }

  // add bodies
  group = Body.nextGroup(true);

  ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, 50, 20, {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x - 20, y, 50, 20, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });

  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  m = Mouse.create(document.querySelector('.p5Canvas'));
  m.pixelRatio = (pixelDensity() * width) / oWidth;
  mc = MouseConstraint.create(engine, {
    mouse: m,
    constraint: {
      stiffness: 0.2,
    },
  });

  background('white');
  Composite.add(world, mc);

  Runner.run(runner, engine);
}

const vertices = [
  { x: 5.5 * 4, y: -4.8 * 4 },
  { x: 7.6 * 4, y: -1.6 * 4 },
  { x: 6.5 * 4, y: 1.8 * 4 },
  { x: 2.7 * 4, y: 4.5 * 4 },
  { x: -1.2 * 4, y: 4.2 * 4 },
  { x: -3.6 * 4, y: 1.9 * 4 },
  { x: -1.3 * 4, y: -2.8 * 4 },
];

function draw() {
  background('white');
  rectMode(CENTER);
  noStroke();

  // ropeA에 도형 그리기
  fill(255, 51, 0);
  for (let i = 0; i < ropeA.bodies.length; i++) {
    const pos = ropeA.bodies[i].position;
    const angle = ropeA.bodies[i].angle;
    push();
    beginShape();
    translate(pos.x, pos.y);
    rotate(angle);
    vertices.forEach((each) => {
      vertex(each.x, each.y);
    });
    endShape(CLOSE);
    pop();
  }

  // ropeB에 도형 그리기
  fill(102, 102, 255);
  for (let i = 0; i < ropeB.bodies.length; i++) {
    const pos = ropeB.bodies[i].position;
    circle(pos.x, pos.y, width / 25);
  }

  // ropeC에 도형 그리기
  fill(0, 204, 51);
  for (let i = 0; i < ropeC.bodies.length; i++) {
    const pos = ropeC.bodies[i].position;
    const angle = ropeC.bodies[i].angle;
    push();
    beginShape();
    translate(pos.x, pos.y);
    rotate(angle);
    vertices.forEach((each) => {
      vertex(each.x, each.y);
    });
    endShape(CLOSE);
    pop();
  }
}
