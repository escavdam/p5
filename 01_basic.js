
class Particle {
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.r = random(20);
        this.velX = random(-1, 1);
        this.velY = random(-1, 1);
        this.gray = random(255);
    }
    show(){
        ellipse(this.x, this.y, this.r);
    }
    update(){
        this.x += this.velX;
        this.y += this.velY;
    }
}

let particle;

function setup(){
    createCanvas(windowWidth, windowHeight);
        particle = new Particle();
}

function draw(){
    background(100);
    particle.show();
    particle.update();
}
