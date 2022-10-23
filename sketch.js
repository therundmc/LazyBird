
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
let anim = [];

let song;

let jumpRep = 0;

let score = 0;
let frameCounter = 0;

let last = new Date().getTime();



function setup() {
  if (fixSize == "Yes") {
    fixeSizeWindow(customWidth, customWidth);
  }

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  stroke(255); // Set line drawing color to white
  frameRate(cframeRate);

  //noLoop(); 

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
  anim.push(loadImage('assets/lazy1.png'));
  anim[1] = loadImage('assets/lazy2.png');
  anim[2] = loadImage('assets/lazy3.png');
  anim[3] = loadImage('assets/lazy4.png');
  anim[4] = loadImage('assets/lazy5.png');
  anim[5] = loadImage('assets/lazy_dead.png');
  lazy = new Lazy(windowWidth / 4, windowHeight / 2, windowHeight / 10, windowHeight / 10, anim);

  // bkg Lazy
  lazy2 = new Lazy(windowWidth/4, windowHeight / 4, windowHeight / 25, windowHeight / 25, anim);
  lazy3 = new Lazy(-windowWidth/4, windowHeight / 10, windowHeight / 20, windowHeight / 20, anim);
  lazy4 = new Lazy( windowWidth/2, windowHeight / 15, windowHeight / 17, windowHeight / 17, anim);

  score = 0;
}

function draw() {
  background(0, 255, 255);

  switch (gameStatus) {
    case 'play':
      drawBg(speed);
      drawBgLazy(speed);
      drawPipes(speed);
      drawLazy(speed);
      handleCollision();
      break;

    case 'pause':
      drawBg(0);
      drawBgLazy(-speed);
      drawPauseScreen();
      break;

    case 'gameOver':
      drawBg(0);
      drawBgLazy(-speed);
      drawPipes(0);
      lazy.die();
      drawGamOverScreen();
      break;
      
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }

  printScore(gameStatus);
}

function drawBg(speed) {
  mapBg.moveX(speed / 10);
  map.moveX(speed);
  mapSun.moveX(speed / 50);
}

function drawPipes(speed) {
  for (i=0; i < nbOfPipes; i++) {  
    pipes[i].moveX(speed);
 }
}

function drawBgLazy(speed) {
  lazy2.moveX(speed/25);
  lazy3.moveX(speed/20);
  lazy4.moveX(speed/17);
}

function drawLazy(speed) {
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
}

function drawPauseScreen() {
  textSize(64);
  fill(255,255,255)
  text('PLAY', windowWidth/2, windowHeight/2);
  textSize(32);
  fill(255,255,255)
  text('PRESS UP TO JUMP', windowWidth/2, windowHeight/2 + windowHeight/10);
}

function drawGamOverScreen() {
  textSize(64);
  fill(255,0,0)
  text('GAME OVER', windowWidth/2, windowHeight/2);

  textSize(32);
  fill(255,255,255)
  text('PRESS UP TO RESTART', windowWidth/2, windowHeight/2 + windowHeight/10);
}

function handleCollision(){
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

function printScore(gameStatus) {
  if (gameStatus == "play") {
    frameCounter++;
    if (frameCounter > 150) {
      score++;
      frameCounter = 0;
    }
  }
  if (gameStatus != "pause") {
    textSize(128);
    fill(0,0,0)
    text(score, 75, 100);
  }
}

function fixeSizeWindow(width, height){
  windowWidth = width;
  windowHeight = height;
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
    lazy.resize(windowHeight / 10, windowHeight / 10);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (lazy.jumpDetected != 1 && gameStatus == "play")
    {
      lazy.jumpDetected = 1;
    }
    else if (gameStatus == "pause") {
      gameStatus = "play"
    }
    else if (gameStatus == "gameOver") {
      gameStatus = "play"
      setup();
    }
  }
}
