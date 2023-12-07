//Este codigo es imperativo, funciona, pero es dificil de escalar y mantener

let x
let y
let velX
let velY

function setup() {
  createCanvas(400, 400);
  x = width/2
  y = height/2
  velX = random(-1, 1)
  velY = random(-1, 1)
}

function draw() {
  background(220);
  ellipse(x, y, 20)
  x += velX
  y += velY
}