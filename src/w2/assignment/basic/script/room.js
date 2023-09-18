function setup() {
  setCanvasContainer('canvas-goes-here', 960, 680, true);
  background('white');
}

function draw() {
  background(255);
  noStroke();
  colorMode(HSL);
  rectMode(CORNER);

  //   백그라운드
  fill('#543e3e');
  //rect(0, 0, 1000, 700);
  rect(0, 0, width / 0.96, height / 0.971);
  fill('#7d5959');
  rect(0, 0, 1000, 500);
  fill('#2b1d1d');
  rect(0, 500, 1000, 12);

  rectMode(CENTER);

  // 큰액자
  fill('#382b2b');
  rect(width / 3.4288, height / 3.777, width / 4.173, height / 2.72);
  fill('#fffff');
  rect(280, 180, 215, 235);
  fill('#b29b7f');
  rect(280, 180, 160, 175);
  fill('#ffca82');
  rect(280, 180, 155, 170);
  fill('#ff9343');
  ellipse(300, 200, 85, 85);
  fill('#ff9343');
  ellipse(240, 130, 50, 50);
  fill('#ffffff88');
  rect(260, 190, 50, 20);

  // 엽서
  fill('#382b2b');
  rect(650, 100, 90, 110);
  fill('#ffffff');
  rect(650, 100, 80, 100);
  fill('#b29b7f');
  rect(650, 100, 65, 85);
  fill('#ffca82');
  rect(650, 100, 60, 80);

  // 시계
  rect(650, 100, 60, 80);
  fill('#382b2b');
  ellipse(780, 150, 70, 70);
  fill('#ffffff');
  ellipse(780, 150, 60, 60);
  fill('#ffca82');
  ellipse(780, 150, 50, 50);

  // 책
  fill('#c0aeaf');
  rect(670, 260, 12, 65);
  fill('#c0aeaf');
  rect(685, 260, 12, 65);
  fill('#c0aeaf');
  rect(700, 260, 12, 65);

  // 선반
  fill('#382b2b');
  rect(700, 290, 140, 8);

  // 소파 뒤
  fill('#543e3e');
  rect(500, 480, 380, 150);

  // 소파 몸통
  fill('#d9c9c9');
  rect(500, 530, 380, 66, 10, 10, 0, 0);

  // 소파 헤드
  fill('#c0aeaf');
  rect(403, 442, 187, 100, 20, 10, 0);
  fill('#c0aeaf');
  rect(597, 442, 187, 100, 10, 20, 0, 0);

  // 소파 그림자
  fill('#382b2b');
  ellipse(500, 590, 500, 20);

  // 소파다리
  fill('#8a7476');
  rect(670, 576, 30, 20, 4, 4, 4, 4);
  fill('#8a7476');
  rect(330, 576, 30, 20, 4, 4, 4, 4);

  // 소파바닥
  fill('#a89597');
  rect(500, 560, 380, 23);

  // 소파옆구리
  fill('#b2a3a4');
  rect(275, 517, 70, 110, 10, 10, 0, 0);
  fill('#b2a3a4');
  rect(725, 517, 70, 110, 10, 10, 0, 0);
  fill('#ffffff66');
  rect(275, 567, 70, 10);
  fill('#ffffff66');
  rect(725, 567, 70, 10);

  // 조명 빛
  fill('#ffd400');
  ellipse(500, 180, 20, 20);
  fill('#ffd40066');
  ellipse(500, 180, 40, 40);
  fill('#ffd40055');
  ellipse(500, 180, 60, 60);
  fill('#ffd40044');
  ellipse(500, 180, 80, 80);
  fill('#ffd40033');
  ellipse(500, 180, 100, 100);
  fill('#ffd40022');
  ellipse(500, 180, 120, 120);
  fill('#ffd40011');
  ellipse(500, 180, 140, 140);

  // 조명 몸체
  fill('#2b1d1d');
  rect(500, 0, 4, 300);
  fill('#2b1d1d');
  rect(500, 150, 40, 60, 20, 20, 0, 0);
}
