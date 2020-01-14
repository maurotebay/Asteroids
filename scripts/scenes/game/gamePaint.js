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
    ctx.strokeStyle = '#0f0';

    //Draw propulsor animation
    if (pressing[KEY_UP] || pressing[KEY_DOWN])
        player.drawImageArea(ctx, spritesheet, (~~(aTimer * 10) % 3) * 10, 0, 10, 10);
    else
        player.drawImageArea(ctx, spritesheet, 0, 0, 10, 10);

    ctx.strokeStyle = '#00f';
    for (var i = 0, l = asteroids.length; i < l; i++)
        asteroids[i].drawImageArea(ctx, spritesheet, 0, 11, 40, 40);

}