class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 2); // 일자로 아래로 떨어지는 초기 속도
    this.size = 20; // 사각형의 크기
  }

  update() {
    this.pos.add(this.vel);

    if (this.pos.y > height) {
      this.pos.y = height; // 땅에 도달하면 위치를 땅 높이로 설정
      this.vel.mult(0); // 속도를 0으로 만들어 멈춤
    }
  }

  display() {
    rectMode(CENTER);
    fill(0);
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }

  //   applyForce(force) {
  //     this.acc.set(force);
  //   }

  //   //   update() {
  //   //     this.vel.add(this.acc);
  //   //     this.pos.add(this.vel);
  //   //     this.acc.mult(0);
  //   //     this.lifeSpan -= 0;
  //   //   }

  //   //   display() {
  //   //     stroke(0, this.lifeSpan);
  //   //     fill(127, this.lifeSpan);
  //   //     square(this.pos.x, this.pos.y, this.rad * 2);
  //   //   }

  //   isDead() {
  //     return this.lifeSpan < 0;
  //   }
}
