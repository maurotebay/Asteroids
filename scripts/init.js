function init() {
    canvas = document.getElementById('canvas');
    container = document.getElementById('container');

    ctx = canvas.getContext('2d');

    player = new Circle(canvas.width / 2, canvas.height / 2, canvas.width / 100, true);

    run();
    repaint();
}