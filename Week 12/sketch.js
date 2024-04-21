//My Game- Get across the finish line. 
//Use the WASD keys to navigate the player. If you click the mouse more obstacles will be added.

var joy = {//square object in motion
  x: 100,
  y: 100,
  xspeed: 2,
  yspeed: -4
  };
    
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
var playerY = 350;
var exitY;
var blockX = 50;
var blockX = 100;
var mousex = 100;
var mousey = 145;



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
 
  motion(joy);//move the square
  show(joy);//show square
  deflect(joy);//bounce square
  
  move(ball1); // Move the first ball
  move(ball2); // Move the second ball
  display(ball1); // ball 1
  display(ball2); // ball 2
  bounce(ball1);//bounce ball 1
  bounce(ball2);//bounce ball 2
  player();
  block();
  ellipse(mousex, mousey, 25, 25);//mouse click
  tree(300, 200, 50);
  tree(100, 75, 50);
  tree(100, 320, 50);
  mountain (300, 150, 375, 50, 450, 150);
  border (0,30,7,550);
  border (0,393,600,7);
  border (593,30,7,550);
  border (0,30,250,20);
  border (300,30,300,20);
  
 
//  "Exit" text
textSize(24);
fill(255);
textAlign(CENTER);
text('Exit', width/2.17, 30);
  
  // YOU Win!
  if (playerY < exitY) {
    winGame();
  }
    
}
//SQUARE
//display moving square
function show(joy) {
  fill(0,0,255);
  strokeWeight(2);
  square(joy.x, joy.y, 10);
  }

//bounce square
function deflect(joy) {
  if (joy.x > width || joy.x < 0) {
      joy.xspeed *= -1;
    }
  if (joy.y > 390 || joy.y < 30) {
    joy.yspeed *= -1;
  }
}

//moving square
function motion(joy) {
  joy.x += joy.xspeed;
  joy.y += joy.yspeed;
}


//BALL
//moving ball
function move(ball) {
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
}


//bounce ball
function bounce(ball) {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed *=-1;
  }

  if (ball.y > 390 || ball.y < 45) {
    ball.yspeed *= -1;
  }
}


//moving obstacle ball 
function display(ball) {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
}

  
//border
  function border( x,y,w,h) {
  fill(0,255,0);
  rect(x,y,w,h);
  
  }

//player
function player() {
  fill(0);
  noStroke();
  ellipse(playerX, playerY, 50, 50);
  fill(138,43,226);
  ellipse(playerX, playerY, 20,20);
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
  fill (255, 255, 255);
  square(200,300,25);
  
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
    triangle(x1,y1,x2,y2,x3,y3);
    fill(173,216,230)
    triangle(x1+10,y1,x2,y2+20,x3-10,y3);
    }