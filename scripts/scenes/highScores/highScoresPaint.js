highScoresScene.paint = function (ctx) {

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw title
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = (canvas.width >= canvas.height) ? canvas.width / 55 + 'px' + ' Arial' : canvas.height / 35 + 'px' + ' Arial'
    ctx.fillText('HIGH SCORES', canvas.width / 2, canvas.height / 5);
    // Draw high scores
    ctx.textAlign = 'right';
    ctx.fillText('Name:', canvas.width / 3, canvas.height * 2 / 7);
    ctx.fillText('Score:', canvas.width * 2 / 3, canvas.height * 2 / 7);

    for (var i = 0, l = highScores.length; i < l; i += 1) {
        
        if (i === posHighScore) {
            ctx.fillStyle = '#ff0';
            ctx.fillText('->   ' + highScores[i].score, canvas.width * 2 / 3, canvas.height * 2 / 7 + (i + 1) * 20);
        }
        else {
            ctx.fillStyle = '#fff';
            ctx.fillText(highScores[i].score, canvas.width * 2 / 3, canvas.height * 2 / 7 + (i + 1) * 20);
        }
        
        ctx.fillText(highScores[i].name, canvas.width / 3, canvas.height * 2 / 7 + (i + 1) * 20);
    }

    ctx.textAlign = 'center';
    if (window.innerWidth > 800)
        ctx.fillText('Press enter to play again', canvas.width / 2, canvas.height * 19 / 20);
    else
        ctx.fillText('Touch the screen to play again', canvas.width / 2, canvas.height * 19 / 20)

};