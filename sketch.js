const SIZE = 300;
const RADIOS = SIZE - 50;
const CENTER = SIZE / 2;

function setup() {
    createCanvas(SIZE, SIZE);
    angleMode(DEGREES);

}

function draw() {
    background(0);
    translate(CENTER, CENTER);
    rotate(-90);

    const hr = hour();
    const mn = minute();
    const sc = second();

    const secondAngle = map(sc, 0, 60, 0, 360);
    const minuteAngle = map(mn, 0, 60, 0, 360);
    const hourAngle = map(hr % 12, 0, 12, 0, 360);

    // draw circle
    strokeWeight(10);
    stroke(255);
    noFill();
    ellipse(0, 0, RADIOS, RADIOS);

    // draw minutes line
    strokeWeight(10);
    stroke(150, 100, 255);
    push();
    rotate(minuteAngle);
    line(0, 0, RADIOS / 2 - 15, 0);
    pop();

    // draw hours line
    strokeWeight(10);
    stroke(150, 255, 100);
    push();
    rotate(hourAngle);
    line(0, 0, RADIOS / 3.5, 0);
    pop();

    // draw seconds fill
    strokeWeight(6);
    stroke(255, 100, 150);
    noFill();
    arc(0, 0, RADIOS, RADIOS, 0, secondAngle);

    // draw seconds line
    push();
    rotate(secondAngle);
    line(0, 0, RADIOS / 2 - 15, 0);
    pop();

    // draw middle point
    strokeWeight(15);
    stroke(255);
    point(0, 0);

}