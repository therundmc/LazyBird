
let img;
let imgBack;

const speed = 20;



function setup() {
  createCanvas(windowWidth, windowHeight);

  stroke(255); // Set line drawing color to white
  frameRate(60);
  noLoop(); 

  mapBg = new Map(0, 0, windowWidth, windowHeight - windowHeight / 20, loadImage('assets/bkg.png'));
  map = new Map(0, 0, windowWidth, windowHeight, loadImage('assets/bkg_herbe.png'));
  pipe2 = new Obstaculo(windowWidth - 200, windowHeight - windowHeight / 2, 100, windowHeight, loadImage('assets/pipe.png'));
}

function draw() {
  background(25);
  mapBg.moveX(1)
  map.moveX(speed);
  pipe2.moveX(speed);

}

function mousePressed(){
  loop();
}

function windowResized() {
  mapBg.resized(windowWidth, windowHeight - windowHeight / 20);
  map.resized(windowWidth, windowHeight);
}
