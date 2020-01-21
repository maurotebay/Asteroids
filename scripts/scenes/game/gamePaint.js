gameScene.paint = function (ctx) {

    ctx.fillStyle = '#000';
    //Draw background image
    if (background.width) {
        background.width = canvas.width;
        background.height = canvas.height;
        ctx.drawImage(background, 0, 0);
    }
    else
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Draw shots animation
    ctx.strokeStyle = '#f00';
    for (var i = 0, l = shots.length; i < l; i++)
        shots[i].drawImageArea(ctx, spritesheet, 30, (~~(aTimer * 10) % 2) * 5, 5, 5);

    ctx.strokeStyle = '#00f';
    for (var i = 0, l = asteroids.length; i < l; i++)
        asteroids[i].drawImageArea(ctx, spritesheet, 0, 11, 40, 40);

    if (player.timer < 21 && player.timer % 2 == 0) {
        ctx.strokeStyle = '#0f0';

        //Draw propulsor animation
        if (pressing[KEY_UP] || pressing[KEY_DOWN])
            player.drawImageArea(ctx, spritesheet, (~~(aTimer * 10) % 3) * 10, 0, 10, 10);
        else
            player.drawImageArea(ctx, spritesheet, 0, 0, 10, 10);

        ctx.strokeStyle = '#ff0';

    }

    ctx.font = (canvas.width >= canvas.height) ? canvas.width / 55 + 'px' + ' Arial' : canvas.height / 50 + 'px' + ' Arial';

    //Draw health left
    if (spritesheet.width) {
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'right';
        ctx.fillText('Lives:', canvas.width - 70, 20);
        ctx.textAlign = 'left';
        for (var i = 0; i < lives; i++)
            ctx.drawImage(spritesheet, 0, 0, 10, 10, canvas.width - 20 - 20 * i, 10, 10, 10);
    }
    else
        ctx.fillText('Lives: ' + lives, canvas.width - 50, 20);

    //Draw score
    ctx.fillText('Score: ' + score, canvas.width / 2, 20);

    //Draw explosion
    for (var i = 0, l = explosion.length; i < l; i++)
        explosion[i].drawImageArea(ctx, spritesheet, 35, (~~(aTimer * 10) % 2) * 5, 5, 5);
    ctx.fillStyle = '#fff';

    if (window.innerWidth < 800) {
        ctx.strokeStyle = '#ccc';
        btnShoot.stroke(ctx);
        btnPause.stroke(ctx);
        ctx.fillText('Shoot', btnShoot.x + btnShoot.width / 5, btnShoot.y + btnShoot.height / 2, btnShoot.width);
        ctx.fillText('Pause', btnPause.x + btnPause.width / 10, btnPause.y + btnPause.height / 2, btnPause.width);
    }

    if (pause) {
        ctx.textAlign = 'center';
        if (lives < 1)
            ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2);
        else
            ctx.fillText('PAUSE', canvas.width / 2, canvas.height / 2);
        ctx.textAlign = 'left';
    }
    else if (waveTimer > 0) {
        ctx.textAlign = 'center';
        ctx.fillText('WAVE ' + wave, canvas.width / 2, canvas.height / 2);
        ctx.textAlign = 'left';
    }
}