let canvas:any
let delta:number = 0

let animPaused = false;
const initialAnimSpeed:number = 0.008;
let animSpeed:number = initialAnimSpeed;
const spawnTime:number = 0.14;
const colorTime:number = 200;

let rects:Array<AnimatedRectangle> = Array<AnimatedRectangle>();

let timer:number = 0;
let colorTimer:number = 0;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
}

function draw() {
    delta = 60/frameRate()
    animSpeed = delta*initialAnimSpeed;
    animPaused = !focused;

    background("#20212b");

    if (!animPaused) spawnRects();
    updateRects();

    fill(255);
    textSize(25);
    if (!animPaused) text(returnRoundedFPS() + " FPS", 20, 40);
    else text("PAUSED", 20, 40);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function spawnRects() {
    timer++;
    
    if (timer > spawnTime*60) {
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
    for (let i:number = 0; i < rects.length; i++) {
        rects[i].display();
            
        if (rects[i].scale > ((min(width, height) === height) ? 3 : 1.5)) {
            rects.splice(i, 1);
        }
    }
}

function returnRoundedFPS() {
    if (frameRate() < 60 && frameRate() > 55) {
        return 60;
    } else {
        return Math.ceil(frameRate());
    }
}