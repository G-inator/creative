function setup() { 
  createCanvas(640,360);
} 

function draw() { 
	background(255);
  
  //arco del triangulo
  fill(0, 0, 255)
  arc(250,150,80,80,0,-HALF_PI, OPEN);
  
  //triangulo
  fill(0, 250, 0)
	triangle(290,150,250,110,290,110);
  
  //circulo de abajo
  fill(255, 0, 0)
	ellipse(193,207,80,80);
}