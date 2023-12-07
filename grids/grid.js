const inputRows = document.querySelector(".input-rows")
const inputCols = document.querySelector(".input-cols")
const tileSize = document.querySelector(".tile-size")
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(120);
}

function draw(){
    background(120);
    const rows = inputRows.value;
    const cols = inputCols.value;
    const w = tileSize.value;
    const h = tileSize.value;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            const x = j * w;
            const y = i * h;
            rect(x, y, w, h);
        }
    }
}