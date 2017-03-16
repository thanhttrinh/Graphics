/*
 * Name: Thanh Trinh
 * CSC 2463 Graphics Assignment 2
 */

var strokeColor;
function setup() {
	createCanvas(640,360);
	
	stroke(255);
	strokeWeight(1);
	fill(255,0,0); //red
	rect(0,0,20,20);
	fill(255,150,0); //orange
	rect(0,20,20,20);
	fill(255,255,0); //yellow
	rect(0,40,20,20);
	fill(0,255,0); //green
	rect(0,60,20,20);
	fill(0,255,255); //cyan
 	rect(0,80,20,20);  
	fill(0,0,255); //blue
  	rect(0,100,20,20);
  	fill(255,0,255); //magenta
  	rect(0,120,20,20);
  	fill(125,75,0); //brown
  	rect(0,140,20,20);
  	fill(255,255,255); //white
  	rect(0,160,20,20);
  	fill(0,0,0); //black
  	rect(0,180,20,20);
}

function mousePressed() {
	if(mouseX <= 20 && mouseY <= 20) {
		strokeColor = stroke(255,0,0);
	}
	if(mouseX <= 20 && (mouseY > 20 && mouseY <= 40)) {
		strokeColor = stroke(255,150,0);
	}
	if(mouseX <= 20 && (mouseY > 40 && mouseY <= 60)) {
		strokeColor = stroke(255,255,0); //yellow
	}
	if(mouseX <= 20 && (mouseY > 60 && mouseY <= 80)) {
		strokeColor = stroke(0,255,0); //green
	}
	if(mouseX <= 20 && (mouseY > 80 && mouseY <= 100)) {
		strokeColor = stroke(0,255,255); //cyan
	}
	if(mouseX <= 20 && (mouseY > 100 && mouseY <= 120)) {
		strokeColor = stroke(0,0,255); //blue
	}
	if(mouseX <= 20 && (mouseY > 120 && mouseY <= 140)) {
	  	strokeColor = stroke(255,0,255); //magenta
	}
	if(mouseX <= 20 && (mouseY > 140 && mouseY <= 160)) {
  		strokeColor = stroke(125,75,0); //brown
  	}
	if(mouseX <= 20 && (mouseY > 160 && mouseY <= 180)) {
	  	strokeColor = stroke(255,255,255); //white
	}	
 	if(mouseX <= 20 && (mouseY > 180 && mouseY <= 200)) {
  		strokeColor = stroke(0,0,0); //black
	}

}

function draw() {
  	if(mouseIsPressed) {
  		if((mouseX > 25 || mouseY > 205) && (pmouseX > 25 || pmouseY > 205)) {
  			strokeCap(ROUND);
	  		strokeColor;
			strokeWeight(10);

			line(mouseX,mouseY,pmouseX,pmouseY);
  		}
  	}
}