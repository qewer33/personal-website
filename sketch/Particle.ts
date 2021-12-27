class Particle {
    x:number;
    y:number;
    startX:number;
    startY:number;
    d:number;
    opacity:number = 0;
    c:p5.Color = color(255, 0, 0);
    off:number;
    increment:number;
    initialNoise:number;

    constructor(x1:number, y1:number) {
        this.x = x1;
        this.y = y1;
        this.startX = this.x;
        this.startY = this.y;
        this.d = Math.ceil(random(1, 11));
        this.off = this.y;
        this.increment = random(0.0005, 0.0015);
    }

    display() {
        this.move();
        this.updateOpacity();

        fill(this.c);
        noStroke();
        ellipse(this.x, this.y, this.d, this.d);
    }

    move() {
        this.x++;
        if (this.off == this.y) this.initialNoise = noise(this.off);
        this.y = Math.ceil(this.startY + (noise(this.off) * height - this.initialNoise * height));
        this.off += this.increment;
    }

    updateOpacity() {
        this.opacity = Math.ceil(map(this.x, 0, width, 0, 255));
    }
}
