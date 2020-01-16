function run() {
    setTimeout(run, 50);

    width = container.offsetWidth;
    height = container.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    if (scenes.length) {
        scenes[currentScene].act(0.05);
    }

}

function repaint() {
    requestAnimationFrame(repaint);
    
    if (scenes.length) {
        scenes[currentScene].paint(ctx);
    }
}