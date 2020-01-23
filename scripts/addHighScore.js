var addHighScore = (newScore) => {

    posHighScore = 0;

    if(highScores == null)
        highScores = [];
        
    if (highScores.length < 1) {
        highScores.push(newScore);
    }

    else {
        for (; posHighScore < highScores.length && highScores[posHighScore].score > newScore.score ; posHighScore++) { }

        highScores.splice(posHighScore, 0, newScore);
    }

    if (highScores.length > 10) {
        highScores.length = 10;
    }

    localStorage.setItem("highScores", JSON.stringify(highScores));

}