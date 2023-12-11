let imgs = []

function preload(){
  for(let i=1; i < 800; i++){
  imgs.push(loadImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`))  
 
  }     
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  imageMode(CENTER);
  noSmooth();
  
}

function draw() {
  image(random(imgs), random(width), random(height))
}