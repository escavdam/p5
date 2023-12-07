const input0 = document.getElementById('input0');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(200);
}

function draw(){
    let x = noise(frameCount/input0.value) * width;
    let y = noise(frameCount/input1.value + 100) * height;
    ellipse(x, y, input2.value);
}

function reset(){
    background(200);
}