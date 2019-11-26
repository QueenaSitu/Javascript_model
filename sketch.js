// establishing variable called "hand"
var hand;

// preloading obj file before setup starts
function preload() {
  
// set parameter to be true so it scales properly in WEBGL
  hand = loadModel('ok_hand.obj', true);
}

// making canvas full browser size and establishing that this is a 3D canvas by stating WEBGL
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

// I followed all the tutorials in this playlist from the Coding Train on YouTube. https://www.youtube.com/watch?v=nqiKWXUX-o8&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_
// I only followed along on how to use WEBGL and p5.js together. Assets and idea are original to me. The idea is to rotate the object until you see a recognizable form. I was inspired by a video game I played where a puzzle involved turning and rotating a wooden object until the shadow from the object was an eagle. 

function draw() {
  background(0);
  
// setting point lights for aesthetic purposes, and to of course be able to see the model
// pointlight (r, g, b, x, y, z)
  
  pointLight(255, 0, 0, 300, 0, 0);
  pointLight(0, 0, 255, -300, 0, 0);
  pointLight(0, 255, 0, 0, -300, 0);

// code for the camera. There are 2 cameras; one on the x-axis and the other on the y-axis
  let camX = map(mouseX, 0, width, -400, 1000);
  let camY = map(mouseY, 0, height, 400, -600);
  
// this is pretty much default camera settings, with the exception of camX in x value position, camY in y value position. Got this from the Coding Train as well
  camera(camX, camY, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0);

// isolating the model rotation
  push();
  
// only made the 3D model a bit bigger 
  scale(2.1);

  noStroke();
//  model rotates only around x and y axis based on mouse position
  rotateX(pmouseY/80);
  rotateY(pmouseX/80);
//  specular material for shiny look
  specularMaterial(100);
// establishing the object that is supposed to show
  model(hand);

  pop();

// isolating plane to make a floor
  push();
  noStroke();
  translate(0, 400, 0);
  rotateX(HALF_PI);
  plane(1000, 1000);
  ambientMaterial(255);
  pop();
// isolating plane to make a wall
  push();
  noStroke();
  translate(0, -100, -500);
  rotateZ(HALF_PI);
  plane(1000, 1000);
  ambientMaterial(255);
  pop();
// isolating plane to make the other wall
  push();
  noStroke();
  translate(-500, -100, 0);
  rotateY(HALF_PI);
  plane(1000, 1000);
  ambientMaterial(255);
  pop();
 
}


