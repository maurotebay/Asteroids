gameScene.act = function (deltaTime) {

    if (canvas.width > canvas.height) {
        player.radius = canvas.width / 80;
        maxDistance = canvas.width;
    }
    else {
        player.radius = canvas.height / 30;
        maxDistance = canvas.height;
    }

    if (!pause) {
        // GameOver Reset
        if (lives < 1)
            reset();

        //Accelerate player
        if (pressing[KEY_UP]) {
            if (player.speed < maxSpeed)
                player.speed++;
        }
        else {   //Decelerate player
            if (player.speed > 0)
                player.speed--;
        }

        //Decelerate player faster if down key pressed
        if (pressing[KEY_DOWN]) {
            if (player.speed > -maxSpeed) {
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

        if (window.innerWidth < 800) {
            if (touches[0] !== null) {
                destination.x = touches[0].x;
                destination.y = touches[0].y;
                isTouching = true;
                player.rotation = player.getAngle(destination) * 180 / Math.PI;

                var distance = player.distance(destination);
                var distancePercetage = (distance * 100 / maxDistance);

                if (distance > 0) {
                    if (player.speed < 10) {
                        if (distancePercetage > 1) {
                            player.speed = 10;
                        }
                        else {
                            player.speed = distancePercetage * 10;
                        }
                    }
                }
            }
            else if (player.speed > 0) {
                isTouching = false;
                player.speed--;
            }
        }


        //Convert degrees angle to radians
        radians = player.rotation * Math.PI / 180;


        //Move player
        player.move(radians, player.speed);

        // New Shot
        if (!isCrashed) {
            if (lastPress == KEY_SPACE || btnShoot.touch()) {
                var s = new Circle(player.x, player.y, maxDistance / 100, false, 30, player.speed + 15, player.rotation);
                shots.push(s);
            }
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
        if (waveTimer > 0)
            waveTimer--;
        else if (asteroids.length < 1) {
            for (var i = 0, l = basicAsteroidsNum + wave; i < l; i++) {    //Extra asteroids depending on wave number
                var e = new Circle(random(canvas.width), 0, maxDistance / 15, false, 0, 2, random(180));
                asteroids.push(e);
            }
        }

        // Move asteroids
        for (var i = 0, l = asteroids.length; i < l; i++) {
            asteroids[i].move(asteroids[i].rotation * Math.PI / 180, asteroids[i].speed);

            // Collision Asteroid-Player
            if (player.timer < 1 && asteroids[i].distance(player) < 0) {
                lives--;
                player.timer = 60;
                for (var j = 0; j < 8; j++) {
                    var e = new Circle(player.x, player.y, maxDistance / 100, false, 40, 0, 45 * j);
                    explosion.push(e);
                }
            }

            // Asteroid bounces with canvas borders
            if (asteroids[i].x > canvas.width) {
                asteroids[i].rotation = 540 - asteroids[i].rotation;
            }
            else if (asteroids[i].x < 0) {
                asteroids[i].rotation = 540 - asteroids[i].rotation;
            }
            else if (asteroids[i].y > canvas.height) {
                asteroids[i].rotation = 360 - asteroids[i].rotation;
            }
            else if (asteroids[i].y < -1) {
                asteroids[i].rotation = 360 - asteroids[i].rotation;
            }

            // Collision asteroid-shot
            for (var j = 0, ll = shots.length; j < ll; j++) {
                if (asteroids[i].distance(shots[j]) < 0) {
                    if (asteroids[i].radius > maxDistance / 100) {
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
                    if (asteroids.length < 1) {
                        waveTimer = 40;
                        wave++;
                    }
                }
            }
        }

        // Move Explosion
        for (var i = 0, l = explosion.length; i < l; i++) {
            explosion[i].move((explosion[i].rotation - 90) * Math.PI / 180, 1);
            explosion[i].timer--;
            if (explosion[i].timer < 1) {
                explosion.splice(i--, 1);
                l--;
            }
        }

        // Damaged
        if (player.timer > 0) {
            player.timer--;
            isCrashed = true;
            if (player.timer == 20) {
                playerReset();
            }
        }

        if (player.timer === 0) {
            isCrashed = false;
        }
    }

    // GameOver
    if (lives < 1) {
        pause = true;
    }

    btnShoot.x = canvas.width / 20;
    btnShoot.y = canvas.height * 4 / 5;
    btnShoot.width = canvas.width / 10;
    btnShoot.height = canvas.height / 10;

    btnPause.x = canvas.width / 20;
    btnPause.y = canvas.height / 20;
    btnPause.width = canvas.height / 10;
    btnPause.height = canvas.height / 10;


    aTimer += deltaTime;
    if (aTimer > 3600)
        aTimer -= 3600;

    if (lastPress == KEY_ENTER || btnPause.touch())
        pause = !pause;

    lastPress = null;

}