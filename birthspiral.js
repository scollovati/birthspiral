var input, button, greeting;

function setup() {
  var myCanvas = createCanvas(400,400);
  myCanvas.parent("p5Canvas");
  background(0);
}

function drawTurtle() {
      var userInput = document.getElementById("userInput").value;

      background(0);

      var turtle = makeTurtle(130, 80);
      turtle.penDown();
      turtle.setColor(255, 0, 0);
      for (var i = 0; i < 1000; i++) {
          turtle.forward(150);
          turtle.right(141.5);
          turtle.forward(60);
          if (i % 20 === 0) {
              turtle.forward(70);
          }
      }
}

//=======================================================
// TURTLE GRAPHICS IMPLEMENTATION
// Roger Dannenberg, 2016
//
// makeTurtle(x, y) -- make a turtle at x, y, facing right, pen down
// left(d) -- turn left by d degrees
// right(d) -- turn right by d degrees
// forward(p) -- move forward by p pixels
// back(p) -- move back by p pixels
// penDown() -- pen down
// penUp() -- pen up
// goto(x, y) -- go straight to this location
// setColor(color) -- set the drawing color
// setWeight(w) -- set line width to w
// face(d) -- turn to this absolute direction in degrees
// angleTo(x, y) -- what is the angle from my heading to location x, y?
// turnToward(x, y, d) -- turn by d degrees toward location x, y
// distanceTo(x, y) -- how far is it to location x, y?

function turtleLeft(d) {
    this.angle -= d;
}


function turtleRight(d) {
    this.angle += d;
}


function turtleForward(p) {
    var rad = radians(this.angle);
    var newx = this.x + cos(rad) * p;
    var newy = this.y + sin(rad) * p;
    this.goto(newx, newy);
}


function turtleBack(p) {
    this.forward(-p);
}


function turtlePenDown() {
    this.penIsDown = true;
}


function turtlePenUp() {
    this.penIsDown = false;
}


function turtleGoTo(x, y) {
    if (this.penIsDown) {
      stroke(this.color);
      strokeWeight(this.weight);
      line(this.x, this.y, x, y);
    }
    this.x = x;
    this.y = y;
}


function turtleDistTo(x, y) {
    return sqrt(sq(this.x - x) + sq(this.y - y));
}


function turtleAngleTo(x, y) {
    var absAngle = degrees(atan2(y - this.y, x - this.x));
    var angle = ((absAngle - this.angle) + 360) % 360.0;
    return angle;
}


function turtleTurnToward(x, y, d) {
    var angle = this.angleTo(x, y);
    if (angle < 180) {
        this.angle += d;
    } else {
        this.angle -= d;
    }
}


function turtleSetColor(c) {
    this.color = c;
}


function turtleSetWeight(w) {
    this.weight = w;
}


function turtleFace(angle) {
    this.angle = angle;
}


function makeTurtle(tx, ty) {
    var turtle = {x: tx, y: ty,
                  angle: 0.0,
                  penIsDown: true,
                  color: color(128),
                  weight: 1,
                  left: turtleLeft, right: turtleRight,
                  forward: turtleForward, back: turtleBack,
                  penDown: turtlePenDown, penUp: turtlePenUp,
                  goto: turtleGoTo, angleto: turtleAngleTo,
                  turnToward: turtleTurnToward,
                  distanceTo: turtleDistTo, angleTo: turtleAngleTo,
                  setColor: turtleSetColor, setWeight: turtleSetWeight,
                  face: turtleFace};
    return turtle;
}
