let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  let dom = select('#here');
  htmlDom = document.querySelector('#here');
  //   console.log('p5 select', dom);
  //   console.log('queryselect', htmlDom);
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {
  console.log('리사이즈됩니다 ~');
  //   dom = select('#here');
  //   console.log(dom);

  if (htmlDom.clientWidth < canvasW) {
    resizeCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
