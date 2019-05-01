var img;
var initials ='gc'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
img = loadImage('knife.jpg');  // knife.jpg needs to be next to this .js file
// you can link to an image on your github account
//img = loadImage('https://dma-git.github.io/images/cat2-sm.jpg');
}

function setup() {
createCanvas(1500, 720);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(01);
    strokeWeight(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
   
    stroke(0);
    fill(0, 0, 0);
    ellipse(mouseX, mouseY, 10, 10);
    
  } else if (toolChoice == '3') { // third tool
    
    weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    stroke(0, 0, 0)
    fill(0, 0, 0)
 strokeWeight(weight);
 line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '4') {

    stroke(0, 0, 0, 30);
    strokeWeight(30)
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // this tool calls a function

    stroke(0, 0, 0);
    brush();
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '6') {

        stroke(255);
        strokeWeight(1)
    fill(255, 255, 255);
    line(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '7') {

    strokeWeight(03)
    fill(255)
    ellipse(mouseX, mouseY, 50, 50)
    
  } else if (toolChoice == '8' || toolChoice == 'e' || toolChoice == 'E') {

    stroke(250, 250, 250);
    strokeWeight(20)
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '9') {
    fill(random(255), random(255), random(255));
    rect(0, 0, 1500, 720);
    
  } else if (toolChoice == '0') {
    stroke(random(255), random(255), random(255));
    strokeWeight(random(500))
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, 0, 0);
    
  } else if (toolChoice == 'f' || toolChoice == 'F') { 
   firefly();
    
  }
 }

function firefly() {
var x = 0;
var y = 0;
var px  = 0;
var py  = 0;
var easing = 0.05; 

stroke(0, 102);
background(60, 0, 70)
stroke(220, 255, 0);
var targetX = mouseX;   
x +=  (targetX -  x) * easing;
var targetY = mouseY;   
y +=  (targetY -  y) * easing;
var weight = dist  (x ,  y,  px ,  py );   
strokeWeight(weight);   
line(mouseX, mouseY, pmouseX, pmouseY);   
py  = y;   px  = x;
}

function brush() {
var x = 0;
var y = 0;
var px  = 0;
var py  = 0;
var easing = 0.05;

stroke(0, 0, 0);
var targetX = mouseX;   
x +=  (targetX -  x) * easing;
var targetY = mouseY;   
y +=  (targetY -  y) * easing;
var weight = dist  (x ,  y,  px ,  py );   
strokeWeight(weight);   
//line  (x ,  y,  px ,  py );   
py  = y;   px  = x;
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme() {
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}
