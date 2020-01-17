function init() {
    canvas = document.getElementById('canvas');

    ctx = canvas.getContext('2d');

    player = new Circle(canvas.width / 2, canvas.height / 2, canvas.width / 100, true);

    destination = new Circle(x, y, 0.5);
    btnShoot = new Button(170, 270, 20, 20);
    btnPause = new Button(90, 0, 20, 20);

    run();
    repaint();
}