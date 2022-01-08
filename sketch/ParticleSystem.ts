class ParticleSystem {

    p:p5;

    particles:Array<Particle> = [];

    particleXOff:number;
    particleYOff:number;

    spawnSeconds:number = 0.3;
    spawnTimer:number = 0;

    hue:number = 0;
    hueIncrement:number;

    constructor(p1:p5, particleXOff1:number, particleYOff1:number, hueIncrement1:number) {
        this.p = p1;
        this.particleXOff = particleXOff1;
        this.particleYOff = particleYOff1;
        this.hueIncrement = hueIncrement1;
    }

    display() {
        this.updateParticles();
        this.spawnParticles();
    }

    spawnParticles() {
        this.spawnTimer++;

        if (this.spawnTimer > 60 * this.spawnSeconds) {
            this.particles.push(new Particle(this.p, this.particleXOff, this.p.height / 2 + this.particleYOff));
            this.particles[this.particles.length-1].c = this.p.color(this.hue, 80, 100, this.particles[this.particles.length-1].opacity);
            this.spawnTimer = 0;
        }
    }

    updateParticles() {
        this.p.colorMode(this.p.HSB, 360, 100, 100);

        this.hue += 0.15;
        if (this.hue > 360) this.hue = 0;

        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].display();
            this.particles[i].c = this.p.color(map(this.hue - this.hueIncrement, -this.hueIncrement, 360-this.hueIncrement, 0, 360), 70, 100, this.particles[i].opacity);

            if (this.particles[i].x > this.p.width) this.particles.splice(i, 1);
        }

        this.p.colorMode(this.p.RGB, 255);
    }
}
