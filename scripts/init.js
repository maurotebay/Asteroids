function init() {
    canvas = document.getElementById('canvas');

    ctx = canvas.getContext('2d');

    scores = localStorage.getItem("highScores");
    if (scores != null)
        highScores = JSON.parse(scores);
    else
        highScores = [];

    player = new Circle(canvas.width / 2, canvas.height / 2, canvas.width / 100, true);

    destination = new Circle(x, y, 0.5);
    btnShoot = new Button(canvas.width / 20, canvas.height * 4 / 5, canvas.width / 10, canvas.height / 10);
    btnPause = new Button(canvas.width / 20, canvas.height / 20, canvas.height / 10, canvas.height / 10);

    run();
    repaint();
}