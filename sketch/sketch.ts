let sketch = (p: p5) => {

    this.canvas;

    this.system1;
    this.system2;
    this.system3;

    p.setup = () => {
        this.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        this.canvas.position(0, 0);
        this.canvas.style("z-index", "-1");
        p.pixelDensity(1);

        p.background(0);

        this.system1 = new ParticleSystem(p, 0, Math.ceil(p.random(-100, 100)), 0.1);
        this.system2 = new ParticleSystem(p, 0, Math.ceil(p.random(-100, 100)), 0.3);
        this.system3 = new ParticleSystem(p, 0, Math.ceil(p.random(-100, 100)), 0.05);
    }

    p.draw = () => {
        p.fill(0, p.random(15, 35));
        p.rect(0, 0, p.width, p.height);

        this.system1.display();
        this.system2.display();
        this.system3.display();

        p.fill(0);
        p.textSize(15);
        p.rect(15, 13, p.textWidth("60 FPS"), 15);
        p.fill(255);
        p.text(Math.ceil(p.frameRate()) + " FPS", 15, 25);
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

};

new p5(sketch);
