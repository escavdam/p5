//Este ejemplo crea particulas en la posicion del ratón
//Cada particula nace con una vida aleatoria, y en cada fotograma se resta 1
//Cuando la vida llega a 0, la particula muere y se elimina del array

let p = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(180);

    for (let i = p.length - 1; i >= 0; i--) {
        p[i].update();
        p[i].show();
        
    }
    p = p.filter(particle => !particle.isDead());
    if(p.length < 200){

        p.push(new Particle(noise(frameCount/100) * width, noise(frameCount/50) * height)); // Añade una nueva partícula en cada fotograma
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velX = random(-2, 2);
        this.velY = random(-2, 2);
        this.size = random(3, 30);
        this.color = random(["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#F9F871"])
    }
    update() {
        this.x += this.velX;
        this.y += this.velY;
        this.size -= 1;
    }
    show() {
        noStroke()
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
    isDead() {
        return (this.size < 0);
    }
}
