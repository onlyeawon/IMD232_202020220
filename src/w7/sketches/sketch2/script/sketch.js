// let vehicle;
let traffic;
// let mVec;
let debug = true;

function setup() {
  setCanvasContainer('mysketch', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);

  traffic = new Traffic();

  for (let n = 0; n < 20; n++) {
    traffic.addVehicle(random(width), random(height));
  }

  // vehicle = new Vehicle(width / 2, height / 2, 16, 5, 0.1, color(330, 100, 50));
  // mVec = createVector();
  background(0, 100, 100);
}

function draw() {
  background(255);
  traffic.run();
  // mVec.set(mouseX, mouseY);
  // vehicle.seek(mVec);
  // vehicle.update();
  // vehicle.display();
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}
