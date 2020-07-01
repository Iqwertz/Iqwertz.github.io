var  x = 0;
var  y = 0;
var  xSpeed = 3;
var  ySpeed = 3;
var  logo;
var i=3;
var trueWidth=true

var nBounce = 0;
function preload(){
    logo=loadImage('data/logo3.png');
}
function setup() {
      var  canvas=createCanvas(windowWidth, windowHeight);    //define Canvas
    canvas.parent('DVD');    
    //fullscreen();
    background(0);
    logo.resize(width/10,width/10); 
    fill(255);
    strokeWeight(3);

    dropzone = select('#dropzone');
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);
    dropzone.drop(gotFile, unhighlight);
}

function draw() {
    background(0);
    x += xSpeed;
    y += ySpeed;
    if(!trueWidth){
        logo.resize(width/10, width/10);
        trueWidth=true;
    }
    if(logo.width!=width/10){
        trueWidth=false;
    }
    if (x >= width-width/10 || x <= 0) {
        xSpeed *= -1;
        nBounce ++;
    }
    if (y >= height-width/10 || y <= 0) {
        ySpeed *= -1;
        nBounce ++;
    }
    image(logo, x, y);
}

function gotFile(file) {
    logo = loadImage(file.data);
    trueWidth=false;
}

function highlight() {
    dropzone.style('background-color','#ccc');
}

function unhighlight() {
    dropzone.style('background-color','#fff');
}

function keyPressed() {
    if (key==' ') {
        if (i<3) {
            i++;
        } else {
            i=1;
        }
        logo=loadImage('data/logo'+i+'.png');
        trueWidth=false;
    }
}
