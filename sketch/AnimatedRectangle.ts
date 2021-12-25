class AnimatedRectangle {

    c:p5.Color = color(255);
    scale:number = 0;
    rotation:number = 0;
    
    rotationOffset:number = 0;
    
    constructor(c1:p5.Color, rotationOffset1:number) {
        this.c = c1;
        this.rotationOffset = rotationOffset1;
    }
    
    display() {
        rectMode(CENTER);
        
        if (!animPaused) this.animate();
        
        push();
        
        translate(width/2, height/2);
        rotate(radians(this.rotationOffset + this.rotation));
        
        fill(0, 0);
        stroke(this.c);
        strokeWeight(12*this.scale);
        rect(0, 0, min(width, height)*this.scale, min(width, height)*this.scale);
        
        pop();
        
        rectMode(CORNER);
    }
    
    animate() {
        this.scale += animSpeed;
        this.rotation += animSpeed*100;
    }

}