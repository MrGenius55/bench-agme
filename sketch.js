let man;
let watch;
let coffee;
let button1;
let button2;
function preload() {
  man = loadImage('man .png');
  watch=createImg('man checks watch.gif');
  coffee = createImg('man drinks coffee.gif');
  button1 = createButton('Drink Coffee');
  button1.position(0, 200);
button2 = createButton('Check Watch');
  button2.position(100, 200);
}

function setup() {
  createCanvas(200, 400);
background(220,220,50);

}

function draw() {
image(man,0,0);
 
}

function playgif() {
background(220,220,50);
 coffee.position(0,0);

}
function playgif2() {
background(220,220,50);
  watch.position(0,0);

}