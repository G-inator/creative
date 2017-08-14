var color1;
var color2;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  changeColors();
} 

function draw() { 
  stroke(0, 100);
  fill(color1);
  ellipse(width/2, height/2, mouseX/2, mouseY);
  fill(color2);
  ellipse(width/2, height/2, mouseY, mouseX/2);
}


function mousePressed() {
  //background(51);
  changeColors();
}


function getRandomColor() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var a = 10;
  return color(r, g, b, a);
}


function changeColors() {
  color1 = getRandomColor();
  color2 = getRandomColor();
}