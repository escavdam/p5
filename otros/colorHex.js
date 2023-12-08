function generateHex(){
    return Math.floor(Math.random() * 255).toString(16).padStart(2, "0")
  }
  
function generateColorHex(){
    return `#${generateHex()}${generateHex()}${generateHex()}`
  }

function generateHueGradient(n_colors){
    let hue = random(255)
    let lightness = 255
    let saturation = 255
    let colors = []
    let step = 255 / n_colors
    for(let i = 0; i < n_colors; i++){
    colorMode(HSB)
      colors.push(color(hue, saturation, lightness))
      lightness -= step
    }
    return colors
}

function setup(){
  createCanvas(400, 400)
  background(generateColorHex())
  console.log(generateHueGradient(5))
}
  
  console.log(generateColorHex())
