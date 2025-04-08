var colourer;
var bigness;
var textInput;
var styleChange;
var style = 0;

function setup(){
    createCanvas(720,300);
    colourer = createColorPicker('green');
    bigness = createSlider(0, 100, 0, 5); // puts all the objects in place
    textInput = createInput('type here!');
    styleChange = createButton('Change Style');
    styleChange.mousePressed(italicize);
    background('white');
}

function italicize(){
    style++;
    style = style % 4;
    console.log(style);
    switch(style){
        case 0:
            textStyle(NORMAL);
            break;
        case 1:
            textStyle(ITALIC);
            break;
        case 2:
            textStyle(BOLD);
            break;
        case 3:
            textStyle(BOLDITALIC);
            break;
    }
}

function draw(){
    textAlign(CENTER);
    fill(colourer.color()); // fetches the values from the DOM objects
    textSize(bigness.value());
    if(mouseIsPressed && mouseY<300){ // had to add the mouseY check to stop text from showing up when you interact with the objects
        text(textInput.value(), mouseX, mouseY);
    }
}