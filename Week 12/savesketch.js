
var ball1 = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
};

var ball2 = {
  x: 100,
  y: 100,
  xspeed: -3,
  yspeed: 2
};

var playerX = 300;
var playerY = 300;
var exitY;
var blockX = 50;
var blockX = 100;
var mousex = 0;
var mousey = 0;



function setup() {
  createCanvas(600, 400);
  exitY = 50;
  
  //  obstacles
  for (var i = 0; i < 3; i++) {
    block(new block());
  }
  
}

function draw() {
  background(47, 90, 109); 
 
  move(ball1); // Move the first ball
  move(ball2); // Move the second ball
  display(ball1); // ball 1
  display(ball2); // ball 2
  bounce(ball1);
  bounce(ball2);
  player();
  block();
  ellipse(mousex, mousey, 25, 25);
  tree(100, 200, 50);
  tree(100, 75, 50);
  tree(100, 320, 50);
  mountain (100, 100, 58, 20, 86, 75);
  
   //  finish line
fill(0, 255, 0);
rect(0, exitY - 20, width, 20);

//  "Exit" text
textSize(24);
fill(255);
textAlign(CENTER);
text('Exit', width / 2, 30);
  
  // YOU Win!
  if (playerY < exitY) {
    winGame();
  }
    
}

//moving ball1
function move(ball) {
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
}

//moving obstacle ball 1
function display(ball) {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
}

function bounce(ball) {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed *=-1;
  }

  if (ball.y > height || ball.y < 0) {
    ball.yspeed *= -1;
  }
}
  


//player
function player() {
  fill(0);
  noStroke();
  ellipse(playerX, playerY, 50, 50);
}

//key movements
function keyPressed() 
{
  if (key == 'd') 
  {
    playerX+=15;
  } 
  else if (key == 'a') 
  {
    playerX-=15;
  }
  if (key == 's') 
  {
    playerY+=15;
  } 
  else if (key == 'w') 
  {
    playerY-=15;
  }
}


function winGame() {
  textSize(32);
  fill(255, 255, 0);
  textAlign(CENTER);
  text('You win!', width / 2, height / 2);
}


function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}


function block(){
  fill (255, 255, 255)
  noStroke();
  square(200,300,25)
  
}
//tree non moving objects
function tree(x, y, diameter){
  fill( 255,222,173);
  square( x-9, y+20, diameter/3);
  
  fill(34,139,34);
  circle (x, y, diameter);
}

//mountain non moving objects
    function mountain (x1,y1,x2,y2,x3,y3){
    fill(255)
    triangle();
    }