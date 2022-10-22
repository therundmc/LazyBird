
const speed = 5;
const nbOfPipes = 8;
const cframeRate = 60;
const fixSize = "No";
const noOfJmpRep = 15;

const customWidth = 800;
const customHeight = 600;

let offsetBetweenPipes = 0;
let gameStatus = "pause";

let pipes = [];
let song;

let jumpRep = 0;


function setup() {
  if (fixSize == "Yes") {
    fixeSizeWindow(customWidth, customWidth);
  }

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  stroke(255); // Set line drawing color to white
  frameRate(cframeRate);
  noLoop(); 

  // sound
  song = loadSound('assets/lazyBird.mp3');

  // Background
  mapSun = new Map(0, 0, windowWidth, windowHeight / 3, loadImage('assets/sun.png'));
  mapBg = new Map(0, 0, windowWidth, windowHeight - windowHeight / 20, loadImage('assets/bkg.png'));
  map = new Map(0, 0, windowWidth, windowHeight, loadImage('assets/bkg_herbe.png'));

  // Obstaculo
  offsetBetweenPipes = (windowWidth / (nbOfPipes / 2));
  for (i=0; i < nbOfPipes; i+=2) {
    pipes[i] = new Obstaculo(windowWidth + i * offsetBetweenPipes, windowHeight - windowHeight / 2, "down", i, loadImage('assets/pipe_down.png'));
    pipes[i + 1]= new Obstaculo(windowWidth + i * offsetBetweenPipes, 0, "up", i, loadImage('assets/pipe_up.png'));
  }

  // Lazy
  lazy = new Lazy(windowWidth / 4, windowHeight / 2, 100, 100, loadImage('assets/lazy.png'));

}

function draw() {
  background(50);

  if (gameStatus == "play") {

    mapBg.moveX(speed / 10);
    map.moveX(speed);
    mapSun.moveX(speed / 50);
  
    for (i=0; i < nbOfPipes; i++) {  
       pipes[i].moveX(speed);
    }
  
    if (lazy.jumpDetected != 0 && jumpRep < noOfJmpRep) { // TODO refactor jumpRep into lazy class
      jumpRep++;
      lazy.jumpY();
    }
    else if (jumpRep >= noOfJmpRep){
      lazy.moveY();
      jumpRep = 0;
    }
    else {
      lazy.moveY();
    }

    collision();
  }

  else if (gameStatus == "pause") {
    mapBg.draw(speed / 10);
    map.draw(speed);
    mapSun.draw(speed / 50);
    textSize(64);
    fill(255,255,255)
    text('PAUSE', windowWidth/2, windowHeight/2);
  }

  if (gameStatus == "gameOver") {
    lazy.die();
    noLoop(); 
  }
}

function fixeSizeWindow(width, height){
  windowWidth = width;
  windowHeight = height;
}

function collision(){
  for (i=0; i < nbOfPipes; i+=2) {
    console.log((abs(lazy.x - pipes[i].x)),  pipes[i].width)

    if ((abs(lazy.x - pipes[i].x)) < lazy.width) {
      if (((lazy.y + lazy.height) < pipes[i].y && lazy.y > pipes[i+1].y + pipes[i+1].height)) {
        console.log("GOOOOD");
      }
      else {
        gameStatus = "gameOver"
      }
    }
  }
}

function mousePressed(){
  if (gameStatus == "pause") {
    gameStatus = "play"
    loop();
  }
  else if (gameStatus == "play") {
    gameStatus = "pause"
  }
  else {
    gameStatus = "play"
    setup();
    loop();
  }

}

function windowResized() {
  if (fixSize == "Yes") {
    fixeSizeWindow(customWidth, customWidth);
  }
  else {
    mapSun.resize(windowWidth, windowHeight / 3);
    mapBg.resize(windowWidth, windowHeight - windowHeight / 20);
    map.resize(windowWidth, windowHeight);
  
    for (i=0; i < nbOfPipes; i++) {  
      pipes[i].resize(windowWidth, windowHeight);
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (lazy.jumpDetected != 1)
    {
      lazy.jumpDetected = 1;
    }
  }
}
