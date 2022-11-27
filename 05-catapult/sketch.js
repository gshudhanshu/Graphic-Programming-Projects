// Example is based on examples from:
// http://brm.io/matter-js/
// https://github.com/shiffman/p5-matter
// https://github.com/b-g/p5-matter-examples

// module aliases
var Engine = Matter.Engine
var Render = Matter.Render
var World = Matter.World
var Bodies = Matter.Bodies
var Constraint = Matter.Constraint

var engine
var ground

var ball1
var ball2

var catapult
var catapultSpacer
var constraint

function setup() {
  createCanvas(800, 600)
  engine = Engine.create() // create an engine
  setupCatapult()
  setupBalls()
  setupGround()
}
/////////////////////////////////////////////////////////////
function draw() {
  background(0)
  Engine.update(engine)
  drawBalls()
  drawCatapult()
  drawGround()
}
/////////////////////////////////////////////////////////////
function setupCatapult() {
  // your code here
  catapult = Bodies.rectangle(500, 100, 100, 20, { isStatic: true })
  // catapultSpacer = Bodies.rectangle(100, 100, 20, 20, { isStatic: true })
  constraint = Constraint.create({
    pointA: { x: width / 2, y: height - 20 },
    bodyB: catapult,
  })

  World.add(engine.world, [catapult])
}
/////////////////////////////////////////////////////////////
function drawCatapult() {
  // your code here
}
/////////////////////////////////////////////////////////////
function setupBalls() {
  // your code here
}
/////////////////////////////////////////////////////////////
function drawBalls() {
  // your code here
}
/////////////////////////////////////////////////////////////
function setupGround() {
  ground = Bodies.rectangle(400, height - 10, 810, 25, { isStatic: true })
  World.add(engine.world, [ground])
}
/////////////////////////////////////////////////////////////
function drawGround() {
  noStroke()
  fill(128)
  drawVertices(ground.vertices)
}
////////////////////////////////////////////////////////////////
// ******* HELPER FUNCTIONS *********
// DO NOT WRITE BELOW HERE
/////////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape()
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y)
  }
  endShape(CLOSE)
}
