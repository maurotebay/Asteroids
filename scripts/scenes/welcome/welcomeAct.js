welcomeScene.act = function () {
    if (lastPress === KEY_ENTER) {
        loadScene('game');
        lastPress = null;
    }

    if(lastPress === KEY_SPACE){
        showControls = true;
    }

}