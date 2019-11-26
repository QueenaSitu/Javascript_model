var x, y, z;
var xpos, ypos;
var angle = 0;
let hand;

function preload() {
  hand = loadModel('ok_hand.obj', true);
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  pointLight(255, 0, 0, 300, 0, 0);
  pointLight(0, 0, 255, -300, 0, 0);
  pointLight(0, 255, 0, 0, -300, 0);

  let camX = map(mouseX, 0, width, -500, 1000);
  let camY = map(mouseY, 0, height, 500, -600);
  camera(camX, camY, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0);

  push();
  scale(2.5);

  noStroke();
  // fill(0, 255, 0);
  // translate (0, 0, 300);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  // rect(0, 0, 250, 250);
  // torus(100, 50);
  specularMaterial(255);
  model(hand);

  pop();

  push();
  noStroke();
  translate(0, 400, 0);
  rotateX(HALF_PI);
  plane(1000, 1000);
  ambientMaterial(175);
  pop();

  push();
  noStroke();
  translate(0, -100, -500);
  rotateZ(HALF_PI);
  plane(1000, 1000);
  ambientMaterial(175);
  pop();

  push();
  noStroke();
  translate(-500, -100, 0);
  rotateY(HALF_PI);
  plane(1000, 1000);
  ambientMaterial(175);
  pop();

  angle += 0.012;




  // accelerometer Data
  window.addEventListener('devicemotion', function(e) 
  {
  //   // get accelerometer values
    x = parseInt(e.accelerationIncludingGravity.x);
    y = parseInt(e.accelerationIncludingGravity.y);
    z = parseInt(e.accelerationIncludingGravity.z); 
  });
}