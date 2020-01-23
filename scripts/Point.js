class Point {
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(newX) {
        this._x = newX;
    }

    get y() {
        return this._y;
    }
    set y(newY) {
        this._y = newY;
    }
}