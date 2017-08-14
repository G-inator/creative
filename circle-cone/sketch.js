var bg = 255;
var triangleArcColor;
var triangleColor;
var bottomCircleColor;

var triangleArcX = 250;
var triangleArcY = 150;
var triangleArcD = 80;
var triangleArcStart = 0;
var triangleArcStop;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  triangleArcColor = color(0, 0, 255);
  triangleColor = color(0, 250, 0);
  bottomCircleColor = color(255, 0, 0);
  triangleArcStop = -HALF_PI;
} 

function draw() { 
	background(bg);
  
  //arco del triangulo
  fill(triangleArcColor);
  arc(triangleArcX, triangleArcY,
      triangleArcD, triangleArcD,
      0, triangleArcStop, OPEN);
  
  //triangulo
  fill(triangleColor);
  var r = triangleArcD/2
  var x1 = triangleArcX + r;
  var y1 = triangleArcY;
  var x2 = triangleArcX;
  var y2 = triangleArcY - r;
  var x3 = x1;
  var y3 = y2;
  triangle(x1, y1, x2, y2, x3, y3);
  
  //circulo de abajo
  fill(bottomCircleColor);
  var x = triangleArcX - triangleArcD * cos(HALF_PI/2);
  var y = triangleArcY + triangleArcD * sin(HALF_PI/2);
	ellipse(x, y,
          triangleArcD, triangleArcD);
}
