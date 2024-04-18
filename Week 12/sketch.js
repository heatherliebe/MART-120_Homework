//My Game- Get across the finish line. 
//Use the WASD keys to navigate the player. If you click the mouse more obstacles will be added.

var player;
var obstacles = [];
var exitY;


function setup() {
  createCanvas(400, 400);
  player = new Player(width / 2, height - 50);
  exitY = 50;

  //  obstacles
  for (var i = 0; i < 3; i++) {
    obstacles.push(new Obstacle());
  }

  //  moving obstacles
  obstacles.push(new MovingObstacle());
  obstacles.push(new MovingObstacle());
}

function draw() {
  background(47, 90, 109);

   //  finish line
  fill(0, 255, 0);
  rect(0, exitY - 20, width, 20);
  
  //  "Exit" text
  textSize(24);
  fill(255);
  textAlign(CENTER);
  text('Exit', width / 2, 30);

  //  player
  player.show();
  player.update();

  //  obstacles
  for (var obstacle of obstacles) {
    obstacle.show();
    obstacle.update();

    // collisions with player
    if (player.hits(obstacle)) {
      gameOver();
    }
  }

  // YOU Win!
  if (player.y < exitY) {
    winGame();
  }
}

function keyPressed() {
  if (key === 'W' || key === 'w') {
    player.move(0, -50);
  } else if (key === 'S' || key === 's') {
    player.move(0, 50);
  } else if (key === 'A' || key === 'a') {
    player.move(-50, 0);
  } else if (key === 'D' || key === 'd') {
    player.move(50, 0);
  }
}

function mouseClicked() {
  addNonMovingObstacle();
}

function addNonMovingObstacle() {
  obstacles.push(new Obstacle());
}

function gameOver() {
  textSize(32);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text('Game Over!', width / 2, height / 2);
  noLoop();
}

function winGame() {
  textSize(32);
  fill(0, 255, 0);
  textAlign(CENTER, CENTER);
  text('You Win!', width / 2, height / 2);
  noLoop();
}

function Player(x, y) {
  this.x = x;
  this.y = y;
  this.size = 20;

  this.show = function() {
    fill(0);
    ellipse(this.x, this.y, this.size);
  }

  this.move = function(x, y) {
    if (this.x + x >= 0 && this.x + x <= width && this.y + y >= 0 && this.y + y <= height) {
      this.x += x;
      this.y += y;
    }
  }

  this.hits = function(obstacle) {
    let d = dist(this.x, this.y, obstacle.x, obstacle.y);
    return d < this.size / 2 + obstacle.size / 2;
  }

  this.update = function() {
    // Check if player reaches top
    if (this.y < 0) {
      winGame();
    }
  }
}

function Obstacle() {
  this.x = random(width - 20);
  this.y = random(height / 2);
  this.size = 35;

  this.show = function() {
    fill(255,255,255);
    rect(this.x, this.y, this.size, this.size);
  }

  this.update = function() {
    // No need to update static obstacles
  }
}

function MovingObstacle() {
  this.size = 20;
  this.speedX = random(-2, 2);
  this.speedY = random(-2, 2);
  this.x = random(width - this.size);
  this.y = random(height - this.size);

  this.show = function() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.size, this.size);
  }

  this.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;

    // if obstacle goes off screen and reappear on the opposite side
    if (this.x > width) {
      this.x = -this.size;
    } else if (this.x + this.size < 0) {
      this.x = width;
    }

    if (this.y > height) {
      this.y = -this.size;
    } else if (this.y + this.size < 0) {
      this.y = height;
    }
  }
}
