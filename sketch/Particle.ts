class Particle {

    p:p5;

    x:number;
    y:number;
    startX:number;
    startY:number;
    d:number;
    opacity:number = 0;
    c:p5.Color;
    off:number;
    increment:number;
    initialNoise:number;

    constructor(p1:p5, x1:number, y1:number) {
        this.p = p1;
        this.x = x1;
        this.y = y1;
        this.startX = this.x;
        this.startY = this.y;
        this.d = Math.ceil(this.p.random(1, 11));
        this.c = this.p.color(255, 0, 0);
        this.off = this.y;
        this.increment = this.p.random(0.0005, 0.0015);
    }

    display() {
        this.move();
        this.updateOpacity();

        this.p.fill(this.c);
        this.p.noStroke();
        this.p.ellipse(this.x, this.y, this.d, this.d);
    }

    move() {
        this.x++;
        if (this.off == this.y) this.initialNoise = this.p.noise(this.off);
        this.y = Math.ceil(this.startY + (this.p.noise(this.off) * this.p.height - this.initialNoise * this.p.height));
        this.off += this.increment;
    }

    updateOpacity() {
        this.opacity = Math.ceil(this.p.map(this.x, 0, this.p.width, 0, 255));
    }
}
