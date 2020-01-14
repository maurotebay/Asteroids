gameScene.act = function (deltaTime) {

    //Accelerate player
    if (pressing[KEY_UP]) {
        if (player.speed < 7.5)
            player.speed++;
    }
    else {   //Decelerate player
        if (player.speed > 0)
            player.speed--;
    }

    //Decelerate player faster if down key pressed
    if (pressing[KEY_DOWN]) {
        if (player.speed > -7.5) {
            player.speed--;
        }
    }
    else {
        if (player.speed < 0) {
            player.speed++;
        }
    }

    //Rotate player
    if (pressing[KEY_RIGHT]) {
        player.rotation += 10;
        if (player.rotation >= 360)
            player.rotation = 0;
    }

    if (pressing[KEY_LEFT]) {
        player.rotation -= 10;
        if (player.rotation <= -360)
            player.rotation = 0;
    }

    //Convert degrees angle to radians
    radians = player.rotation * Math.PI / 180;

    //Move player
    player.move(radians, player.speed);

    // New Shot
    if (lastPress == KEY_SPACE) {
        var s = new Circle(player.x, player.y, 3.75, false, 25, player.speed + 15, player.rotation);
        shots.push(s);
    }

    // Move Shots
    for (var i = 0, l = shots.length; i < l; i++) {
        shots[i].timer--;
        if (shots[i].timer < 0) {
            shots.splice(i--, 1);
            l--;
            continue;
        }
        shots[i].move(shots[i].rotation * Math.PI / 180, shots[i].speed);
    }

    // New asteroids
    if (asteroids.length < 1) {
        for (var i = 0; i < 3; i++) {
            var e = new Circle(random(canvas.width), 0, 40, false, 0, 2, random(180));
            asteroids.push(e);
        }
    }

    // Move asteroids
    for (var i = 0, l = asteroids.length; i < l; i++) {
        asteroids[i].move(asteroids[i].rotation * Math.PI / 180, asteroids[i].speed);

        if (asteroids[i].x > canvas.width || asteroids[i].x < 0) {
            asteroids.splice(i--, 1);
            l--;
        }
        else if (asteroids[i].y > canvas.height || asteroids[i].y < 0) {
            asteroids.splice(i--, 1);
            l--;
        }

        for (var j = 0, ll = shots.length; j < ll; j++) {
            if (asteroids[i].distance(shots[j]) < 0) {
                if (asteroids[i].radius > 10) {
                    for (var k = 0; k < 3; k++) {
                        var e = new Circle(asteroids[i].x, asteroids[i].y, asteroids[i].radius / 2, false, 0, 2, shots[j].rotation + 120 * k);
                        asteroids.push(e);
                    }
                }
                score++;
                asteroids.splice(i--, 1);
                l--;
                shots.splice(j--, 1);
                ll--;
            }
        }
    }

    aTimer += deltaTime;
    if (aTimer > 3600)
        aTimer -= 3600;
    lastPress = null;

}