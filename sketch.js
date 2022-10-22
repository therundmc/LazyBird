
const speed = 10;
const nbOfPipes = 8;
const cframeRate = 60;

let offsetBetweenPipes = 0;
let gameStatus = "pause";

let pipes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  stroke(255); // Set line drawing color to white
  frameRate(cframeRate);
  noLoop(); 

  // Background
  mapSun = new Map(0, 0, windowWidth, windowHeight / 3, loadImage('assets/sun.png'));
  mapBg = new Map(0, 0, windowWidth, windowHeight - windowHeight / 20, loadImage('assets/bkg.png'));
  map = new Map(0, 0, windowWidth, windowHeight, loadImage('assets/bkg_herbe.png'));

  // Obstaculo
  offsetBetweenPipes = (windowWidth / (nbOfPipes / 2));
  for (i=0; i < nbOfPipes; i+=2) {
    pipes[i] = new Obstaculo(windowWidth + i * offsetBetweenPipes, windowHeight - windowHeight / 2, 2, "down", i, loadImage('assets/pipe_down.png'));
    pipes[i + 1]= new Obstaculo(windowWidth + i * offsetBetweenPipes, 0, 2, "up", i, loadImage('assets/pipe_up.png'));
  }
}

function draw() {
  background(50);

  mapBg.moveX(speed / 10);
  map.moveX(speed);

  mapSun.moveX(speed / 50);

  for (i=0; i < nbOfPipes; i++) {  
     pipes[i].moveX(speed);
  }
}

function mousePressed(){
  if (gameStatus == "pause") {
    gameStatus = "play"
    loop();
  }
  else {
    gameStatus = "pause"
    noLoop(); 
  }

}

function windowResized() {
  mapSun.resize(windowWidth, windowHeight / 3);
  mapBg.resize(windowWidth, windowHeight - windowHeight / 20);
  map.resize(windowWidth, windowHeight);

  for (i=0; i < nbOfPipes; i++) {  
    pipes[i].resize(windowWidth, windowHeight);
 }
}
