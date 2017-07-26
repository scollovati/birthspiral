function setup() {
  var widthdiv = document.getElementById("p5Canvas").offsetWidth;
  var myCanvas = createCanvas(widthdiv, 25);
  myCanvas.parent("p5Canvas");
}

function draw() {
  background(123);
}
