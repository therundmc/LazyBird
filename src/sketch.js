/**
 * @file LazyBird main app file.
 * @copyright therundmc & weirdaz - 2022
 */

function preload() {
  // Sounds
  soundList[SOUND_LIST.SONG] = loadSound('assets/LazyBird.mp3');
  soundList[SOUND_LIST.FLAP] = loadSound('assets/wing_flap.mp3');
  soundList[SOUND_LIST.OCEAN] = loadSound('assets/ocean.mp3');
  soundList[SOUND_LIST.IMPACT] = loadSound('assets/impact.mp3');

  // Images
  imgList[IMAGE_LIST.BKG_SUN] = loadImage('assets/sun.png');
  imgList[IMAGE_LIST.BKG] = loadImage('assets/bkg.png');
  imgList[IMAGE_LIST.BKG_GRASS] = loadImage('assets/bkg_herbe.png');
  imgList[IMAGE_LIST.PIPE_DOWN] = loadImage('assets/pipe_down.png');
  imgList[IMAGE_LIST.PIPE_UP] = loadImage('assets/pipe_up.png');
  imgList[IMAGE_LIST.TITLE] = loadImage('assets/titre.png');

  // Animations
  animLazy.push(loadImage('assets/lazy1.png'));
  animLazy[1] = loadImage('assets/lazy2.png');
  animLazy[2] = loadImage('assets/lazy3.png');
  animLazy[3] = loadImage('assets/lazy4.png');
  animLazy[4] = loadImage('assets/lazy5.png');
  animLazy[5] = loadImage('assets/lazy_dead.png');
  
  animBuddy.push(loadImage('assets/buddy1.png'));
  animBuddy[1] = loadImage('assets/buddy2.png');
  animBuddy[2] = loadImage('assets/buddy3.png');
  animBuddy[3] = loadImage('assets/buddy4.png');
  animBuddy[4] = loadImage('assets/buddy5.png');
  animBuddy[5] = loadImage('assets/buddy_dead.png');
  
  animBaddy.push(loadImage('assets/baddy1.png'));
  animBaddy[1] = loadImage('assets/baddy2.png');
  animBaddy[2] = loadImage('assets/baddy3.png');
  animBaddy[3] = loadImage('assets/baddy4.png');
  animBaddy[4] = loadImage('assets/baddy5.png');
  animBaddy[5] = loadImage('assets/baddy_dead.png');
  
  animCrazy.push(loadImage('assets/crazy1.png'));
  animCrazy[1] = loadImage('assets/crazy2.png');
  animCrazy[2] = loadImage('assets/crazy3.png');
  animCrazy[3] = loadImage('assets/crazy4.png');
  animCrazy[4] = loadImage('assets/crazy5.png');
  animCrazy[5] = loadImage('assets/crazy_dead.png');
  
  animOldy.push(loadImage('assets/oldy1.png'));
  animOldy[1] = loadImage('assets/oldy2.png');
  animOldy[2] = loadImage('assets/oldy3.png');
  animOldy[3] = loadImage('assets/oldy4.png');
  animOldy[4] = loadImage('assets/oldy5.png');
  animOldy[5] = loadImage('assets/oldy_dead.png');
}


function setup() {
  if (FIX_SIZE == true) {
    fixeSizeWindow(customWidth, customWidth);
  }

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  frameRate(FRAME_RATE);

  // Background
  mapList[BKG_LIST.SUN] = new Map(0, 0, windowWidth / MAP_W_SUN_RATIO, windowHeight / MAP_H_SUN_RATIO, imgList[IMAGE_LIST.BKG_SUN]);
  mapList[BKG_LIST.BKG] = new Map(0, 0, windowWidth / MAP_W_BG_RATIO, windowHeight / MAP_H_BG_RATIO, imgList[IMAGE_LIST.BKG]);
  mapList[BKG_LIST.GRASS] = new Map(0, 0, windowWidth / MAP_W_GRASS_RATIO, windowHeight / MAP_H_GRASS_RATIO, imgList[IMAGE_LIST.BKG_GRASS]);

  // Pipes
  let offsetBetweenPipes = (windowWidth / (NB_PIPES / 2));
  for (i=0; i < NB_PIPES; i+=2) {
    pipesList[i] = new Pipe(windowWidth + i * offsetBetweenPipes, windowHeight - windowHeight / 2, "down", i, imgList[IMAGE_LIST.PIPE_DOWN]);
    pipesList[i + 1]= new Pipe(windowWidth + i * offsetBetweenPipes, 0, "up", i, imgList[IMAGE_LIST.PIPE_UP]);
  }

  // Lazy
  lazy = new Lazy(windowWidth / 4, windowHeight / 2, 1, animBaddy);

  // bkg Lazy
  lazy2 = new Lazy(windowWidth / 4,  windowHeight / 4,  0.5, animBuddy);
  lazy3 = new Lazy(-windowWidth / 4, windowHeight / 10, 0.6, animCrazy);
  lazy4 = new Lazy( windowWidth / 2, windowHeight / 15, 0.7, animOldy);
  lazy5 = new Lazy( windowWidth / 5, windowHeight / 25, 0.3, animLazy);

  score = 0;

  gameState = STATES.PAUSE;
}

function draw() {
  background(0, 255, 255);

  switch (gameState) {
    case STATES.PLAY:
      drawBg(GAME_SPEED);
      drawBgLazy(GAME_SPEED);
      drawPipes(GAME_SPEED);
      drawLazy();
      handleCollision();
      break;

    case STATES.PAUSE:
      drawBg(0);
      drawBgLazy(-GAME_SPEED);
      drawPauseScreen();
      break;

    case STATES.GAME_OVER:
      drawBg(0);
      drawBgLazy(-GAME_SPEED);
      drawPipes(0);
      lazy.die();
      drawGamOverScreen();
      break;
      
    default:
  }

  handleSound();
  printScore(gameState);
}

function drawBg(speed) {
  mapList[BKG_LIST.SUN].moveX(speed/50);
  mapList[BKG_LIST.BKG].moveX(speed/10);
  mapList[BKG_LIST.GRASS].moveX(speed);
}

function drawPipes(speed) {
  for (i=0; i < NB_PIPES; i++) {  
    pipesList[i].moveX(speed);
 }
}

function drawBgLazy(speed) {
  lazy2.moveX(speed/25);
  lazy3.moveX(speed/20);
  lazy4.moveX(speed/17);
  lazy5.moveX(speed/50);
}

function drawLazy() {
  lazy.moveY();
}

function drawPauseScreen() {
  textSize((windowWidth + windowHeight) / TEXT_SMALL_RATIO);
  fill(255,255,255);
  text('PRESS UP TO JUMP', windowWidth / 2.05, windowHeight/1.6);
  
  image(imgList[IMAGE_LIST.TITLE], windowWidth/2-windowWidth/TITLE_W_RATIO /2,
      windowHeight/2-windowHeight/TITLE_H_RATIO, windowWidth/TITLE_W_RATIO, windowHeight/TITLE_H_RATIO);
}

function drawGamOverScreen() {
  textSize((windowWidth + windowHeight) / TEXT_BIG_RATIO);
  fill(255,0,0)
  text('GAME OVER', windowWidth/2, windowHeight/2);

  textSize((windowWidth + windowHeight) / TEXT_SMALL_RATIO);
  fill(255,255,255)
  text('PRESS UP TO RESTART', windowWidth/2, windowHeight/2 + windowHeight/10);
}

function handleCollision(){
  for (i=0; i < NB_PIPES; i+=2) {

    if ((abs(lazy.x - pipesList[i].x)) < lazy.width) {
      if (((lazy.y + lazy.height) < pipesList[i].y && lazy.y > pipesList[i+1].y + pipesList[i+1].height)) {
        console.log("GOOOOD");
      }
      else {
        soundList[SOUND_LIST.IMPACT].play();
        gameState = STATES.GAME_OVER;
      }
    }
  }
}

function handleSound() {
  switch (gameState) {
    case STATES.PLAY:
      if (!soundList[SOUND_LIST.SONG].isPlaying()) {
        soundList[SOUND_LIST.SONG].setVolume(0.3);
        //soundList[SOUND_LIST.SONG].play();
      }
      if (!soundList[SOUND_LIST.OCEAN].isPlaying()) {
        soundList[SOUND_LIST.OCEAN].setVolume(0.5);
        soundList[SOUND_LIST.OCEAN].play();
      }
      break;

    case STATES.PAUSE:
      if (!soundList[SOUND_LIST.OCEAN].isPlaying()) {
        soundList[SOUND_LIST.OCEAN].setVolume(0.5);
        soundList[SOUND_LIST.OCEAN].play();
      }
      break;

    case STATES.GAME_OVER:
      if (!soundList[SOUND_LIST.OCEAN].isPlaying()) {
        soundList[SOUND_LIST.OCEAN].setVolume(0.5);
        soundList[SOUND_LIST.OCEAN].play();
      }
      break;
      
    default:
  }
}

function printScore(gameState) {
  if (gameState == STATES.PLAY) {
    frameCounter++;
    if (frameCounter > 150) {
      score++;
      frameCounter = 0;
    }
  }
  if (gameState != STATES.PAUSE) {
    textSize((windowWidth + windowHeight) / TEXT_BIG_RATIO);
    fill(0,0,0)
    text(score, windowWidth / 12, windowHeight / 5);
  }
}

function fixeSizeWindow(width, height){
  windowWidth = width;
  windowHeight = height;
}


function windowResized() {
  if (FIX_SIZE == true) {
    fixeSizeWindow(customWidth, customWidth);
  }
  else {
    mapList[BKG_LIST.SUN].resize();
    mapList[BKG_LIST.BKG].resize();
    mapList[BKG_LIST.GRASS].resize();
    for(i=0; i < NB_PIPES; i++) {pipesList[i].resize();}
    lazy.resize();
    lazy2.resize();
    lazy3.resize();
    lazy4.resize();
    lazy5.resize();
  }
}

function handleUserAction() {
  if (lazy.jumpDetected != 1 && gameState == STATES.PLAY)
  {
    soundList[SOUND_LIST.FLAP].play();
    lazy.jumpDetected = 1;
  }
  else if (gameState == STATES.PAUSE) {
    gameState = STATES.PLAY;
  }
  else if (gameState == STATES.GAME_OVER) {
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