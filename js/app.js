// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt;
  if (this.x > 505) {
    this.x = 0;
    this.speed = 100 + Math.floor(Math.random() * 100);
  }
  if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && 60 + player.y > this.y) {
    player.x = 200;
    player.y = 320;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.player = 'images/char-princess-girl.png';
};

Player.prototype.update = function(dt) {
  }

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
}

Player.prototype.handleInput = function (keyPress) {
  console.log(this.x,this.y,keyPress);
  if (keyPress == 'left' && this.x > 0) {
    this.x -= 102;
  }

  if (keyPress == 'right' && this.x < 303) {
      this.x += 102;
  }

  if (keyPress == 'up' && this.y > 0) {
      this.y -= 83;
  }

  if (keyPress == 'down' && this.y < 400) {
      this.y += 83;
  }

  if (this.y < 0) {
    setTimeout(function() {
      player.x = 200;
      player.y = 320;
    }, 1000);
  }
}

// Now instantiate your objects.
var EnimiesLocations = [50,135,220];
var allEnemies = EnimiesLocations.map(x => {
  var enemy = new Enemy(0,x,200);
  return enemy;
});

var player = new Player(200,320);

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
