var AnimatedRectangle = (function () {
    function AnimatedRectangle(c1, rotationOffset1) {
        this.c = color(255);
        this.scale = 0;
        this.rotation = 0;
        this.rotationOffset = 0;
        this.c = c1;
        this.rotationOffset = rotationOffset1;
    }
    AnimatedRectangle.prototype.display = function () {
        rectMode(CENTER);
        if (!animPaused)
            this.animate();
        push();
        translate(width / 2, height / 2);
        rotate(radians(this.rotationOffset + this.rotation));
        fill(0, 0);
        stroke(this.c);
        strokeWeight(12 * this.scale);
        rect(0, 0, min(width, height) * this.scale, min(width, height) * this.scale);
        pop();
        rectMode(CORNER);
    };
    AnimatedRectangle.prototype.animate = function () {
        this.scale += animSpeed;
        this.rotation += animSpeed * 100;
    };
    return AnimatedRectangle;
}());
var canvas;
var animPaused = false;
var animSpeed = 0.01;
var spawnTime = 0.1;
var colorTime = 200;
var rects = Array();
var timer = 0;
var colorTimer = 0;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
}
function draw() {
    animPaused = !focused;
    background("#20212b");
    if (!animPaused)
        spawnRects();
    updateRects();
    fill(255);
    textSize(25);
    if (!animPaused)
        text(returnRoundedFPS() + " FPS", 20, 40);
    else
        text("PAUSED", 20, 40);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function spawnRects() {
    timer++;
    if (timer > spawnTime * 60) {
        colorMode(HSB, 360, 100, 100);
        rects.push(new AnimatedRectangle(color(map(colorTimer, 0, colorTime, 0, 360), 100, 100), 45));
        colorMode(RGB, 255);
        timer = 0;
        colorTimer++;
    }
    if (colorTimer > colorTime) {
        colorTimer = 0;
    }
}
function updateRects() {
    for (var i = 0; i < rects.length; i++) {
        rects[i].display();
        if (rects[i].scale > ((min(width, height) === height) ? 3 : 1.5)) {
            rects.splice(i, 1);
        }
    }
}
function returnRoundedFPS() {
    if (frameRate() < 60 && frameRate() > 55) {
        return 60;
    }
    else {
        return Math.ceil(frameRate());
    }
}
//# sourceMappingURL=build.js.map