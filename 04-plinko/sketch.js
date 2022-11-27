// Example is based on examples from:
// http://brm.io/matter-js/
// https://github.com/shiffman/p5-matter
// https://github.com/b-g/p5-matter-examples

// module aliases
var Engine = Matter.Engine
var Render = Matter.Render
var World = Matter.World
var Bodies = Matter.Bodies

var engine
var balls = []
var ground
var plinkos = []

function setup() {
  createCanvas(900, 600)

  engine = Engine.create() // create an engine
  setupGround()
  setupPins()
  generateNewBall()
}
///////////////////////////////////////////////////////////
function draw() {
  background(0)
  Engine.update(engine)

  drawPins()
  drawBalls()
  drawGround()
}
///////////////////////////////////////////////////////////
function keyPressed() {
  generateNewBall()
}
///////////////////////////////////////////////////////////
function setupGround() {
  //your code here
  ground = Bodies.rectangle(width / 2, height - 10, width, 10, {
    isStatic: true,
  })
  World.add(engine.world, [ground])
}
///////////////////////////////////////////////////////////
function drawGround() {
  //your code here
  push()
  fill(125)
  strokeWeight(0)
  rectMode(RADIUS)
  rect(ground.position.x, ground.position.y, width, 10)
  pop()
}
///////////////////////////////////////////////////////////
function setupPins() {
  //plinko wall
  var options = { isStatic: true, restitution: 1 }
  var cols = 15
  var rows = 9
  var spacing = width / cols
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var x = i * spacing
      if (j % 2 == 0) {
        x += spacing / 2
      }
      var y = spacing + j * spacing

      var p = Bodies.circle(x, y, 10, options)
      World.add(engine.world, [p])
      plinkos.push(p)
    }
  }
}
///////////////////////////////////////////////////////////
function drawPins() {
  fill(255, 200, 0)
  for (var i = 0; i < plinkos.length; i++) {
    drawVertices(plinkos[i].vertices)
  }
}
///////////////////////////////////////////////////////////
function generateNewBall() {
  //your code here
  var b = Bodies.circle(width / 2, 0, random(10, 20), {
    restitution: 1,
  })
  balls.push(b)
  World.add(engine.world, [b])
}
///////////////////////////////////////////////////////////
function drawBalls() {
  //your code here
  for (var i = 0; i < balls.length; i++) {
    fill('red')
    ellipse(balls[i].position.x, balls[i].position.y, balls[i].circleRadius * 2)
  }
}

///////////////////////////////////////////////////////////
// **** HELPER FUNCTIONS ****
// DO NOT WRITE BELOW THIS LINE
///////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape()
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y)
  }
  endShape(CLOSE)
}
