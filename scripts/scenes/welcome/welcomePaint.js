welcomeScene.paint = function (ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.font = '250% Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Welcome to the Asteroids game', canvas.width / 2, canvas.height / 3);
    ctx.fillText('Press Enter to start playing or', canvas.width / 2, canvas.height * 2 / 3);
    ctx.fillText('press Space to see controls.', canvas.width / 2, canvas.height * 3 / 4);
    ctx.textAlign = 'left';

    if (showControls) {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(arrowKeys, canvas.width / 2 - canvas.width / 8, canvas.height / 4, canvas.width / 8, canvas.height / 8);
        ctx.drawImage(spacebar, canvas.width / 2 - canvas.width / 5, canvas.height / 2, canvas.width / 5, canvas.height / 9);
        ctx.drawImage(enter, canvas.width / 2 - canvas.width / 9, canvas.height * 3 / 4, canvas.width / 9, canvas.height / 9);

        ctx.fillStyle = '#fff';
        ctx.font = '150% Arial';
        ctx.fillText('Up/Down Key: Go forward/backwards', canvas.width * 9 / 16, canvas.height * 11 / 36);
        ctx.fillText('Left/Right Key: Turn left/right', canvas.width * 9 / 16, canvas.height / 3);
        ctx.fillText('Spacebar: Shoot', canvas.width * 9 / 16, canvas.height * 9 / 16);
        ctx.fillText('Enter: Pause/Resume', canvas.width * 9 / 16, canvas.height * 13 / 16);

        ctx.textAlign = 'center';
        ctx.fillText('Press Enter to start the game.', canvas.width / 2, canvas.height * 15/16 );

    }
}