
class Particle {
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.r = random(20);
        this.velX = random(-1, 1);
        this.velY = random(-1, 1);
    }
    show(){
        ellipse(this.x, this.y, this.r);
    }
    update(){
        this.x += this.velX;
        this.y += this.velY;
    }
}

let particles = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < 100; i++){
        particles.push(new Particle());
    }
}

function draw(){
    background(100);
    for(let i = 0; i < particles.length; i++){
        particles[i].show();
        particles[i].update();
    }
}
