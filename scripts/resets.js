var playerReset = () => {
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    player.rotation = 0;
    player.speed = 0;
}

var reset = () => {
    player.timer = 0;
    shots.length = 0;
    asteroids.length = 0;
    explosion.length = 0;
    score = 0;
    lives = 3;
    wave = 1;
    lastPress = null;
    pressingReset();
    playerReset();
}

var pressingReset = () => {
    for (var i = 0; i < pressing.length; i++) {
        pressing[i] = false;
    }
}

var resetTouches = () => {
    for (var i = 0; i < touches.length; i++) {
        touches[i] = null;
    }
}