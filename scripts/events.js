window.addEventListener('load', init, false);

document.addEventListener('keydown', function (evt) {
    lastPress = evt.keyCode;
    pressing[evt.keyCode] = true;
}, false);

document.addEventListener('keyup', function (evt) {
    pressing[evt.keyCode] = false;
}, false);

canvas.addEventListener('touchstart', function (evt) {
    var t = evt.changedTouches;
    for (var i = 0; i < t.length; i++) {
        x = t[i].pageX - canvas.offsetLeft;
        y = t[i].pageY - canvas.offsetTop;
        touches[t[i].identifier % 100] = new Point(x, y);
    }
}, false);

canvas.addEventListener('touchend', function (evt) {
    var t = evt.changedTouches;
    for (var i = 0; i < t.length; i++) {
        touches[t[i].identifier % 100] = null;
    }
}, false);

canvas.addEventListener('touchmove', function (evt) {
    evt.preventDefault();
    var t = evt.changedTouches;
    for (var i = 0; i < t.length; i++) {
        touches[t[i].identifier % 100].x = t[i].pageX - canvas.offsetLeft;
        touches[t[i].identifier % 100].y = t[i].pageY - canvas.offsetTop;
    }
}, false);