function setup() {
    createCanvas(800,600);
}
var rectangle = {
    x:0,
    y:0,
    height:5,
    width:5,
    colour:'purple',
}
var circ = {
    x:800,
    y:600,
    diameter:1500,
    colour:'blue',
}
function draw() {
    background('green');
    fill(rectangle.colour);
    rect(rectangle.x,rectangle.y,rectangle.width++,rectangle.height++);
    fill(circ.colour)
    circle(circ.x,circ.y,circ.diameter--)
}