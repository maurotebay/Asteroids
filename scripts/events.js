window.addEventListener('load', init, false);

document.addEventListener('keydown', function (evt) {
    lastPress = evt.keyCode;
    pressing[evt.keyCode] = true;
}, false);

document.addEventListener('keyup', function (evt) {
    pressing[evt.keyCode] = false;
}, false);

