//Este ejemplo crea particulas en el centro de la pantalla continuamente
//Controlamos el numero de particulas en el array comprobando si salen fuera de la pantalla
//Para evitar que la longitud del array se modifique mientras lo recorremos, lo hacemos al reves
//De esta manera, si eliminamos un elemento, no afecta a los que quedan por recorrer
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
