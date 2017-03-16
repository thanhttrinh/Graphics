/* 
 * Name: Thanh Trinh
 * CSC 2463 Graphics Assignment 1 
 * Example 4
 */

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(0,0,150);
	stroke(255,255,255);
	strokeWeight(3);

	//green circle
	fill(0,130,0);
	ellipse(100,100,100,100);

	//red star
	fill(255,0,0);
	beginShape();
	vertex(80,107);
	vertex(50,85);
	vertex(88,85);
	vertex(100,50);
	vertex(112,85);
	vertex(150,85);
	vertex(120,107);
	vertex(130,140);
	vertex(100,120);
	vertex(70,140);
	vertex(80,107);
	endShape();
}