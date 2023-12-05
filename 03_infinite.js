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

    console.log(p.length);

    p.push(new Particle()); // Añade una nueva partícula en cada fotograma
}

class Particle {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.velX = random(-1, 1);
        this.velY = random(-1, 1);
        this.size = random(1, 20);
    }

    update() {
        this.x += this.velX;
        this.y += this.velY;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, this.size);
    }

    isDead() {
        return (this.x > width || this.x < 0 || this.y > height || this.y < 0);
    }
}
