class Vehicle {
  constructor(
    x,
    y,
    mass,
    rad,
    speedMx,
    forceMx,
    color // 비이클 클래스의 생성자 정의하기 // 초기 위치 //  질량 //  반지름 //  비이클이 가질 수 있는 최대속도 // 비이클이 받을 수 있는 최대 힘 / 색상
  ) {
    this.pos = createVector(x, y);
    // 비이클의 초기 위치
    this.vel = p5.Vector.random2D();
    // 비이클의 속도
    // 랜덤함수를 사용해 무작위 방향으로 이동하도록 한다
    this.acc = createVector();
    // 비이클의 가속도/초기에는 아무런 가속도가 없음으로 비어있다
    this.mass = mass;
    // 비이클의 질량
    this.rad = rad;
    // 비이클의 반지름
    this.speedMx = speedMx;
    // 최대속도/이 값으로 움직임을 제한 가능
    this.forceMx = forceMx;
    // 비이클이 받을 수 있는 최대 힘
    this.neighborhooodRad = 50;
    // 비이클이 주변 개체들과 관계맺을 수 있는 반경
    // 값은 50으로 설정, 이 반경내의 다른 개체들과 상호작용
    this.color = color;
    // 색상
  }

  // cohesion - 개체가 주변이웃과 합쳐져 그룹 내에서 함께 이동하도록 하는 동작을 구현
  cohesion(others) {
    let cnt = 0;
    // 이웃 비이클의 수를 세는 변수/초기값 0
    const steer = createVector(0, 0);
    // 비이클이 따를 목표 위치

    others.forEach((each) => {
      // others 배열 내의 각 다른 차량(each)에 대해 반복
      if (each !== this) {
        // 현재 비이클이 자기 자신이 아닌경우에만 동작수행
        const distSq =
          // 두점 사이의 거리를 계산하는 식
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 현재 개체와 이웃 개체 사이의 거리의 제곱을 계산/개체와 개체간의 거리 측정
        if (distSq < this.neighborhooodRad ** 2) {
          // 거리의 제곱이 neighborhooodRad의 제곱보다 작은 경우에 작동
          steer.add(each.pos);
          // steer에 이웃 비이클의 위치를 더한다
          // 현재 개체가 이웃 비이클의 위치를 따가게됨
          cnt++;
          // 이웃 개체의 수 증가시키기
        }
      }
    });

    if (cnt > 0) {
      // 이웃 비이클 개체가 하나 이상이면 수행
      steer.div(cnt);
      // 백터를 이웃 비이클 수로 나누어 평균 위치 계산
      steer.sub(this.pos);
      // 평균 위치에서 현재 비이클의 위치를 뺀다
      // 이유 모르겠음
      steer.setMag(this.speedMx);
      // 속도를 제한한다
      steer.sub(this.vel);
      // 벡터에서 비이클의 현재 속도를 뺀다
      // 현재 속도를 유지하려고 한다
      steer.limit(this.forceMx);
      // 최대힘을 제한한다
    }
    return steer;
    // 설정한 steer 백터를 반환하여 cohesion 매서드에서 사용되도록 한다
  }

  align(others) {
    // 비이클이 이웃 개체와 속도를 조절하여 함께 이동하도록 한다
    let cnt = 0;
    const steer = createVector(0, 0);
    // 비이클이 따를 목표 속도, 초기값은 0,0이다
    others.forEach((each) => {
      if (each !== this) {
        // 현재 처리중인 비이클이 자기 자신이 아닌 경우에만 실행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 현재 비이클과 이웃 비이클 사이의 거리의 제곱 계산
        if (distSq < this.neighborhooodRad ** 2) {
          // 거리의 제곱이 이웃 반경의 제곱보다 작은 경우에만 실행
          steer.add(each.vel);
          // steer에 이웃 비이클의 속도를 더함
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      // 이웃 비이클이 하나 이상 있을 때 실행
      steer.div(cnt);
      // steer를 이웃 비이클의 수 cnt 로 나누어, 평균 속도 계산
      steer.setMag(this.speedMx);
      // steer의 크기를 괄호로 설정, 비이클이 향하는 최종 속도 제한
      steer.sub(this.vel);
      // 비이클의 현재 속도를 빼서, 비이클이 이미 가지고 있는 속도와의 차이 계산
      // 부드럽게 조율하는 역할
      steer.limit(this.forceMx);
      // 비이클 최대 힘 제한
    }
    return steer;
    // steer 를 반환한다
  }

  separate(others) {
    // 다른 비이클들과 충돌을 피하기 위한 메서드
    let cnt = 0;
    // 충돌을 피할 다른 비이클 변수
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        // 현재 처리중인 비이클이 자기 자신이 아닌 경우 수행
        const dist = this.pos.dist(each.pos);
        // 현재 비이클과 다른 비이클간의 거리 계산
        if (dist > 0 && this.rad + each.rad > dist) {
          // 거리가 0보다 크고 두 비이클의 반지름 합보다 작은 경우 수행
          const distNormal = dist / (this.rad + each.rad);
          // dist 를 두 비이클 반지름 합으로 나눈다
          // 충돌 방향을 결정하는 거리 값 계산을 위한-
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          // 현재 개체에서 다른 개체로 향하는 벡터 계산
          // 충돌 방향
          towardMeVec.setMag(1 / distNormal);
          // 벡터의 크기를 disnormal로 설정/충돌 방향 정규화
          // 진짜 모르겠음 이거
          steer.add(towardMeVec);
          // steer에 최종 충돌을 피하기 위한 방향 추가
          cnt++;
          // <충돌을 피할 다른 비이클> 수 증가
        }
      }
    });
    if (cnt > 0) {
      // <충돌을 피할 다른 비이클>이 하나 이상 있을 경우
      steer.div(cnt);
      // 충돌 방향의 평균 방향으로 나누기
      steer.setMag(this.speedMx);
      // 속도 제한
      steer.sub(this.vel);
      // steer에서 현재 비이클의 속도를 뺀다
      // 이미 가지고 있던 속도와의 차이 계산
      steer.limit(this.forceMx);
      // 최대 힘 제한
    }
    return steer;
    // steer 벡터 반환
  }

  applyForce(force) {
    // 힘을 적용하는 메서드
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    // 힘을 질량으로 나눈 벡터를 계산
    this.acc.add(forceDivedByMass);
    // 나누어진 힘을 가속도에 추가
  }

  update() {
    // 위치, 속도, 가속도 업데이트 메서드
    this.vel.add(this.acc);
    // 속도에 가속도를 추가
    this.vel.limit(this.speedMx);
    // 속도를 최대 속도로 제한
    this.pos.add(this.vel);
    // 위치를 현재 속도에 따라 업데이트 / 위치 더하기 속도
    this.acc.mult(0);
    // 가속도를 초기화
  }

  borderInfinite() {
    // 화면 경계 처리 메서드
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    }

    // 만약 비이클의 x좌표가 화면 왼쪽 경계보다 작을 경우
    // 비이클을 오른쪽 경계로 이동시킨다

    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }

    // 위쪽과 아래쪽 경계 넘어갈 때 처리
  }

  display() {
    // 비이클을 그리는 메서드
    push();
    translate(this.pos.x, this.pos.y);
    // 현재 위치로 이동
    rotate(this.vel.heading());
    // 비이클의 방향을 현재 속도의 방향으로 회전
    noStroke();
    // 선 없이
    fill(this.color);
    // this.color 색상
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);

    // 다각형 그리기/vertex로 다양한 꼭지점을 추가한다
    pop();
  }
}

class Traffic {
  constructor() {
    // 비이클 배열 초기화
    this.vehicles = [];
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      // 비이클 내의 반복문 실행
      const separate = eachVehicle.separate(this.vehicles);
      separate.mult(1);
      eachVehicle.applyForce(separate);
      // 분리 동작을 계산한다, eachVehicle이 다른 개체로부터 일정 거리 이상 멀어지도록 하는 동작
      // 분리동작의 세기는 1로 지정

      const align = eachVehicle.align(this.vehicles);
      align.mult(0.5);
      eachVehicle.applyForce(align);
      // 이웃 개체간의 일치 동작 계산
      // 비이클이 이웃 개체와 비슷한 속도를 가지도록 함

      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5);
      eachVehicle.applyForce(cohesion);
      // 응집 동작 계산
      // 비이클이 이웃 개체들의 평균 위치 쪽으로 이동하게 함

      // applyForce로 힘을 적용한다

      eachVehicle.update();
      // 속도 및 가속도 부여, 업데이트
      eachVehicle.borderInfinite();
      // 화면 경계 넘어갈 때의 동작처리
      eachVehicle.display();
      // 화면에 그리기
    });
  }

  addVehicle(x, y) {
    // 새로운 개체를 비이클에 추가
    const mass = 0.7;
    // 새로운 개체의 질량/고정
    this.vehicles.push(
      // 새로운 비이클 개체 push 추가
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
      // 좌표, 질량, 반지름은 질량값의 12배, 최대속도5, 최대힘0.1, 채도와 밝기를 100,40설정, 색상 무작위
    );
  }
}
