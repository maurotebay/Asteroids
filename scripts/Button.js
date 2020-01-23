class Button {
    constructor(x = 0, y = 0, width = 0, height = this.width) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
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

    get width() {
        return this._width;
    }
    set width(newWidt) {
        this._width = newWidt;
    }

    get height() {
        return this._height;
    }
    set height(newHeight) {
        this._height = newHeight;
    }

    touch() {
        for (let i = 0, l = touches.length; i < l; i++) {
            if (touches[i] != null) {
                if (this.x < touches[i].x &&
                    this.x + this.width > touches[i].x &&
                    this.y < touches[i].y &&
                    this.y + this.height > touches[i].y) {
                    return true;
                }
            }
        }
        return false;
    }

    stroke(ctx) {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}