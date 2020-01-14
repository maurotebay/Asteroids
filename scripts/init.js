function init() {
    canvas = document.getElementById('canvas');

    ww=window.innerWidth;
    wh=window.innerHeight;

    ctx = canvas.getContext('2d');

    player = new Circle(canvas.width/2, canvas.height/2, canvas.width/150, true);

    run();
    repaint();
}