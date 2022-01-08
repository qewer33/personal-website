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

        this.system1 = new ParticleSystem(p, -200, Math.ceil(p.random(-100, 100)), 0);
        this.system2 = new ParticleSystem(p, -20, Math.ceil(p.random(-100, 100)), 30);
        this.system3 = new ParticleSystem(p, -350, Math.ceil(p.random(-100, 100)), 15);
    }

    p.draw = () => {
        p.fill(45, 60);
        p.rect(0, 0, p.width, p.height);

        this.system1.display();
        this.system2.display();
        this.system3.display();

        p.fill(45);
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
