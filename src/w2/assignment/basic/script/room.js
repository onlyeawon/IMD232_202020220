function setup() {
  setCanvasContainer('canvas-goes-here', 7, 5, true);
  background('white');
}

function draw() {
  background(255);
  noStroke();
  colorMode(HSL);
  rectMode(CORNER);

  //   백그라운드
  fill('#543e3e');
  rect(0, 0, 1000, 700);
  fill('#7d5959');
  rect(0, 0, 1000, 500);
  fill('#2b1d1d');
  rect(0, 500, 1000, 12);

  //   창문
  rectMode(CENTER);
  // fill('#626670');
  // rect(220, 332, 240, 8);
  // fill('#626670');
  // rect(220, 200, 240, 260);
  // fill('#009630');
  // rect(220, 200, 200, 220);
  // fill('#b0ccdf');
  // rect(220, 164, 200, 150);
  // fill('#626670');
  // rect(220, 200, 240, 10);
  // fill('#626670');
  // rect(220, 200, 10, 240);

  // // 커튼봉
  // fill('#555754');
  // rect(220, 100, 270, 6);
  // fill('#555754');
  // ellipse(80, 100, 15, 15);
  // fill('#555754');
  // ellipse(360, 100, 15, 15);
  // // 커튼
  // fill('#ffffff88');
  // rect(132, 220, 80, 280);
  // fill('#ffffff88');
  // rect(310, 220, 80, 280);

  // 큰액자
  fill('#382b2b');
  rect(300, 180, 230, 250);
  fill('#fffff');
  rect(300, 180, 215, 235);
  fill('#ffca82');
  rect(300, 180, 155, 170);
  fill('#feaf6d');
  ellipse(320, 200, 85, 85);
  fill('#feaf6d');
  ellipse(260, 130, 50, 50);
  fill('#ffffff88');
  rect(280, 190, 50, 20);

  // 엽서
  fill('#382b2b');
  rect(650, 100, 90, 110);
  fill('#ffffff');
  rect(650, 100, 80, 100);
  fill('#ffca82');
  rect(650, 130, 20, 20);

  // 시계
  rect(650, 100, 60, 80);
  fill('#382b2b');
  ellipse(780, 150, 70, 70);
  fill('#ffffff');
  ellipse(780, 150, 60, 60);
  fill('#ffca82');
  ellipse(780, 150, 50, 50);

  // 선반
  fill('#c0aeaf');
  rect(670, 260, 12, 65);
  fill('#c0aeaf');
  rect(685, 260, 12, 65);
  fill('#c0aeaf');
  rect(700, 260, 12, 65);
  fill('#382b2b');
  rect(700, 290, 140, 8);

  //   소파
  fill('#543e3e');
  rect(500, 480, 380, 150);
  fill('#d9c9c9');
  rect(500, 530, 380, 66, 10, 10, 0, 0);
  // 소파 몸통
  fill('#c0aeaf');
  rect(403, 442, 187, 100, 10, 10, 0);
  fill('#c0aeaf');
  rect(597, 442, 187, 100, 10, 10, 0, 0);
  // 헤드

  fill('#382b2b');
  ellipse(500, 587, 500, 10);
  // 소파 그림자

  fill('#8a7476');
  rect(670, 576, 30, 20, 4, 4, 4, 4);
  fill('#8a7476');
  rect(330, 576, 30, 20, 4, 4, 4, 4);
  // 소파다리
  fill('#a89597');
  rect(500, 560, 380, 23);
  // 소파바닥
  fill('#c0aeaf');
  rect(275, 517, 70, 110, 10, 10, 0, 0);
  fill('#c0aeaf');
  rect(725, 517, 70, 110, 10, 10, 0, 0);
  fill('#ffffff66');
  rect(275, 567, 70, 10);
  fill('#ffffff66');
  rect(725, 567, 70, 10);
  // 소파옆구리

  // 조명

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
  fill('#2b1d1d');
  rect(500, 0, 4, 300);
  fill('#2b1d1d');
  rect(500, 150, 40, 60, 20, 20, 0, 0);

  // fill('#8a7476');
  // arc(500, 160, 70, 65, 0, Math.PI);

  // 과자
  // fill('#f44336');
  // arc(550, 466, 70, 65, 0, HALF_PI + PI - HALF_PI);
  // fill('#ef9a9a');
  // rect(550, 463, 80, 6, 50, 50, 50, 50);
}
