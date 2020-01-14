welcomeScene.act = function () {
    if (lastPress === KEY_ENTER) {
        loadScene('game');
        lastPress = null;
    }
}