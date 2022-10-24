
const GAME_SPEED = 5;
const FRAME_RATE = 60;

const nbOfPipes = 8;
const fixSize = "No";

const customWidth = 800;
const customHeight = 600;

const MAP_W_SUN_RATIO   = 1;
const MAP_H_SUN_RATIO   = 3;
const MAP_W_BG_RATIO    = 1;
const MAP_H_BG_RATIO    = 1.05;
const MAP_W_GRASS_RATIO = 1;
const MAP_H_GRASS_RATIO = 1;

let offsetBetweenPipes = 0;
let gameStatus = "pause";

let pipes = [];
let anim = [];

let song;
let flap;
let ocean;
let impact;


let score = 0;
let frameCounter = 0;

let last = new Date().getTime();

let titre;

let intro = true;

function preload() {
    // sound
    song = loadSound('assets/LazyBird.mp3');
    flap = loadSound('assets/wing_flap.mp3');
    ocean = loadSound('assets/ocean.mp3');
    impact = loadSound('assets/impact.mp3');
}


function setup() {
  if (fixSize == "Yes") {
    fixeSizeWindow(customWidth, customWidth);
  }

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  frameRate(FRAME_RATE);

  // Background
  mapSun  = new Map(0, 0, windowWidth / MAP_W_SUN_RATIO, windowHeight / MAP_H_SUN_RATIO, loadImage('assets/sun.png'));
  mapBg   = new Map(0, 0, windowWidth / MAP_W_BG_RATIO, windowHeight / MAP_H_BG_RATIO, loadImage('assets/bkg.png'));
  map     = new Map(0, 0, windowWidth / MAP_W_GRASS_RATIO, windowHeight / MAP_H_GRASS_RATIO, loadImage('assets/bkg_herbe.png'));

  // Obstaculo
  offsetBetweenPipes = (windowWidth / (nbOfPipes / 2));
  for (i=0; i < nbOfPipes; i+=2) {
    pipes[i] = new Obstaculo(windowWidth + i * offsetBetweenPipes, windowHeight - windowHeight / 2, "down", i, loadImage('assets/pipe_down.png'));
    pipes[i + 1]= new Obstaculo(windowWidth + i * offsetBetweenPipes, 0, "up", i, loadImage('assets/pipe_up.png'));
  }
  
  // Titre
  titre = loadImage('assets/titre.png');

  // Lazy
  anim.push(loadImage('assets/lazy1.png'));
  anim[1] = loadImage('assets/lazy2.png');
  anim[2] = loadImage('assets/lazy3.png');
  anim[3] = loadImage('assets/lazy4.png');
  anim[4] = loadImage('assets/lazy5.png');
  anim[5] = loadImage('assets/lazy_dead.png');
  lazy = new Lazy(windowWidth / 4, windowHeight / 2, windowHeight / 10, windowHeight / 10, anim);

  // bkg Lazy
  lazy2 = new Lazy(windowWidth/4, windowHeight / 4, windowHeight / 19, windowHeight / 19, anim);
  lazy3 = new Lazy(-windowWidth/4, windowHeight / 10, windowHeight / 16, windowHeight / 16, anim);
  lazy4 = new Lazy( windowWidth/2, windowHeight / 15, windowHeight / 14, windowHeight / 14, anim);

  score = 0;
}

function draw() {
  background(0, 255, 255);

  switch (gameStatus) {
    case 'play':
      drawBg(GAME_SPEED);
      drawBgLazy(GAME_SPEED);
      drawPipes(GAME_SPEED);
      drawLazy(GAME_SPEED);
      handleCollision();
      break;

    case 'pause':
      drawBg(0);
      drawBgLazy(-GAME_SPEED);
      drawPauseScreen();
      break;

    case 'gameOver':
      drawBg(0);
      drawBgLazy(-GAME_SPEED);
      drawPipes(0);
      lazy.die();
      drawGamOverScreen();
      break;
      
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }

  handleSound();
  printScore(gameStatus);
}

function drawBg(GAME_SPEED) {
  mapBg.moveX(GAME_SPEED/10);
  map.moveX(GAME_SPEED);
  mapSun.moveX(GAME_SPEED/50);
}

function drawPipes(GAME_SPEED) {
  for (i=0; i < nbOfPipes; i++) {  
    pipes[i].moveX(GAME_SPEED);
 }
}

function drawBgLazy(GAME_SPEED) {
  lazy2.moveX(GAME_SPEED/25);
  lazy3.moveX(GAME_SPEED/20);
  lazy4.moveX(GAME_SPEED/17);
}

function drawLazy(GAME_SPEED) {
  lazy.moveY();
}

function drawPauseScreen() {

  textSize(32);
  fill(255,255,255)
  text('PRESS UP TO JUMP', windowWidth/2, windowHeight/2);
  
  image(titre, windowWidth/2 - 200, windowHeight/2 - 150, 0, 0);
}

function drawGamOverScreen() {
  textSize(64);
  fill(255,0,0)
  text('GAME OVER', windowWidth/2, windowHeight/2);

  textSize(32);
  fill(255,255,255)
  text('PRESS UP TO RESTART', windowWidth/2, windowHeight/2 + windowHeight/10);
  
  //image(titre, windowWidth/2 - 200, windowHeight/2 - 150, 0, 0);
}

function handleCollision(){
  for (i=0; i < nbOfPipes; i+=2) {
    console.log((abs(lazy.x - pipes[i].x)),  pipes[i].width)

    if ((abs(lazy.x - pipes[i].x)) < lazy.width) {
      if (((lazy.y + lazy.height) < pipes[i].y && lazy.y > pipes[i+1].y + pipes[i+1].height)) {
        console.log("GOOOOD");
      }
      else {
        impact.play();
        gameStatus = "gameOver"
      }
    }
  }
}

function handleSound() {
  switch (gameStatus) {
    case 'play':
      if (!song.isPlaying()) {
        song.setVolume(0.3);
        //song.play();
      }
      if (!ocean.isPlaying()) {
        ocean.setVolume(0.5);
        ocean.play();
      }
      break;

    case 'pause':
      if (!ocean.isPlaying()) {
        ocean.setVolume(0.5);
        ocean.play();
      }
      break;

    case 'gameOver':
      if (!ocean.isPlaying()) {
        ocean.setVolume(0.5);
        ocean.play();
      }
      break;
      
    default:
      console.log(`Sorry, we are out of ${expr}.`);
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
    mapSun.resize();
    mapBg.resize();
    map.resize();
    for(i=0; i < nbOfPipes; i++) {pipes[i].resize();}
    lazy.resize();
    lazy2.resize();
    lazy3.resize();
    lazy4.resize();
  }
}

function handleUserAction() {
  if (lazy.jumpDetected != 1 && gameStatus == "play")
  {
    flap.play();
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

function keyPressed() {
  if (keyCode === UP_ARROW) {
    handleUserAction();
  }
}

function touchStarted() {
  handleUserAction();
  return false;
}