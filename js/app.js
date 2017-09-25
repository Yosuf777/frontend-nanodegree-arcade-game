// Enemies our player must avoid
var Enemy = function(x, y, s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.s = s;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.s * dt;

    if (this.x >= 505) {
        this.x = 0;
    }
    Enemy.prototype.checkCollision = function() {
        player.y + 120 >= this.y + 80;
        player.x + 15 >= this.x + 78;
        player.y + 63 >= this.y + 135;
        player.x + 66 >= this.x + 12;

        //Other statements
    };
    this.checkCollision();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var Collision = function(anEnemy) {
    // check for collision between enemy and player
    if (
        player.y + 120 >= anEnemy.y + 80 &&
        player.x + 15 <= anEnemy.x + 78 &&
        player.y + 63 <= anEnemy.y + 135 &&
        player.x + 66 >= anEnemy.x + 12) {
        console.log('collided');
        player.x = 83;
        player.y = 101;
    }
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {

    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;


};
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.dt = 150;
};
Player.prototype.handleInput = function(keyPress) {
    var abc = 0;
    if (keyPress == 'left' && this.x > abc) {
        this.x -= 100;
    }
    if (keyPress == 'up' && this.y > abc) {
        this.y -= 100;
    }
    if (keyPress == 'right' && this.x > abc) {
        this.x += 100;
    }
    if (keyPress == 'down' && this.y > abc) {
        this.y += 100;
    }
    console.log('keyPress is: ' + keyPress);
};
// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
player = new Player(200, 400);
var allEnemies = [];
allEnemies[0] = new Enemy(0, 70, 50);
allEnemies[1] = new Enemy(0, 140, 100);
allEnemies[2] = new Enemy(0, 220, 200);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
