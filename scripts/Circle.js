class Circle {
    constructor(x = 0, y = 0, radius = 0, isPlayer = false, timer = 0, speed = 0, rotation = 0) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._timer = timer;
        this._speed = speed;
        this._rotation = rotation;
        this._isPlayer = isPlayer;
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

    get radius() {
        return this._radius;
    }
    set radius(newRadius) {
        this._radius = newRadius;
    }

    get timer() {
        return this._timer;
    }
    set timer(newTimer) {
        this._timer = newTimer;
    }

    get speed() {
        return this._speed;
    }
    set speed(newSpeed) {
        this._speed = newSpeed;
    }

    get rotation() {
        return this._rotation;
    }
    set rotation(newRotation) {
        this._rotation = newRotation;
    }

    get isPlayer() {
        return this._isPlayer;
    }

    distance(circle) {
        if (circle != null) {
            let dx = this.x - circle.x;
            let dy = this.y - circle.y;
            return (Math.sqrt(dx * dx + dy * dy) - (this.radius + circle.radius));
        }
    }

    stroke(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.stroke();
    }

    move(angle, speed) {
        if (speed != null) {
            this.x += Math.cos(angle) * speed;
            this.y += Math.sin(angle) * speed;
        }

        if (this.isPlayer) {
            // Out Screen
            if (this.x > canvas.width)
                this.x = 0;
            if (this.x < 0)
                this.x = canvas.width;
            if (this.y > canvas.height)
                this.y = 0;
            if (this.y < 0)
                this.y = canvas.height;
        }

    }

    getAngle(circle) {
        if (circle != null)
            return (Math.atan2(circle.y - this.y, circle.x - this.x));
    }

    fill(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();
    }

    drawImageArea(ctx, img, sx, sy, sw, sh) {
        if (img.width) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180 + Math.PI / 2);
            ctx.drawImage(img, sx, sy, sw, sh, -this.radius, -this.radius, this.radius * 2, this.radius * 2);
            ctx.restore();
        } else
            this.stroke(ctx);
    }
}