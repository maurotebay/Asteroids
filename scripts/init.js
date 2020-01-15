function init() {
    canvas = document.getElementById('canvas');

    /* canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';  */

    ctx = canvas.getContext('2d');

    player = new Circle(canvas.width / 2, canvas.height / 2, canvas.width / 150, true);

    run();
    repaint();
}