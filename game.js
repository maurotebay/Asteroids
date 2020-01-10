(function () {
    'use strict';
    window.addEventListener('load', init, false);
    var KEY_LEFT = 37;
    var KEY_RIGHT = 39;
    var KEY_UP = 38;
    var KEY_DOWN = 40;
    var KEY_SPACE = 32;
    var canvas = null, ctx = null;
    var lastPress = null;
    var pressing = [];
    var player = null;

    var radians = null;

    var aTimer = 0;
    var shots = [];
    var spritesheet = new Image();
    var background = new Image();
    spritesheet.src = 'assets/asteroids.png';
    background.src = 'assets/background.jpg';

    function init() {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        canvas.width = 300;
        canvas.height = 200;

        player = new Circle(40, 160, 5);

        run();
        repaint();
    }

    function run() {
        setTimeout(run, 50);
        act(0.05);
    }

    function repaint() {
        requestAnimationFrame(repaint);
        paint(ctx);
    }

    function act(deltaTime) {

        //Accelerate player
        if (pressing[KEY_UP]) {
            if (player.speed < 5)
                player.speed++;
        }
        else {   //Decelerate player
            if (player.speed > 0)
                player.speed--;
        }

        //Decelerate player faster if down key pressed
        if (pressing[KEY_DOWN]) {
            if (player.speed > 0) {
                player.speed--;
            }
        }

        // Set Rotation
        if (pressing[KEY_RIGHT]) {
            player.rotation += 10;
            if (player.rotation >= 360)
                player.rotation = 0;
        }

        if (pressing[KEY_LEFT]) {
            player.rotation -= 10;
            if (player.rotation <= -360)
                player.rotation = 0;
        }
        //Convert degrees angle to radians
        radians = player.rotation * Math.PI / 180;

        //Move player
        player.move(radians, player.speed);

        // New Shot
        if (lastPress == KEY_SPACE) {
            var s = new Circle(player.x, player.y, 2.5, 15, player.speed + 15, player.rotation);
            shots.push(s);
        }

        // Move Shots
        for (var i = 0, l = shots.length; i < l; i++) {
            shots[i].timer--;
            if (shots[i].timer < 0) {
                shots.splice(i--, 1);
                l--;
                continue;
            }
            shots[i].move(shots[i].rotation * Math.PI / 180, shots[i].speed);
        }
        aTimer += deltaTime;
        if (aTimer > 3600)
            aTimer -= 3600;
        lastPress = null;

    }

    function paint(ctx) {
        ctx.fillStyle = '#000';
        //Draw background image
        if (background.width)
            ctx.drawImage(background, 0, 0);
        else
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw shots animation
        ctx.strokeStyle = '#f00';
        for (var i = 0, l = shots.length; i < l; i++)
            shots[i].drawImageArea(ctx, spritesheet, 30, (~~(aTimer * 10) % 2) * 5, 5, 5);
        ctx.strokeStyle = '#0f0';

        //Draw propulsor animation
        if (pressing[KEY_UP])
            player.drawImageArea(ctx, spritesheet, (~~(aTimer * 10) % 3) * 10, 0, 10, 10);
        else
            player.drawImageArea(ctx, spritesheet, 0, 0, 10, 10);
    }


    document.addEventListener('keydown', function (evt) {
        lastPress = evt.keyCode;
        pressing[evt.keyCode] = true;
    }, false);

    document.addEventListener('keyup', function (evt) {
        pressing[evt.keyCode] = false;
    }, false);

    class Circle {
        constructor(x, y, radius, timer, speed, rotation) {
            this.x = (x == undefined) ? 0 : x;
            this.y = (y == undefined) ? 0 : y;
            this.radius = (radius === undefined) ? 0 : radius;
            this.timer = (timer === undefined) ? 0 : timer;
            this.speed = (speed === undefined) ? 0 : speed;
            this.rotation = (rotation === undefined) ? 0 : rotation;
        }

        distance(circle) {
            if (circle != null) {
                var dx = this.x - circle.x;
                var dy = this.y - circle.y;
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
                //ctx.scale(this.scale,this.scale);
                ctx.rotate(this.rotation * Math.PI / 180 + Math.PI / 2);
                ctx.drawImage(img, sx, sy, sw, sh, -this.radius, -this.radius, this.radius * 2, this.radius * 2);
                ctx.restore();
            }
            else
                this.stroke(ctx);
        }

    }

    window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) { window.setTimeout(callback, 17); };
    })();
})();