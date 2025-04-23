var input; // input box
var shootButton; // the FIRE! button
var stringText; // the text in the input box, stored as a string
var loaded = false; // checks to see if particles are being rendered
var arrayText = []; // the text in the input box, stored as an array
var particles = []; // object array where the text particles are stored

function setup() {
    createCanvas(300, 200);
    input = createInput('paste a block of text here!');
    shootButton = createButton('FIRE!');
    shootButton.mousePressed(function () {
        stringText = input.value();
        arrayText = stringText.split(" "); // grabs the text in the input box, then turns it into an array separated by spaces (source: https://www.w3schools.com/jsref/jsref_split.asp)
        loadCannon(arrayText); // passes the array to the next function
    })
}

function loadCannon(array) {
    if (loaded == false) { // checks to see if there are already particles in the array
        for (i = 0; i < array.length; i++) { // sets up a basic particle object for each word with randomized speed and colour
            var obj = {
                text: array[i],
                posx: 150,
                posy: 200,
                speedx: random(-7, 7), // source: https://p5js.org/reference/p5/random/
                speedy: random(0.2, 2),
                colour: color(random(255), random(255), random(255)), // https://p5js.org/reference/p5/color/
            }
            particles.push(obj); // referenced this to check syntax: https://www.w3schools.com/jsref/jsref_push.asp
            loaded = true;
        }
    }
}
function draw() {
    background('white');
    if (loaded) { // checks that there are particles onscreen before trying to draw them
        fire();
    }
}

function fire() { // i referenced the week 7 code to make this
    for (i = 0; i < particles.length; i++) {
        fill(particles[i].colour);
        text(particles[i].text, particles[i].posx, particles[i].posy);
    } // cycles through the particles and prints their text in the correct position and colour

    for (i = 0; i < particles.length; i++) {
        particles[i].posx += particles[i].speedx;
        particles[i].posy -= particles[i].speedy;
        // moves the particles by their speed each frame
    }
 
    particles = particles.filter(function(a){
        return a.posy > 0 && a.posx > 0 && a.posx < 300;
    }); // culls particles that go offscreen (function sourced from https://stackoverflow.com/questions/37077617/javascript-store-multiple-objects-in-array-and-access-their-properties-via)
    console.log(particles.length)
    if (particles.length == 0) {
        loaded = false;
    } // once there are no particles onscreen, the fire button is reenabled
 
}