function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 200;

    player = new Circle(40, 160, 5);

    run();
    repaint();
}