//Este ejemplo crea particulas en el centro de la pantalla continuamente
//Controlamos el numero de particulas en el array comprobando si salen fuera de la pantalla
//Para evitar que la longitud del array se modifique mientras lo recorremos, lo hacemos al reves
//De esta manera, si eliminamos un elemento, no afecta a los que quedan por recorrer
let p = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(120);

    for (let i = p.length - 1; i >= 0; i--) {
        p[i].update();
        p[i].show();
    }
    p = p.filter(particle => !particle.isDead());
    if(p.length < 200){
        p.push(new Particle()); // Añade una nueva partícula en cada fotograma

    }
}

class Particle {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.velX = random(-1, 1);
        this.velY = random(-1, 1);
        this.size = random(1, 50);
        this.grey = random(0, 160);
    }

    update() {
        this.x += this.velX;
        this.y += this.velY;
    }

    show() {
        fill(this.grey);
        ellipse(this.x, this.y, this.size);
    }

    isDead() {
        return (this.x > width+100 || this.x < 0-100 || this.y > height+100 || this.y < 0-100);
    }
}
