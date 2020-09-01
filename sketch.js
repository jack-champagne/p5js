function setup() {
    createCanvas(400, 400, WEBGL);
    frameRate(60);
    noFill();
    var button = createButton('click me');
    button.position(19, 19);
    button.mousePressed(resetPos);

    slider = createSlider(0, 10, 1);
    slider.position(40, 40);
    slider.style('width', '100px');
}
  
var xTranslate = 0;
var yTranslate = 0;
var zTranslate = 0;
var tSpeed = 1;
var xAngle = 0;
var yAngle = 0;
var zoom = 1;
function draw() {
    tSpeed = slider.value();

    if (keyIsDown(87)) {
        zTranslate += tSpeed;
    }
    if (keyIsDown(83)) {
        zTranslate -= tSpeed;
    }
    if (keyIsDown(65)) {
        xTranslate += tSpeed;
    }
    if (keyIsDown(68)) {
        xTranslate -= tSpeed;
    }
    if (keyIsDown(16)) {
        yTranslate += tSpeed;
    }
    if (keyIsDown(17)) {
        yTranslate -= tSpeed;
    }

    // BEGIN draw of scene
    background(255);
    push();
    translate(xTranslate, yTranslate, zTranslate);
    scale(zoom);
    rotateX(yAngle);
    rotateY(-xAngle);
    box(50);
    pop();
    
    // DRAW static elements
    fill(100);
    stroke(100);
    rect(-1, -8, 2, 16);
    rect(-8, -1, 16, 2);
    noFill();
}

function resetPos() {
    console.log("Made it!");
    xTranslate = 0;
    yTranslate = 0;
    zTranslate = 0;
    zoom = 1;
    xAngle = 0;
    yAngle = 0;
}
  
var mouseScale = 0.02;
function mouseDragged() {
    xAngle += (pmouseX - mouseX) * mouseScale;
    yAngle += (pmouseY - mouseY) * mouseScale;
    return false;
}
  
var scrollScale = 0.02;
function mouseWheel(event) {
    zoom /= 1 + (event.delta * scrollScale);
    mouseScale = 0.02 / zoom;
    return false;
}