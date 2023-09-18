function setup() {
  setCanvasContainer('canvas-goes-here', 7, 5, true);
  background('white');
}

function test() {
  var canvas = document.getElementById('canvas-goes-here');
  var c = canvas.getContext('2d');
  c.globalAlpha = 0.3;
}

function draw() {
  background(255);
  noStroke();
  colorMode(HSL);
  rectMode(CORNER);

  //   백그라운드
  fill('#97999b');
  rect(0, 0, 1000, 700);
  fill('#828480');
  rect(0, 0, 1000, 500);
  fill('#555754');
  rect(0, 500, 1000, 12);

  //   창문
  rectMode(CENTER);
  fill('#555754');
  rect(220, 332, 240, 8);
  fill('#a7a8a5');
  rect(220, 200, 240, 260);
  fill('#009630');
  rect(220, 200, 200, 220);
  fill('#54219e');
  rect(220, 164, 200, 150);
  fill('#a7a8a5');
  rect(220, 200, 240, 10);
  fill('#a7a8a5');
  rect(220, 200, 10, 240);

  // // 커튼봉
  // fill('#555754');
  // rect(220, 100, 270, 6);
  // fill('#555754');
  // ellipse(60, 100, 15, 15);
  // fill('#555754');
  // ellipse(340, 100, 15, 15);

  // // 커튼
  // fill('#ffffff');
  // rect(100, 210, 80, 290);

  // 엽서
  fill('#a7a8a5');
  rect(650, 100, 90, 110);
  fill('#ffd400');
  rect(650, 100, 70, 90);
  fill('#a7a8a5');
  rect(780, 150, 90, 60);
  fill('#ffd400');
  rect(780, 150, 75, 45);

  // 선반
  fill('#555754');
  rect(680, 260, 15, 72);
  fill('#555754');
  rect(699, 260, 15, 72);
  fill('#555754');
  rect(718, 270, 15, 60);
  fill('#555754');
  rect(738, 260, 15, 72);
  fill('#202120');
  rect(730, 300, 160, 10);

  //   소파
  fill('#757575');
  rect(500, 480, 380, 150);
  fill('#d4d4d4');
  rect(500, 530, 380, 66, 10, 10, 0, 0);
  // 소파 몸통
  fill('#c0c0c0');
  rect(403, 442, 187, 100, 10, 10, 0);
  fill('#c0c0c0');
  rect(597, 442, 187, 100, 10, 10, 0, 0);
  // 헤드

  fill('#808080');
  ellipse(500, 587, 500, 10);
  // 소파 그림자

  fill('#4c443d');
  rect(670, 576, 30, 20, 4, 4, 4, 4);
  fill('#4c443d');
  rect(330, 576, 30, 20, 4, 4, 4, 4);
  // 소파다리
  fill('#757575');
  rect(500, 560, 380, 23);
  // 소파바닥
  fill('#c0c0c0');
  rect(275, 517, 70, 110, 10, 10, 0, 0);
  fill('#c0c0c0');
  rect(725, 517, 70, 110, 10, 10, 0, 0);
  fill('#757575');
  rect(275, 567, 70, 10);
  fill('#757575');
  rect(725, 567, 70, 10);
  // 소파옆구리

  // 조명
  fill('#000000');
  rect(500, 0, 6, 590);
  fill('#ffd400');
  ellipse(500, 295, 30, 30);
  fill('#000000');
  rect(500, 245, 50, 100);

  // 과자
  fill('#f44336');
  arc(550, 466, 70, 65, 0, HALF_PI + PI - HALF_PI);
  fill('#ef9a9a');
  rect(550, 463, 80, 6, 50, 50, 50, 50);
}
