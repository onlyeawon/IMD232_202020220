const stripeNum = 8;
const stripeNum2 = 8;
const stripeBegin = 15;
const stripeGap = 30;

function setup() {
  setCanvasContainer('mysketch', 1, 1, true);

  background(255);
}
function draw() {
  background(255);

  noStroke();

  rectMode(CENTER);
  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      fill((255 / stripeNum) * a, (255 / stripeNum2) * b, 255);
      let x = ((a + 1) * width) / (stripeNum + 1);
      let y = ((b + 1) * height) / (stripeNum2 + 1);

      ellipse(x, y, 50);
    }
  }
}
