let canvas;

let system1;
let system2;
let system3;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    pixelDensity(1);

    background(0);

    system1 = new ParticleSystem(0, int(random(-100, 100)), 0.1);
    system2 = new ParticleSystem(0, int(random(-100, 100)), 0.3);
    system3 = new ParticleSystem(0, int(random(-100, 100)), 0.05);
}

function draw() {
    fill(0, random(15, 35));
    rect(0, 0, width, height);

    system1.display();
    system2.display();
    system3.display();

    fill(0);
    textSize(25);
    rect(15, 15, textWidth("60 FPS"), 20);
    fill(255);
    text(Math.ceil(frameRate()) + " FPS", 15, 35);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}