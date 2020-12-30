// Introduction to Conditional Statements
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/3.1-conditional-statements.html
// https://youtu.be/1Osb_iGDdjk
// https://editor.p5js.org/codingtrain/sketches/z_yjYIha


function setup() {

  createCanvas(600, 400);
}

function draw() {
  var randomGreen = random(0, 255);
  var randomRed = random(0, 255);
  var randomBlue = random(0, 255);
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();

  if ( 350 > mouseX && mouseX > 250 && mouseY > 150 && mouseY < 250) {
    fill(randomGreen, randomRed, randomBlue);
  }

  ellipse(300, 200, 100, 100);
}
