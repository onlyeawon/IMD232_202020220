class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.rad = 8;
    this.lifeSpan = 780;
    this.angleSpeed = random(-0.3, 0.3);
    this.angle = 0;
    this.color = color(random(360), 100, 100, 100);
  }

  applyForce(gravity) {
    this.acc.add(gravity);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 2;
    this.angle += this.angleSpeed; // 각도를 갱신
  }

  display() {
    noStroke();
    fill(this.color);
    push(); // 현재 그래픽 상태를 저장
    translate(this.pos.x, this.pos.y); // 입자의 위치로 이동
    rotate(this.angle); // 현재 각도로 회전
    rectMode(CENTER);
    square(0, 0, this.rad * 2); // 중심을 중심으로 사각형 그리기
    pop(); // 이전 그래픽 상태로 복원
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
