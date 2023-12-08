//Este ejemplo crea particulas en la posicion del ratón
//Cada particula nace con una vida aleatoria, y en cada fotograma se resta 1
//Cuando la vida llega a 0, la particula muere y se elimina del array

let p = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("#222222");

    p.forEach(particle => {
        particle.update();
        particle.show();
    });
    p = p.filter(particle => !particle.isDead());
    if(p.length < 1000){

        p.push(new Particle(noise(frameCount/200) * width, noise(frameCount/500) * height)); // Añade una nueva partícula en cada fotograma
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
