let Vehicle;
let mVec;
let debug = ture;

function setup() {
  setCanvasContainer('mysketch', 3, 2, true);

  colorMode(HSL, 360, 100, 100, 100);

  vehicle = new Vehicle(width / 2, height / 2, 16, 5, 0.1, color(330, 100, 50));
  mVec = createVector();

  colorMode(RGB, 255, 255, 255);
  background(255);
}

function draw() {
  mVec.set(mouseX, mouseY);
  vehicle.update();

  background(255);
  vehicle.display();
}
