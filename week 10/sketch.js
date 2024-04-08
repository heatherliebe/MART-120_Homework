function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(0, 115, 128);
    textSize(50);
    text("Make Art Everday!", 30,80);
  
    
      // sun
      fill(204, 85, 0);
      circle(500,20,175);
    
       
    
    
      //hair
      fill(204, 85, 0);
      circle(245,165,150);
    
      //head
      fill(173, 216, 200);
      circle(250,150,100);
    
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
      ellipse (247, 176, 30, 10);
    
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
      textSize(22);
      text("Heather Liebe", 550,570);
  
  
  }
  
  
  