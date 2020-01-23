highScoresScene = new Scene('highScores');

highScoresScene.load = () => {
    name = prompt('Enter your name: ');

    newScore = new Score(score, name);

    addHighScore(newScore);
    pressingReset();
}