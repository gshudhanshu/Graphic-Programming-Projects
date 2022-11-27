//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
// Adapted from https://github.com/nature-of-code/
// released under MIT license

var balls = []
////////////////////////////////////////////////////
function setup() {
  createCanvas(900, 600)
  rectMode(CENTER)
  // balls.push(new Ball())
}
////////////////////////////////////////////////////
function draw() {
  background(0)
  var squareColor = color(255, 0, 0)
  squareColor.setAlpha(128 + 128 * sin(millis() / 1000))
  fill(squareColor)
  rect(450, 300, 100, 100)

  balls.forEach(function (ball) {
    var gravity = createVector(0, 0.1)
    var friction = ball.velocity.copy()
    friction.mult(-1)
    friction.normalize()
    friction.mult(0.01)

    ball.applyForce(friction)
    ball.applyForce(gravity)

    ball.run()
  })
}
//////////////////////////////////////////////////////

function mouseDragged() {
  balls.push(new Ball(mouseX, mouseY))
}

class Ball {
  constructor(x, y) {
    this.velocity = new createVector(random(-3, 3), random(-3, 3))
    this.location = new createVector(x, y)
    this.acceleration = new createVector(0, 0)
    this.size = 40
    this.color = [random(0, 255), random(0, 255), random(0, 255)]
  }

  run() {
    this.draw()
    this.move()
    this.bounce()
  }

  draw() {
    fill(...this.color)
    if (
      this.location.x > 450 - 100 &&
      this.location.x < 450 + 100 &&
      this.location.y > 300 - 100 &&
      this.location.y < 300 + 100
    ) {
      this.color = [255, 0, 0]
    }
    ellipse(this.location.x, this.location.y, this.size, this.size)
  }

  move() {
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
  }

  bounce() {
    if (this.location.x > width - this.size / 2) {
      this.location.x = width - this.size / 2
      this.velocity.x *= -1
    } else if (this.location.x < this.size / 2) {
      this.velocity.x *= -1
      this.location.x = this.size / 2
    }
    if (this.location.y > height - this.size / 2) {
      this.velocity.y *= -1
      this.location.y = height - this.size / 2
    }
  }

  applyForce(force) {
    this.acceleration.add(force)
  }
}
