highScoresScene = new Scene('highScores');

highScoresScene.load = function () {
    name = prompt('Name: ');

    newScore = new Score(score, name);

    addHighScore(newScore);
    pressingReset();
}