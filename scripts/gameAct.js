function act(deltaTime) {

    //Accelerate player
    if (pressing[KEY_UP]) {
        if (player.speed < 5)
            player.speed++;
    }
    else {   //Decelerate player
        if (player.speed > 0)
            player.speed--;
    }

    //Decelerate player faster if down key pressed
    if (pressing[KEY_DOWN]) {
        if (player.speed > 0) {
            player.speed--;
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
        var s = new Circle(player.x, player.y, 2.5, 15, player.speed + 15, player.rotation);
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
    aTimer += deltaTime;
    if (aTimer > 3600)
        aTimer -= 3600;
    lastPress = null;

}