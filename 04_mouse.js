//Este ejemplo crea particulas en la posicion del ratón
//Cada particula nace con una vida aleatoria, y en cada fotograma se resta 1
//Cuando la vida llega a 0, la particula muere y se elimina del array

let p = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    for (let i = p.length - 1; i >= 0; i--) {
        p[i].update();
        p[i].show();
        if (p[i].isDead()) {
            p.splice(i, 1);
        }
    }
    p.push(new Particle(mouseX, mouseY)); // Añade una nueva partícula en cada fotograma
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velX = random(-1, 1);
        this.velY = random(-1, 1);
        this.size = random(1, 20);
        this.life = random(20, 100);
    }
    update() {
        this.x += this.velX;
        this.y += this.velY;
        this.life--;
    }
    show() {
        fill(255);
        ellipse(this.x, this.y, this.size);
    }
    isDead() {
        return (this.life < 0);
    }
}
