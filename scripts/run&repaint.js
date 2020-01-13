function run() {
    setTimeout(run, 50);
    act(0.05);
}

function repaint() {
    requestAnimationFrame(repaint);
    paint(ctx);
}