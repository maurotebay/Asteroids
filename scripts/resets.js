function playerReset() {
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    player.rotation = 0;
    player.speed = 0;
}

function reset() {
    playerReset();
    player.timer = 0;
    shots.length = 0;
    asteroids.length = 0;
    explosion.length = 0;
    score = 0;
    lives = 3;
}