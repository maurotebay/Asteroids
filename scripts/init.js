function init() {
    canvas = document.getElementById('canvas');

    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;

    canvas.width = width ;
    canvas.height = height ;

    ctx = canvas.getContext('2d');

    player = new Circle(canvas.width / 2, canvas.height / 2, canvas.width / 100, true);

    run();
    repaint();
}