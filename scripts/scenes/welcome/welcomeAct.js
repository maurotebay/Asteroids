welcomeScene.act = () => {
    if (lastPress === KEY_ENTER) {
        loadScene('game');
        lastPress = null;
    }

    if (lastPress === KEY_SPACE) {
        showControls = !showControls;
        lastPress = null;
    }

    for (let i = 0; i < touches.length; i++) {
        if (touches[i].x < canvas.width && touches[i].y < canvas.height){
            touches[i] = null;
            loadScene('game');
            break;
        }
    }

}