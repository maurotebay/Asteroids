function Scene(name) {
    this.name = (name === undefined) ? '' : name;
    scenes.push(this);
}

Scene.prototype = {
    constructor: Scene,
    load: function () { },
    paint: function (ctx) { },
    act: function (deltaTime) { }
}

function loadScene(name) {
    for (var i = 0; i < scenes.length; i++) {
        if (scenes[i].name == name)
            currentScene = i;
    }
    scenes[currentScene].load();
}