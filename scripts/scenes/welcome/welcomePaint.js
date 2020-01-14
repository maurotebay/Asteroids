welcomeScene.paint = function (ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.font = '300% Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Welcome', canvas.width / 2, canvas.height / 2);
}