/* 
 * Name: Thanh Trinh
 * CSC 2463 Graphics Assignment 1 
 * Example 3
 */

function setup() {
	createCanvas(200, 100);
}

function draw() {
	background(0,0,0);
	noStroke();
	
	//pacman
	fill(255,255,0);
	arc(50,50,80,80,PI+QUARTER_PI,PI-QUARTER_PI);
	
	//blinky's body
	fill(255,0,0);
	arc(150,50,80,80,PI,PI);
	rect(110,50,80,40);
	
	fill(255,255,255);
	ellipse(130,50,25,25); //left eye
	ellipse(170,50,25,25); //right eye
	
	//blinky's eye color
	fill(0,0,255);
	ellipse(130,50,15,15); //left eye color
	ellipse(170,50,15,15); //right eye color
}