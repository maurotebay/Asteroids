highScoresScene.act = function () {

    if (lastPress === KEY_ENTER) {
        loadScene('game');
        lastPress = null;
    }

    for (var i = 0; i < touches.length; i++) {
        if (touches[i] !== null && touches[i].x < canvas.width && touches[i].y < canvas.height) {
            touches[i] = null;
            loadScene('game');
            break;
        }
    }

};