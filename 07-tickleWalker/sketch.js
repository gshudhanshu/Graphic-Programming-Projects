function setup() {
  createCanvas(900, 600)
  background(0)
  tickle = new Tickle()
}

function draw() {
  background(0)
  tickle.move(mouseX, mouseY)
  tickle.display()
}

// Tickler Walker
class Tickle {
  constructor() {
    this.circle = createVector(width / 2, height / 2)
    this.diameter = random(30, 100)
    this.speed = 10
  }

  move(mouseX, mouseY) {
    let mouse = createVector(mouseX, mouseY)
    if (p5.Vector.dist(this.circle, mouse) < this.diameter / 2) {
      this.circle.x += random(-this.speed, this.speed)
      this.circle.y += random(-this.speed, this.speed)
    }
  }

  display() {
    fill(255)
    ellipse(this.circle.x, this.circle.y, this.diameter, this.diameter)
  }
}
