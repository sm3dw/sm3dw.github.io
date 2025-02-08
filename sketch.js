var xsize = 0;
var ysize = 0;

function setup(){
    createCanvas(500,500);
}

function draw(){
    background(0, 150, 50, green);
    fill('white');
    stroke('black');
    rect(0,0,xsize,ysize);
    xsize++
    ysize++
}