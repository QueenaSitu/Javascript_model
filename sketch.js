var angle=0;
var hand;

function preload() {
 hand = loadModel ('assets/ ok_hand.obj'); 
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  scale(0.5);
  
  let camX =  map(mouseX, 0, width, -500, 1000);
  let camY = map(mouseY, 0, height, 500, -600);
  camera (camX, camY, (height/2)/tan(PI/6), 0, 0, 0, 0, 1, 0);
  
  	push();

	// noStroke();
	  	// fill(0, 255, 0);
	  	// translate (0, 0, 300);
	  	rotateX(angle* 0.2);
	  	rotateY(angle * 0.2);
	  	rotateZ(angle * 0.2);
		// rect(0, 0, 250, 250);
		// torus(100, 50);
		normalMaterial();
	  	model(hand);

  	pop();
  
	push();
	// noStroke();
 		translate (0, 400, 0);
 		rotateX(HALF_PI);
  		fill (175);
  		plane(1000, 1000);
	pop();

	push();
	// noStroke();
		translate (0, -100, -500);
		rotateZ(HALF_PI);
		fill(175);
		plane(1000, 1000); 

	pop();
  
  	push();
	// noStroke();
		translate (-500, -100, 0);
		rotateY(HALF_PI);
		fill(175);
		plane(1000, 1000); 

	pop();

  	angle+= 0.08;

  
  
  
// // accelerometer Data
// window.addEventListener('devicemotion', function(e) 
// {
// //   // get accelerometer values
//   x = parseInt(e.accelerationIncludingGravity.x);
//   y = parseInt(e.accelerationIncludingGravity.y);
//   z = parseInt(e.accelerationIncludingGravity.z); 
// });
}