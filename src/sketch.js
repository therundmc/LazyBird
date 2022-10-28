/**
 * @file LazyBird main app file.
 * @copyright therundmc & weirdaz - 2022
 */

function preload() {
  // Sounds
  soundList[SOUND_LIST.SONG] = loadSound('assets/sound/LazyBird.mp3');
  soundList[SOUND_LIST.FLAP] = loadSound('assets/sound/wing_flap.mp3');
  soundList[SOUND_LIST.OCEAN] = loadSound('assets/sound/ocean.mp3');
  soundList[SOUND_LIST.IMPACT] = loadSound('assets/sound/impact.wav');
  soundList[SOUND_LIST.CLICK] = loadSound('assets/sound/click.mp3');
  soundList[SOUND_LIST.INTRO] = loadSound('assets/sound/woosh.wav');
  soundList[SOUND_LIST.LAZER] = loadSound('assets/sound/lazer.wav')

  // Images
  imgList[IMAGE_LIST.BKG_SUN] = loadImage('assets/img/sun.png');
  imgList[IMAGE_LIST.BKG] = loadImage('assets/img/bkg.png');
  imgList[IMAGE_LIST.BKG_GRASS] = loadImage('assets/img/bkg_herbe.png');
  imgList[IMAGE_LIST.PIPE_DOWN] = loadImage('assets/img/pipe_down.png');
  imgList[IMAGE_LIST.PIPE_UP] = loadImage('assets/img/pipe_up.png');
  imgList[IMAGE_LIST.TITLE] = loadImage('assets/img/titre.png');

  // Animations
  animList[ANIM_LIST.LAZY][0] = loadImage('assets/img/lazy1.png');
  animList[ANIM_LIST.LAZY][1] = loadImage('assets/img/lazy2.png');
  animList[ANIM_LIST.LAZY][2] = loadImage('assets/img/lazy3.png');
  animList[ANIM_LIST.LAZY][3] = loadImage('assets/img/lazy4.png');
  animList[ANIM_LIST.LAZY][4] = loadImage('assets/img/lazy5.png');
  animList[ANIM_LIST.LAZY][5] = loadImage('assets/img/lazy_dead.png');
  animList[ANIM_LIST.LAZY][6] = loadImage('assets/img/lazy_ghost.png');
  
  animList[ANIM_LIST.BUDDY][0] = loadImage('assets/img/buddy1.png');
  animList[ANIM_LIST.BUDDY][1] = loadImage('assets/img/buddy2.png');
  animList[ANIM_LIST.BUDDY][2] = loadImage('assets/img/buddy3.png');
  animList[ANIM_LIST.BUDDY][3] = loadImage('assets/img/buddy4.png');
  animList[ANIM_LIST.BUDDY][4] = loadImage('assets/img/buddy5.png');
  animList[ANIM_LIST.BUDDY][5] = loadImage('assets/img/buddy_dead.png');
  
  animList[ANIM_LIST.BADDY][0] = loadImage('assets/img/baddy1.png');
  animList[ANIM_LIST.BADDY][1] = loadImage('assets/img/baddy2.png');
  animList[ANIM_LIST.BADDY][2] = loadImage('assets/img/baddy3.png');
  animList[ANIM_LIST.BADDY][3] = loadImage('assets/img/baddy4.png');
  animList[ANIM_LIST.BADDY][4] = loadImage('assets/img/baddy5.png');
  animList[ANIM_LIST.BADDY][5] = loadImage('assets/img/baddy_dead.png');
  
  animList[ANIM_LIST.CRAZY][0] = loadImage('assets/img/crazy1.png');
  animList[ANIM_LIST.CRAZY][1] = loadImage('assets/img/crazy2.png');
  animList[ANIM_LIST.CRAZY][2] = loadImage('assets/img/crazy3.png');
  animList[ANIM_LIST.CRAZY][3] = loadImage('assets/img/crazy4.png');
  animList[ANIM_LIST.CRAZY][4] = loadImage('assets/img/crazy5.png');
  animList[ANIM_LIST.CRAZY][5] = loadImage('assets/img/crazy_dead.png');
  
  animList[ANIM_LIST.OLDY][0] = loadImage('assets/img/oldy1.png');
  animList[ANIM_LIST.OLDY][1] = loadImage('assets/img/oldy2.png');
  animList[ANIM_LIST.OLDY][2] = loadImage('assets/img/oldy3.png');
  animList[ANIM_LIST.OLDY][3] = loadImage('assets/img/oldy4.png');
  animList[ANIM_LIST.OLDY][4] = loadImage('assets/img/oldy5.png');
  animList[ANIM_LIST.OLDY][5] = loadImage('assets/img/oldy_dead.png');

  animList[ANIM_LIST.ROBOTY][0] = loadImage('assets/img/roboty1.png');
  animList[ANIM_LIST.ROBOTY][1] = loadImage('assets/img/roboty2.png');
  animList[ANIM_LIST.ROBOTY][2] = loadImage('assets/img/roboty3.png');
  animList[ANIM_LIST.ROBOTY][3] = loadImage('assets/img/roboty4.png');
  animList[ANIM_LIST.ROBOTY][4] = loadImage('assets/img/roboty5.png');
  animList[ANIM_LIST.ROBOTY][5] = loadImage('assets/img/roboty_dead.png');
  animList[ANIM_LIST.ROBOTY][6] = loadImage('assets/img/roboty_shoot.png');
    
}


function setup() {

  pixelDensity(1);
  windowWidth = (windowHeight) * SCREEN_RATIO;

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
  let lazySize = 0.8;
  let lazyWidth = windowHeight / (LAZY_RATIO / lazySize);

  lazyList[LAZY_LIST.LAZY] = new Lazy(windowWidth / 2 - 5 * lazyWidth,  windowHeight / 4 - lazyWidth,  lazySize, animList[ANIM_LIST.LAZY]);
  lazyList[LAZY_LIST.BUDDY] = new Lazy(windowWidth / 2 - 3 * lazyWidth, windowHeight / 4 + lazyWidth / 3, lazySize, animList[ANIM_LIST.BUDDY]);
  lazyList[LAZY_LIST.BADDY] = new Lazy( windowWidth / 2 - lazyWidth, windowHeight / 4 - lazyWidth, lazySize, animList[ANIM_LIST.BADDY]);
  lazyList[LAZY_LIST.CRAZY] = new Lazy( windowWidth / 2 + lazyWidth, windowHeight / 4 + lazyWidth / 3,lazySize, animList[ANIM_LIST.CRAZY]);
  lazyList[LAZY_LIST.OLDY] = new Lazy( windowWidth / 2 + 3 * lazyWidth, windowHeight / 4 - lazyWidth, lazySize, animList[ANIM_LIST.OLDY]);

  if (lazySelected < 0) {
    lazySelected = LAZY_LIST.LAZY;
  }
  lazyList[lazySelected].select(true); 

  // Bad Lazy
  robotyList[ROBOTY_LIST.ROBOTY] = new Lazy(windowWidth - windowWidth / 6,  50,  1.2, animList[ANIM_LIST.ROBOTY]);

  // MISC
  score = 0;
  frameCounter = 0;
  gameState = STATES.MENU;
  defPosXLazy = windowWidth / 6;
}

function draw() {
  const GAME_SPEED_RESCALED = (GAME_SPEED / 1280) * windowWidth;
  background(0, 255, 255);

  switch (gameState) {
    case STATES.MENU:
      drawBg(0.5);
      drawMenuScreen();
      drawBgLazy(0);
      drawInitLazy(0);
      break;

    case STATES.INIT:
      initSpeed -= windowWidth / (35 * windowWidth);
      drawBg(-initSpeed);
      if(drawInitLazy(initSpeed)){
        initSpeed = 0;
        initLazySpeed();
        gameState = STATES.PLAY;
      };
      break;

    case STATES.PLAY:
	  lazyList[lazySelected].alive = true;
      drawBg(GAME_SPEED_RESCALED);
      drawBgLazy(0);
      drawPipes(GAME_SPEED_RESCALED);
      drawLazy();
      drawRoboty(GAME_SPEED_RESCALED);
      drawScore();
      handleCollision();
      break;

    case STATES.PAUSE:
      drawBg(0);
      drawBgLazy(-GAME_SPEED_RESCALED / 4);
      break;

    case STATES.GAME_OVER:
      drawBg(0);
      drawBgLazy(-GAME_SPEED_RESCALED / 4);
      drawPipes(0);
      lazyList[lazySelected].die();
      drawGamOverScreen();
      break;
      
    default:
  }
  handleSound();
  frameCounter++;

  console.log(frameCounter)
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
  for(i=0; i < LAZY_LIST.COUNT; i++) {
    if (!lazyList[i].selected) {
      lazyList[i].moveX(speed);
    }
  }
}

function drawLazy() {
  for(i=0; i < LAZY_LIST.COUNT; i++) {
    if (lazyList[i].selected) {
      lazyList[i].moveY(0);
    }
  }
}

function drawRoboty(speed) {
  for(i=0; i < ROBOTY_LIST.COUNT; i++) {
    if (score > 3) {
      robotyList[i].moveY(speed);
      robotyList[i].shoot(speed * LAZER_SPEED);
    }
  }
}

function drawInitLazy(initSpeed){
  for (i=0; i<LAZY_LIST.COUNT; i++) {
    if(lazyList[i].init(initSpeed * (i+1))){
      return true;
    };
  }
}

function initLazySpeed() {
  for (i=0; i<LAZY_LIST.COUNT; i++) {
    lazyList[i].setSpeed(random(0.2,0.5))
  }
}

function drawMenuScreen() {  
  startImage.x = windowWidth/2-windowWidth/TITLE_W_RATIO /2;
  startImage.y = windowHeight/2-windowHeight/TITLE_H_RATIO * 0.5;
  startImage.width = windowWidth/TITLE_W_RATIO;
  startImage.height = windowHeight/TITLE_H_RATIO;

  image(imgList[IMAGE_LIST.TITLE], startImage.x, startImage.y, startImage.width , startImage.height);
}


function drawGamOverScreen() {
  textSize((windowWidth + windowHeight) / TEXT_BIG_RATIO);
  fill(255,0,0)
  text('GAME OVER', windowWidth/2, windowHeight/2);

  textSize((windowWidth + windowHeight) / TEXT_SMALL_RATIO);
  fill(0,0,0)
  text("SCORE : " + score, windowWidth/2, windowHeight/2 + windowHeight/10);
}

function handleCollision(){
  let lazyHitBox = {
    x: lazyList[lazySelected].x, 
    y: lazyList[lazySelected].y,
    width: 0,
    height: 0,
    width: lazyList[lazySelected].width / 4,
    height: lazyList[lazySelected].height / 4,
  }
  for (i=0; i < NB_PIPES; i+=2) {
    if ((abs(lazyList[lazySelected].x - pipesList[i].x)) < lazyList[lazySelected].width) {
      if (((lazyList[lazySelected].y + lazyList[lazySelected].height) < pipesList[i].y && lazyList[lazySelected].y > pipesList[i+1].y + pipesList[i+1].height)) {
        pipeCrossed = true;
        return;
      }
      else {
        forcePlaySound(soundList[SOUND_LIST.IMPACT], 0.8);
        gameState = STATES.GAME_OVER;
      }
    }
    else {
      pipeCrossed = false;
    }
  }
  for(i=0; i < ROBOTY_LIST.COUNT; i++) {
    if (isCollision(robotyList[i].lazer, lazyHitBox)){
      forcePlaySound(soundList[SOUND_LIST.IMPACT], 0.8);
      gameState = STATES.GAME_OVER;
    }
  }
}

function handleSound() {
  switch (gameState) {
    case STATES.PLAY:
      //playSound(soundList[SOUND_LIST.SONG], 0.5);
      playSound(soundList[SOUND_LIST.OCEAN], 0.5);
      break;

    case STATES.PAUSE:
      playSound(soundList[SOUND_LIST.OCEAN], 0.5);
      break;

    case STATES.GAME_OVER:
      playSound(soundList[SOUND_LIST.OCEAN], 0.5);
      break;
      
    default:
      break;
  }
}

function drawScore() {
  console.log(pipeCrossed, pipeCrossedPrev)
  if (gameState == STATES.PLAY) {
    if (pipeCrossedPrev != pipeCrossed && pipeCrossed == false){
      score++;
    }
    pipeCrossedPrev = pipeCrossed;
  }
  scoreTextSize = (windowWidth + windowHeight) / TEXT_BIG_RATIO;
  textSize(scoreTextSize);
  fill(0,0,0)
  text(score, scoreTextSize, scoreTextSize);
}

function windowResized() {
  setup();
}

function handleUserAction() {
  let mouse = {
    x: mouseX,
    y: mouseY,
    width: 0,
    height: 0,
  }

  let startZone = {
    x: 0,
    y: windowHeight / 2,
    width: windowWidth,
    height: windowHeight / 6,
  }

  switch (gameState) {
    case STATES.MENU:
      for (i=0; i<LAZY_LIST.COUNT; i++) {
        if (isCollision(mouse,lazyList[i])) {
            soundList[SOUND_LIST.CLICK].play();
            lazySelected = i;
        }
      }
      for (i=0; i<LAZY_LIST.COUNT; i++) {
        if (lazySelected == i){
          lazyList[i].select(true);
        }
        else {
          lazyList[i].select(false);
        }
      }  
      if (isCollision(mouse,startZone)) {
        forcePlaySound(soundList[SOUND_LIST.INTRO], 0.8);
        gameState = STATES.INIT;
      }
      break;

    case STATES.INIT:
      break;

    case STATES.PLAY:
      if (lazyList[lazySelected].jumpDetected != 1) {
        forcePlaySound(soundList[SOUND_LIST.FLAP], 0.8);
        lazyList[lazySelected].jumpDetected = 1;
      }
      break;

    case STATES.PAUSE:
      gameState = STATES.PLAY;
      break;

    case STATES.GAME_OVER:
      setup();
      break;
      
    default:
      break;
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
