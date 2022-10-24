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
  animList[ANIM_LIST.LAZY][0] = loadImage('assets/lazy1.png');
  animList[ANIM_LIST.LAZY][1] = loadImage('assets/lazy2.png');
  animList[ANIM_LIST.LAZY][2] = loadImage('assets/lazy3.png');
  animList[ANIM_LIST.LAZY][3] = loadImage('assets/lazy4.png');
  animList[ANIM_LIST.LAZY][4] = loadImage('assets/lazy5.png');
  animList[ANIM_LIST.LAZY][5] = loadImage('assets/lazy_dead.png');
  
  animList[ANIM_LIST.BUDDY][0] = loadImage('assets/buddy1.png');
  animList[ANIM_LIST.BUDDY][1] = loadImage('assets/buddy2.png');
  animList[ANIM_LIST.BUDDY][2] = loadImage('assets/buddy3.png');
  animList[ANIM_LIST.BUDDY][3] = loadImage('assets/buddy4.png');
  animList[ANIM_LIST.BUDDY][4] = loadImage('assets/buddy5.png');
  animList[ANIM_LIST.BUDDY][5] = loadImage('assets/buddy_dead.png');
  
  animList[ANIM_LIST.BADDY][0] = loadImage('assets/baddy1.png');
  animList[ANIM_LIST.BADDY][1] = loadImage('assets/baddy2.png');
  animList[ANIM_LIST.BADDY][2] = loadImage('assets/baddy3.png');
  animList[ANIM_LIST.BADDY][3] = loadImage('assets/baddy4.png');
  animList[ANIM_LIST.BADDY][4] = loadImage('assets/baddy5.png');
  animList[ANIM_LIST.BADDY][5] = loadImage('assets/baddy_dead.png');
  
  animList[ANIM_LIST.CRAZY][0] = loadImage('assets/crazy1.png');
  animList[ANIM_LIST.CRAZY][1] = loadImage('assets/crazy2.png');
  animList[ANIM_LIST.CRAZY][2] = loadImage('assets/crazy3.png');
  animList[ANIM_LIST.CRAZY][3] = loadImage('assets/crazy4.png');
  animList[ANIM_LIST.CRAZY][4] = loadImage('assets/crazy5.png');
  animList[ANIM_LIST.CRAZY][5] = loadImage('assets/crazy_dead.png');
  
  animList[ANIM_LIST.OLDY][0] = loadImage('assets/oldy1.png');
  animList[ANIM_LIST.OLDY][1] = loadImage('assets/oldy2.png');
  animList[ANIM_LIST.OLDY][2] = loadImage('assets/oldy3.png');
  animList[ANIM_LIST.OLDY][3] = loadImage('assets/oldy4.png');
  animList[ANIM_LIST.OLDY][4] = loadImage('assets/oldy5.png');
  animList[ANIM_LIST.OLDY][5] = loadImage('assets/oldy_dead.png');
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
  //lazy = new Lazy(windowWidth / 4, windowHeight / 2, 1,  animList[ANIM_LIST.LAZY]);

  // bkg Lazy
  // lazy2 = new Lazy(windowWidth / 4,  windowHeight / 4,  0.5, animList[Math.round(random(0,ANIM_LIST.COUNT - 1))]);
  // lazy3 = new Lazy(-windowWidth / 4, windowHeight / 10, 0.6, animList[Math.round(random(0,ANIM_LIST.COUNT - 1))]);
  // lazy4 = new Lazy( windowWidth / 2, windowHeight / 15, 0.7, animList[Math.round(random(0,ANIM_LIST.COUNT - 1))]);
  // lazy5 = new Lazy( windowWidth / 5, windowHeight / 25, 0.3, animList[Math.round(random(0,ANIM_LIST.COUNT - 1))]);

  lazyList[ANIM_LIST.LAZY] = new Lazy(windowWidth / 2 - 2*(windowHeight / LAZY_RATIO),  windowHeight / 4,  0.8, animList[ANIM_LIST.LAZY]);
  lazyList[ANIM_LIST.BUDDY] = new Lazy(windowWidth / 2 - 4*(windowHeight / LAZY_RATIO), windowHeight / 4, 0.8, animList[ANIM_LIST.BUDDY]);
  lazyList[ANIM_LIST.BADDY] = new Lazy( windowWidth / 2, windowHeight / 4, 0.8, animList[ANIM_LIST.BADDY]);
  lazyList[ANIM_LIST.CRAZY] = new Lazy( windowWidth / 2 + 2*(windowHeight / LAZY_RATIO), windowHeight / 4, 0.8, animList[ANIM_LIST.CRAZY]);
  lazyList[ANIM_LIST.OLDY] = new Lazy( windowWidth / 2 + 4*(windowHeight / LAZY_RATIO), windowHeight / 4, 0.8, animList[ANIM_LIST.OLDY]);

  score = 0;
  gameState = STATES.MENU;
}

function draw() {
  background(0, 255, 255);

  switch (gameState) {
    case STATES.MENU:
      drawBg(0.5);
      drawMenuScreen();

      for (i=0; i<ANIM_LIST.COUNT; i++) {
        lazyList[i].draw();
      }
      break;

    case STATES.PLAY:
      drawBg(GAME_SPEED);
      drawBgLazy(GAME_SPEED);
      drawPipes(GAME_SPEED);
      drawLazy();
      drawScore();
      handleCollision();
      break;

    case STATES.PAUSE:
      drawBg(0);
      drawBgLazy(-GAME_SPEED);
      break;

    case STATES.GAME_OVER:
      drawBg(0);
      drawBgLazy(-GAME_SPEED);
      drawPipes(0);
      lazyList[lazySelected].die();
      drawGamOverScreen();
      break;
      
    default:
  }

  handleSound();
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
  for(i=0; i < ANIM_LIST.COUNT; i++) {
    if (!lazyList[i].selected) {
      lazyList[i].moveX(speed/random(25,50));
    }
  }
}

function drawLazy() {
  lazyList[lazySelected].moveY();
}

function drawMenuScreen() {  
  startImage.x = windowWidth/2-windowWidth/TITLE_W_RATIO /2;
  startImage.y = windowHeight/2-windowHeight/TITLE_H_RATIO * 0.5;
  startImage.width = windowWidth/TITLE_W_RATIO;
  startImage.height = windowHeight/TITLE_H_RATIO;

  image(imgList[IMAGE_LIST.TITLE], startImage.x, startImage.y, startImage.width , startImage.height);

  // textSize((windowWidth + windowHeight) / TEXT_SMALL_RATIO);
  // fill(255,255,255);
  // text('PLAY', windowWidth / 2.05, windowHeight/1.6);
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

    if ((abs(lazyList[lazySelected].x - pipesList[i].x)) < lazyList[lazySelected].width) {
      if (((lazyList[lazySelected].y + lazyList[lazySelected].height) < pipesList[i].y && lazyList[lazySelected].y > pipesList[i+1].y + pipesList[i+1].height)) {
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

function drawScore() {
  if (gameState == STATES.PLAY) {
    frameCounter++;
    if (frameCounter > 150) {
      score++;
      frameCounter = 0;
    }
  }
  textSize((windowWidth + windowHeight) / TEXT_BIG_RATIO);
  fill(0,0,0)
  text(score, windowWidth / 12, windowHeight / 5);
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
    for(i=0; i < ANIM_LIST.COUNT; i++) {lazyList[i].resize();}
  }
}

function handleUserAction() {
  if (gameState == STATES.PLAY) {
    if (lazyList[lazySelected].jumpDetected != 1) {
      soundList[SOUND_LIST.FLAP].play();
      lazyList[lazySelected].jumpDetected = 1;
    }
  }
  else if (gameState == STATES.PAUSE) {
    gameState = STATES.PLAY;
  }
  else if (gameState == STATES.MENU) {
    for (i=0; i<ANIM_LIST.COUNT; i++) {
      if ((mouseX > lazyList[i].x - lazyList[i].width) && (mouseX < lazyList[i].x + lazyList[i].width)) {
        if ((mouseY > lazyList[i].y - lazyList[i].height) && (mouseY < lazyList[i].y + lazyList[i].height)) {
           lazySelected = i;
        }
      }
      else{
        lazyList[i].isSelected(false);
      }
    }
    if ((mouseX > startImage.x - startImage.width) && (mouseX < startImage.x + startImage.width)) {
      if ((mouseY > startImage.y - startImage.height) && (mouseY < startImage.y + startImage.height)) {
        if(lazySelected < 0) {
          lazySelected = ANIM_LIST.LAZY //by default
        }
        lazyList[lazySelected].init();
        gameState = STATES.PLAY;
      }
    }
    for (i=0; i<ANIM_LIST.COUNT; i++) {
      if (lazySelected == i){
        lazyList[i].isSelected(true);
      }
      else {
        lazyList[i].isSelected(false);
      }

    }
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