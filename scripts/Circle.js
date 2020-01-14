function Circle(x, y, radius, isPlayer, timer, speed, rotation) {
    this.x = (x == undefined) ? 0 : x;
    this.y = (y == undefined) ? 0 : y;
    this.radius = (radius === undefined) ? 0 : radius;
    this.timer = (timer === undefined) ? 0 : timer;
    this.speed = (speed === undefined) ? 0 : speed;
    this.rotation = (rotation === undefined) ? 0 : rotation;
    this.isPlayer = (isPlayer === undefined) ? false : isPlayer;
}

Circle.prototype = {
    constructor: Circle,

    distance: function (circle) {
        if (circle != null) {
            var dx = this.x - circle.x;
            var dy = this.y - circle.y;
            return (Math.sqrt(dx * dx + dy * dy) - (this.radius + circle.radius));
        }
    },

    stroke: function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.stroke();
    },

    move: function (angle, speed) {
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

    },

    getAngle: function (circle) {
        if (circle != null)
            return (Math.atan2(circle.y - this.y, circle.x - this.x));
    },

    fill: function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();
    },

    drawImageArea: function (ctx, img, sx, sy, sw, sh) {
        if (img.width) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180 + Math.PI / 2);
            ctx.drawImage(img, sx, sy, sw, sh, -this.radius, -this.radius, this.radius * 2, this.radius * 2);
            ctx.restore();
        }
        else
            this.stroke(ctx);
    }
}