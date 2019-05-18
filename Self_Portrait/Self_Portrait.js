function setup() {
createCanvas(500, 500);
}


function draw() {
background(191, 142, 255);
noStroke();

//Shirt
fill(103, 102, 94)
beginShape();
quad(50, 450, 200, 400, 300, 400, 450, 450)
quad(50, 450, 450, 450, 500, 500, 0, 500)
endShape(CLOSE);
//Neck
fill(244, 209, 176)
beginShape();
quad(300, 325, 200, 325, 200, 400, 300, 400);
triangle(300, 400, 250, 430, 200, 400);
endShape(CLOSE);
//Ears
fill(244, 209, 176)
beginShape();
ellipse(150, 220, 20, 60);
ellipse(350, 220, 20, 60);
endShape(CLOSE);
//Beard
fill(138, 91, 52)
beginShape();
quad(150, 225, 350, 225, 315, 350, 185, 350);
endShape(CLOSE);
//Face
fill(244, 209, 176)
beginShape();
vertex(175, 125);
vertex(325, 150);
vertex(350, 225);
vertex(300, 325);
vertex(200, 325);
vertex(150, 225);
endShape(CLOSE);
//Mouth
fill(204, 154, 154);
beginShape();
triangle(240, 300, 275, 300, 275, 305)
endShape(CLOSE);
//Nose
fill(172, 148, 125)
beginShape();
triangle(250, 200, 250, 250, 275, 250);
endShape(CLOSE);
//Bags
fill(106, 72, 109)
beginShape();
ellipse(210, 207, 25, 20);
ellipse(300, 207, 25, 20);
endShape(CLOSE);
//Eyes
fill(255, 255, 255)
beginShape();
ellipse(210, 200, 25, 20);
ellipse(300, 200, 25, 20);
endShape(CLOSE);
//iris
fill(90, 100, 30);
circle(210, 200, 8);
circle(300, 200, 8);
endShape(CLOSE);
//Pupils
fill(0, 0, 0)
beginShape();
circle(210, 200, 5);
circle(300, 200, 5);
endShape(CLOSE);
//Moustache
fill(138, 91, 52)
beginShape();
triangle(250, 250, 262, 275, 200, 325);
triangle(275, 250, 262, 275, 300, 325);
endShape(CLOSE);
//Eyebrows
fill(64, 62, 32);
beginShape();
triangle(210, 170, 180, 200, 220, 180);
triangle(300, 170, 330, 200, 290, 180);
endShape(CLOSE);
//SideHair
fill(64, 62, 32);
beginShape();
triangle(325, 150, 350, 225, 350, 150);
triangle(175, 125, 150, 225, 150, 125);
endShape(CLOSE);
//Fringe
fill(250, 250, 250);
beginShape();
quad(175, 125, 250, 70, 320, 90, 375, 200);
endShape(CLOSE);

}
