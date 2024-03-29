// Example is based on examples from:
// http://brm.io/matter-js/
// https://github.com/shiffman/p5-matter
// https://github.com/b-g/p5-matter-examples

// module aliases
var Engine = Matter.Engine
var Render = Matter.Render
var World = Matter.World
var Bodies = Matter.Bodies
var Composites = Matter.Composites
var Composite = Matter.Composite
var Body = Matter.Body

var engine
var ball
var ground
var stack

function setup() {
  createCanvas(1200, 600)

  // create an engine
  engine = Engine.create()

  ball = Bodies.circle(30, 0, 20, {
    restitution: 1,
    friction: 0,
    density: 0.003,
  })

  var options = { isStatic: true, angle: Math.PI * 0 }
  ground = Bodies.rectangle(width / 2, 500, width, 10, options)
  smallGround = Bodies.rectangle(50, 470, 100, 10, {
    isStatic: true,
    angle: Math.PI * 0.2,
  })

  // add all of the bodies to the world
  World.add(engine.world, [ground, ball, smallGround])

  setupDominoes()
}
/////////////////////////////////////////////////////////
function draw() {
  background(0)
  Engine.update(engine)

  fill(255)
  drawVertices(ball.vertices)

  drawDominoes()

  fill(128)
  drawVertices(ground.vertices)
  drawVertices(smallGround.vertices)
}
/////////////////////////////////////////////////////////
function setupDominoes() {
  // your code here
  let size = 50
  stack = Composites.stack(
    150,
    600 - 17 - size * 6,
    20,
    1,
    20,
    0,
    function (x, y) {
      var partA = Bodies.rectangle(x, y, size / 5, size * 3)

      return Body.create({
        parts: [partA],
      })
    }
  )
  Composite.add(engine.world, stack)
}
/////////////////////////////////////////////////////////
function drawDominoes() {
  // your code here
  for (var i = 0; i < stack.bodies.length; i++) {
    var vertices = stack.bodies[i].vertices
    drawVertices(vertices)
  }
}
/////////////////////////////////////////////////////////
// ********* HELPER FUNCTIONS **********
/////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape()
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y)
  }
  endShape(CLOSE)
}
