var myTurtle, step;
var started = false;

function setup() {
  var myCanvas = createCanvas(800,400);
  myCanvas.parent("p5Canvas");
  background(0);

  frameRate(60);

  myTurtle = new makeTurtle(width/2, height/2);
}

function draw() {
  if(started){
    //userInput can be used for varying Turtle's parameters
    var userInput = document.getElementById("userInput").value;

    myTurtle.forward(step);
    myTurtle.left(userInput);
    step = step + 5;
    myTurtle.setColor(color(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1)));
    //if (myTurtle.y > height || myTurtle.x > width) resetCanvas();
  }
}

function start() {
  if(!document.getElementById("userInput").checkValidity())
  {
    //show errors
    alert("Birth date not valid!");
    started = false;
  }else
  {
    started = true;
    resetCanvas();
  }

}

function resetCanvas() {
    background(0);
    myTurtle.setColor(color(255,200,200));
    myTurtle.setWeight(5);
    myTurtle.penUp();
    myTurtle.goto(width/2, height/2);
    myTurtle.penDown();
    step = 10;
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
