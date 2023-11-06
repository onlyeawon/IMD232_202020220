let traffic; // 트래픽 변수 선언
let infiniteOffset = 80; // infiniteOffset 변수 선언

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  // 그림을 그릴 캔버스를 설정, 내가 설정한 id 입력, 캔버스 크기 비율, 배경은 투명하게
  colorMode(HSL, 360, 100, 100, 100);
  // 컬러모드를 hsl로 변경 / 색상, 채도,밝기,투명도
  background('white');
  // 배경색상 설정

  traffic = new Traffic();
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  }

  // 트래픽 변수는 트래픽 클래스의 인스턴스를 생성한다
  // for 구문을 사용해서 10번 반복한다
  // 각 반복에서 랜덤 함수를 사용하여 addVehicle이 무작위의 장소에 생성되도록한다.
}

function draw() {
  background('white');
  // 배경색상 흰색
  traffic.run();
  // 트래픽 클래스의 run을 호출하여 개체들을 업데이트하고 화면에 표시한다.
  // 스케치가 반복적으로 실행되는 함수로, 화면의 내용을 지우고 다시 그린다.
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
  // 마우스가 드래그 될 때 호출되는 mouseDragged 함수
  // 마우스를 드래그 할 때 새로운 개체가 마우스 위치에서 생성되도록 한다.
}
