class Scene {
    constructor(name = '') {
        this.name = name;
        scenes.push(this);
    }

    load() {}
    paint(ctx) {}
    act(deltaTime) {}
}

var loadScene = (name) => {
    for (let i = 0; i < scenes.length; i++) {
        if (scenes[i].name == name)
            currentScene = i;
    }
    scenes[currentScene].load();
}