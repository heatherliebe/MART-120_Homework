
var ball = {
    x: 300,
    y: 200,
    xspeed:4,
    yspeed:-3
  }
  var playerX = 100;
  var playerY = 100;
    
  function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(47, 90, 109);
    move();
    bounce();
    display();
    player();
    mouseClicked();
    
  }
  
  //moving balls
    function move() {
       ball.x = ball.x + ball.xspeed;
       ball.y = ball.y + ball.yspeed; 
      
    }
    
    function bounce() {
       if (ball.x > width || ball.x < 0) {
        ball.xspeed = ball.xspeed * -1;
    }
    
      if (ball.y > height || ball.y < 0) {
      ball.yspeed = ball.yspeed * -1; 
    } 
  
    
  }
  
    function mouseClicked() {
    fill(255);
    rect(mouseX, mouseY, 20, 20); // Draws a white square at the mouse position
  }
     function player() {
       fill (0);
       noStroke();
       ellipse (100,200,50,50);
     }
    
    
      function display() {
      stroke(255);
      strokeWeight(4);
      noFill();
      ellipse(ball.x, ball.y, 24, 24);
      }
  