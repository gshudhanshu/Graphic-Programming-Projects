function setup() {
  createCanvas(900, 600)
  background(0)
}

function draw() {
  var randomX = width / 2 + random(-100, 100)
  var randomY = height / 2 + random(-100, 100)
  this.prevLocation = new createVector(randomX, randomY)
}
