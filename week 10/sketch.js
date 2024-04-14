var headX = 250;
var headY = 150;
var headDirection = 1;
var headSpeed = 1;


var hairX = 245;
var hairY = 165;
var hairDirection = 1;
var hairSpeed = 1;

var sunX = 200;
var sunY = 185;
var sunDirection = 1;
var sunSpeed = 1;
var sunColor;

var mouthX = 247;
var mouthY = 176;
var mouthDirection = 1;
var mouthSpeed = 1;


var size = 22;
var count = 0;
var sizeDirection = 2;


function setup() {
   createCanvas(600, 600);

   
  // color changes
 
    sunColor = color(214, 55, 1);
   
}
  
  function draw() {
    background(0, 115, 128);
    textSize(50);
    text("Make Art Everday!", 30,80);
   
 
    
      // sun
      fill(sunColor);
      circle(500, sunY, 175);
      sunY += sunDirection * sunSpeed
      if (sunY >= 400 || sunY <= 10) {
      sunDirection *= -1;
      sunSpeed = random(random() *10); // Random vertical speed
      sunColor = color(random(255), random(255), random(255)); // Change sun color
      }
     
      //hair
      fill(204, 85, 0);
      circle(hairX, hairY, 175);
      hairX += hairDirection * hairSpeed;
      if (hairX >= 260 || hairX <= 215) {
      hairDirection *= -1;
      hairSpeed = random(1,3); // Random horizontal speed 
      }
    
      //head
      fill(173, 216, 200);
      circle(headX, headY, 100);
      headX += headDirection * headSpeed;
      if (headX >= 318 || headX <= 200) 
      {
      headDirection *= -1;
      headSpeed = random(1,4); // Random horizontal speed
        
      }
    
      // body
      fill(0, 148, 148);
      triangle(100,500,250,200, 400,500);
      
      // eyes
      fill(0);
      ellipse(225, 130, 20, 15);
      ellipse (272, 130, 20, 15);
    
      
      // nose
      circle(248, 150, 10)
  
      //mouth
      ellipse (247, mouthY, 30, 10);
      mouthY += mouthDirection * mouthSpeed;
      if(mouthY <= 125 || mouthY >=190)
      {
      mouthDirection *= -1;
      mouthSpeed = random(); // Random vertical speed
      }

    
      // right arm
      fill(10, 24, 120);
      rect(300,295,70,20);
    
      // left arm
      rect(120,295,70,20);
    
      // left leg
      rect(200,500,30,80);
    
      // right leg
      rect(290,500,30,80);
    
      //dress
      stroke( 173, 216, 200);
      strokeWeight(3);
      line(300,300,200,300);
      line(200,300,200,500);
      line(210,300,210,500);
      line(220,300,220,500);
    
    
    // decoration
    // Stem
    stroke(0, 200, 0);
    strokeWeight(5);
    line(width / 2, height, width / 2, height - 100);
    
    // Petals
    fill(173, 216, 200);
    noStroke();
    for (let i = 0; i < TWO_PI; i += PI / 4) {
      let x = cos(i) * 50 + width / 2;
      let y = sin(i) * 50 + height - 100;
      ellipse(x, y, 40, 40);
    }
    
    // Center
    fill(204, 85, 0);
    ellipse(width / 2, height - 100, 20, 20);
    
    
    // decoration 2
    translate (-170,0)
    // Stem
    stroke(0, 200, 0);
    strokeWeight(5);
    line(width / 2, height, width / 2, height - 100);
    
    // Petals
    fill(173, 216, 200);
    noStroke();
    for (let i = 0; i < TWO_PI; i += PI / 4) {
      let x = cos(i) * 50 + width / 2;
      let y = sin(i) * 50 + height - 100;
      ellipse(x, y, 40, 40);
    }
    
    // Center
    fill(204, 85, 0);
    ellipse(width / 2, height - 100, 20, 20);
  
    //artist
      
      fill(220);
      textSize(size);
      size+= sizeDirection;
      count++;
      if(count > 5)
      {
          sizeDirection *=-1;
          count = 0;
      }
      text("Heather Liebe", 550,570);
  
  
  }
 
  