class ParticleSystem {

    particles:Array<Particle> = [];

    particleXOff:number;
    particleYOff:number;

    spawnSeconds = 0.1;
    spawnTimer = 0;

    hue = 0;
    hueIncrement:number;

    constructor(particleXOff1:number, particleYOff1:number, hueIncrement1:number) {
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
            this.particles.push(new Particle(this.particleXOff, height / 2 + this.particleYOff));
            this.spawnTimer = 0;
        }
    }

    updateParticles() {
        colorMode(HSB, 360, 100, 100);

        this.hue += this.hueIncrement;
        if (this.hue > 360) this.hue = 0;

        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].display();
            this.particles[i].c = color(this.hue, 100, 100, this.particles[i].opacity);

            if (this.particles[i].x > width) this.particles.splice(i, 1);
        }

        colorMode(RGB, 255);
    }
}
