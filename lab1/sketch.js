function setup() {
    createCanvas(800,600);
}

function draw() {
    background('green');
    fill('darkgreen');
    stroke('black');
    for(var i = 0; i < 10000; i++){
        rect((i*10)%width,(i*10)%height,10,10);
        circle((i-10)%width,(i*10)%height,10,10);
    }
}