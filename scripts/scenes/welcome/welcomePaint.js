welcomeScene.paint = (ctx) => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';

    ctx.font = (canvas.width >= canvas.height) ? canvas.width / 30 + 'px' + ' Arial' : canvas.height / 30 + 'px' + ' Arial';
    ctx.fillText('Welcome to the Asteroids game', canvas.width / 2, canvas.height / 3);
    if (window.innerWidth < 800) {
        ctx.fillText('Touch the screen to start playing', canvas.width / 2, canvas.height * 2 / 3);
    }
    else {
        ctx.fillText('Press Enter to start playing or', canvas.width / 2, canvas.height * 2 / 3);
        ctx.fillText('press Space to see controls.', canvas.width / 2, canvas.height * 3 / 4);
    }
    ctx.textAlign = 'left';

    if (showControls) {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(arrowKeys, canvas.width / 2 - canvas.width / 8, canvas.height / 4, canvas.width / 8, canvas.height / 8);
        ctx.drawImage(spacebar, canvas.width / 2 - canvas.width / 5, canvas.height / 2, canvas.width / 5, canvas.height / 9);
        ctx.drawImage(enter, canvas.width / 2 - canvas.width / 9, canvas.height * 3 / 4, canvas.width / 9, canvas.height / 9);

        ctx.fillStyle = '#fff';
        ctx.font = (canvas.width >= canvas.height) ? canvas.width / 60 + 'px' + ' Arial' : canvas.height / 35 + 'px' + ' Arial';
        ctx.fillText('Up/Down: Forward/backwards', canvas.width * 9 / 16, canvas.height * 11 / 36, canvas.width / 3);
        ctx.fillText('Left/Right: Turn left/right', canvas.width * 9 / 16, canvas.height / 3, canvas.width / 3);
        ctx.fillText('Spacebar: Shoot', canvas.width * 9 / 16, canvas.height * 9 / 16, canvas.width / 3);
        ctx.fillText('Enter: Pause/Resume', canvas.width * 9 / 16, canvas.height * 13 / 16, canvas.width / 3);

        ctx.textAlign = 'center';
        ctx.fillText('Press Enter to start the game.', canvas.width / 2, canvas.height * 15 / 16, canvas.width / 3);

    }
}