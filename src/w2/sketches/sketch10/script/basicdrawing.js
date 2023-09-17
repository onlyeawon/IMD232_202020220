function setup() {
  setCanvasContainer('canvas-goes-here', 3, 2, true);
  background('white');
}

function draw() {
  background(255);
  fill('white');
  stroke(0);
  strokeWeight(1);

  rectMode(CORNER);
  //   원은 중앙중심으로 그려지고, 사각형은 왼쪽을 중심으로 그려짐
  rect(50, 100, 60, 30);
  ellipse(100, 100, 40);
  rect(200, 100, 50, 50);
  ellipse(200, 100, 50, 50);

  rectMode(CENTER);
  //   센터설정을 통해 중심부터 그림이 그려진다
  fill('#ff7733');
  rect(300, 100, 50, 50);
  ellipse(300, 100, 50, 50);
  fill('#ccffcc');
  colorMode(HSL);
  fill(120, 100, 50);

  noStroke();
  circle(200, 200, 50);
  square(550, 200, 200);

  rect(100, 300, 50, 50, 10, 0, 0, 0);

  stroke(0);
  line(200, 400, 250, 400);
  stroke('salmon');
  strokeWeight(5);
  line(250, 400, 250, 450);
  stroke('salmon');
  strokeWeight(5);
  line(250, 450, 200, 400);

  stroke(50, 100, 10);
  strokeWeight(2);
  point(300, 400);
  point(310, 400);
  point(320, 400);
  point(330, 400);
  point(340, 400);
  point(350, 400);
  stroke(50, 100, 20);
  strokeWeight(3);
  point(300, 410);
  point(310, 410);
  point(320, 410);
  point(330, 410);
  point(340, 410);
  point(350, 410);
  stroke(50, 100, 30);
  strokeWeight(4);
  point(300, 420);
  point(310, 420);
  point(320, 420);
  point(330, 420);
  point(340, 420);
  point(350, 420);
  stroke(50, 100, 40);
  strokeWeight(5);
  point(300, 430);
  point(310, 430);
  point(320, 430);
  point(330, 430);
  point(340, 430);
  point(350, 430);
  stroke(50, 100, 50);
  strokeWeight(6);
  point(300, 440);
  point(310, 440);
  point(320, 440);
  point(330, 440);
  point(340, 440);
  point(350, 440);
  stroke(50, 100, 60);
  strokeWeight(7);
  point(300, 450);
  point(310, 450);
  point(320, 450);
  point(330, 450);
  point(340, 450);
  point(350, 450);
}
