function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let seconds = second();
  let hours = hour();
  let minutes = minute();
  // The same as doing: background(220); or --> background(220,220,220);
  background(237, 237, 232);
  translate(width / 2, height / 2);
  rotate(-90);

  noFill();
  strokeWeight(10);

  //seconds
  stroke(218, 160, 252);
  let secondsarc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondsarc);

  //minutes
  stroke(198, 128, 229);
  let minutesarc = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minutesarc);

  //hours
  stroke(146, 69, 184);
  let hoursarc = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hoursarc);

  //seconds line
  push();
  stroke(157, 172, 255);
  rotate(secondsarc);
  line(0, 0, 150, 0);
  pop();

  //minutes line
  push();
  stroke(105, 118, 191);
  rotate(minutesarc);
  line(0, 0, 125, 0);
  pop();

  //hours line
  push();
  stroke(128, 127, 210);
  rotate(hoursarc);
  line(0, 0, 100, 0);
  pop();

  //text

  stroke(114, 57, 171);
  textSize(20);
  rotate(90);
  strokeWeight(1);
  text("12", 10, -175);

  stroke(114, 57, 171);
  textSize(20);
  strokeWeight(1);
  text("3", 175, 0);

  stroke(114, 57, 171);
  textSize(20);
  strokeWeight(1);
  text("6", 0, 175);

  stroke(114, 57, 171);
  textSize(20);
  strokeWeight(1);
  text("9", -165, 0);
}
