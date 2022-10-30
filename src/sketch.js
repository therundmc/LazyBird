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
  soundList[SOUND_LIST.LAZER] = loadSound('assets/sound/lazer.wav');
  soundList[SOUND_LIST.MENU] = loadSound('assets/sound/LazyBirdMenu.mp3');
  soundList[SOUND_LIST.BOOM] = loadSound('assets/sound/boom.wav');
  soundList[SOUND_LIST.ROBOTY] = loadSound('assets/sound/roboty.wav');
  soundList[SOUND_LIST.LAZYKAZE] = loadSound('assets/sound/lazykaze.mp3');

  // Images
  imgList[IMAGE_LIST.BKG_SUN] = loadImage('assets/img/sky.png');
  imgList[IMAGE_LIST.BKG_ROCKS] = loadImage('assets/img/rocks.png');
  imgList[IMAGE_LIST.BKG_CLOUDS] = loadImage('assets/img/clouds.png');
  imgList[IMAGE_LIST.BKG_GROUND] = loadImage('assets/img/grass.png');
  imgList[IMAGE_LIST.PIPE_DOWN] = loadImage('assets/img/log_down.png');
  imgList[IMAGE_LIST.PIPE_UP] = loadImage('assets/img/log_up.png');
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

  animList[ANIM_LIST.LAZYKAZE][0] = loadImage('assets/img/lazykaze1.png');
  animList[ANIM_LIST.LAZYKAZE][1] = loadImage('assets/img/lazykaze2.png');
  animList[ANIM_LIST.LAZYKAZE][2] = loadImage('assets/img/lazykaze3.png');
  animList[ANIM_LIST.LAZYKAZE][3] = loadImage('assets/img/lazykaze4.png');
  animList[ANIM_LIST.LAZYKAZE][4] = loadImage('assets/img/lazykaze5.png');
  animList[ANIM_LIST.LAZYKAZE][5] = loadImage('assets/img/lazykaze_dead.png');

  bitFont = loadFont('assets/font/joystix.ttf');
  
  logo = loadImage('assets/img/logo4.png');
  
  BOOM.push(loadImage('assets/img/explosion1.png'));
  BOOM.push(loadImage('assets/img/explosion2.png'));
  BOOM.push(loadImage('assets/img/explosion3.png'));
  BOOM.push(loadImage('assets/img/explosion4.png'));
  BOOM.push(loadImage('assets/img/explosion5.png'));
  BOOM.push(loadImage('assets/img/explosion6.png'));
  BOOM.push(loadImage('assets/img/explosion7.png'));
  BOOM.push(loadImage('assets/img/explosion8.png'));
  BOOM.push(loadImage('assets/img/explosion9.png'));
  BOOM.push(loadImage('assets/img/explosion10.png'));
  BOOM.push(loadImage('assets/img/explosion11.png'));
  BOOM.push(loadImage('assets/img/explosion12.png'));
  BOOM.push(loadImage('assets/img/explosion13.png'));
  BOOM.push(loadImage('assets/img/explosion14.png'));
  BOOM.push(loadImage('assets/img/explosion15.png'));
    
}

function setup() {

  windowWidth = (windowHeight) * SCREEN_RATIO;

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont(bitFont);
  frameRate(FRAME_RATE);
  pixelDensity(PIXEL_DENSITY);

  // Background
  mapList[BKG_LIST.SUN] = new Bkg(0, 0, windowWidth, windowHeight, imgList[IMAGE_LIST.BKG_SUN]);
  mapList[BKG_LIST.ROCKS] = new Bkg(0, 0, windowWidth, windowHeight, imgList[IMAGE_LIST.BKG_ROCKS]);
  mapList[BKG_LIST.CLOUDS] = new Bkg(0, 0, windowWidth, windowHeight, imgList[IMAGE_LIST.BKG_CLOUDS]);
  mapList[BKG_LIST.GROUND] = new Bkg(0, windowHeight - 50, windowWidth , windowHeight /10, imgList[IMAGE_LIST.BKG_GROUND]);

  // Pipes
  let offsetBetweenPipes = (windowWidth / (NB_PIPES / 2));
  for (i=0; i < NB_PIPES; i+=2) {
    pipesList[i] = new Pipe(windowWidth + i * offsetBetweenPipes, windowHeight - windowHeight / 2, "down", i, 0.2 + 0.05*i, imgList[IMAGE_LIST.PIPE_DOWN]);
    pipesList[i + 1]= new Pipe(windowWidth + i * offsetBetweenPipes, 0, "up", i, 0.4 - (0.05*i), imgList[IMAGE_LIST.PIPE_UP]);
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
  robotyList[ROBOTY_LIST.ROBOTY] = new Lazy(windowWidth,  50,  1.2, animList[ANIM_LIST.ROBOTY]);
  
  lazyKazeList[KAZE_LIST.LAZYKAZE] = new Lazy(windowWidth,  0,  0.8, animList[ANIM_LIST.LAZYKAZE]);
  lazyKazeList[KAZE_LIST.LAZYKAZE2] = new Lazy(windowWidth* 1.5,  windowHeight * 0.5,  0.7, animList[ANIM_LIST.LAZYKAZE]);
  lazyKazeList[KAZE_LIST.LAZYKAZE3] = new Lazy(windowWidth* 2,  windowHeight * 0.8,  0.8, animList[ANIM_LIST.LAZYKAZE]);
  // MISC
  score = 0;
  gameState = STATES.MENU;
  gameStage = 1;
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
      initSpeed -= windowWidth / (20 * windowWidth);
      drawBg(-initSpeed);
      if(drawInitLazy(initSpeed)){
        initSpeed = 0;
        initLazySpeed();
        gameState = STATES.PLAY;
      };
      break;

    case STATES.PLAY:
      lazyList[lazySelected].alive = true;
      switch (gameStage) {
        case 1:
          drawBg(GAME_SPEED_RESCALED);
          //drawBgLazy(0);
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          drawLazy()
          if (score > 5) {
            gameStage++; 
          }
          break;

        // transition 
        case 2:
          drawBg(GAME_SPEED_RESCALED);
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          playSound(soundList[SOUND_LIST.ROBOTY] , 0.7); 
          robotyList[ROBOTY_LIST.ROBOTY].moveX(GAME_SPEED_RESCALED / 4);
          drawLazy();
          if (score > 6) {
            gameStage++; 
          }
          break;

        case 3:
          drawBg(GAME_SPEED_RESCALED);
          //drawBgLazy(0);
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_EASY);
          drawRoboty(GAME_SPEED_RESCALED);
          shootShortRoboty(GAME_SPEED_RESCALED);
          drawLazy();
          if (score > 15) {
            gameStage++; 
          }
          break;

        // Transistion 
        case 4:
          drawBg(GAME_SPEED_RESCALED);
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_EASY);
          robotyList[ROBOTY_LIST.ROBOTY].moveX(-GAME_SPEED_RESCALED / 4);
          playSound(soundList[SOUND_LIST.LAZYKAZE] , 0.8); 
          drawLazy();
          if (score > 16) {
            gameStage++; 
          }
          break;

        case 5:
          drawBg(GAME_SPEED_RESCALED);
          //drawBgLazy(0);
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          drawRoboty(GAME_SPEED_RESCALED);
          drawLazyKaze(GAME_SPEED_RESCALED, 2);
          drawLazy();
          if (score > 25) {
            gameStage++; 
          }
          break;

        // Transistion 
        case 6:
          drawBg(GAME_SPEED_RESCALED);
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          playSound(soundList[SOUND_LIST.ROBOTY] , 0.7); 
          robotyList[ROBOTY_LIST.ROBOTY].moveX(GAME_SPEED_RESCALED / 4);
          drawLazyKaze(GAME_SPEED_RESCALED, 2);
          drawLazy();
          if (score > 26) {
            gameStage++; 
          }
          break;

        case 7:
          drawBg(GAME_SPEED_RESCALED);
          //drawBgLazy(0);
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          drawRoboty(GAME_SPEED_RESCALED);
          shootShortRoboty(1.5 * GAME_SPEED_RESCALED);
          drawLazyKaze(GAME_SPEED_RESCALED, 3);
          drawLazy();
          if (score > 40) {
            gameStage++; 
          }
          break;

        case 8:
          drawBg(0);
          drawBgLazy(-GAME_SPEED_RESCALED / 4);
          drawEndGameScreen();
          break;

          
      }
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
      if (!lazyList[lazySelected].exploded){
        lazyList[lazySelected].die();
      }
      drawGamOverScreen();
      break;
      
    default:
      break;
  }

  handleSound();
  //drawFps();
}

function drawBg(speed) {
  mapList[BKG_LIST.SUN].moveX(speed/50);
  mapList[BKG_LIST.ROCKS].moveX(speed/5);
  mapList[BKG_LIST.CLOUDS].moveX(speed/8);
}

function drawPipes(speed, size) {
  for (i=0; i < NB_PIPES; i+=2) {  
    if (pipesList[i].isOnScreen()) {
      pipesList[i].moveX(speed);
      pipesList[i + 1].moveX(speed);
    }
    else {
      sizeDown = random(0.1,size);
      sizeUp = random(size, size + 0.1) - sizeDown
      pipesList[i].init(windowWidth, sizeDown);
      pipesList[i+1].init(windowWidth, sizeUp);
    }
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
    robotyList[i].moveY(speed);
  }
}

function drawLazyKaze(speed, nb) {
  for(i=0; i < nb; i++) {
    if(!lazyKazeList[i].exploded && lazyKazeList[i].alive){
      lazyKazeList[i].moveX(speed * 1.5);
      lazyKazeList[i].moveY(speed * 0.5);
    }
    else if (!lazyKazeList[i].exploded && !lazyKazeList[i].alive){
      lazyKazeList[i].die();
    }
    else {
      lazyKazeList[i].alive = true;
      lazyKazeList[i].exploded = false;
      lazyKazeList[i].x = -lazyKazeList[i].width;
    }

  }
}

function shootShortRoboty(speed) {
  for(i=0; i < ROBOTY_LIST.COUNT; i++) {
    robotyList[i].shootShort(speed * LAZER_SPEED);
  }
}

function shootLongRoboty(speed) {
  for(i=0; i < ROBOTY_LIST.COUNT; i++) {
    if (score > 3) {
      robotyList[i].shootLong(speed * LAZER_SPEED);
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
  let alpha = 100;
  startImage.x = windowWidth/2-windowWidth/TITLE_W_RATIO /2;
  startImage.y = windowHeight/2-windowHeight/TITLE_H_RATIO * 0.5;
  startImage.width = windowWidth/TITLE_W_RATIO;
  startImage.height = windowHeight/TITLE_H_RATIO;

  if (alpha < 255) {
    alpha += (millis() / 10);
  }
  tint(255, alpha);
  image(imgList[IMAGE_LIST.TITLE], startImage.x, startImage.y, startImage.width , startImage.height);
  
  // textSize((windowWidth + windowHeight) / TEXT_BIG_RATIO);
  // fill(0,0,0)
  // text('LAZY BIRD', windowWidth/2, windowHeight * 0.5);
  noTint();

  textSize((windowWidth + windowHeight) / TEXT_SMALL_RATIO);
  fill(0,150,100)
  text('- Fnek Game Studios -', windowWidth * 0.5, windowHeight * 0.90);
  image(logo, windowWidth * 0.47, windowHeight * 0.75, windowWidth * 0.05 , windowHeight * 0.1);

}

function drawFps() {
  let fps = frameRate();
  textSize((windowWidth + windowHeight) / TEXT_SMALL_RATIO);
  fill(255);
  stroke(0);
  text("FPS: " + fps.toFixed(2), windowWidth*0.85, windowHeight * 0.05);
}

function drawGamOverScreen() {
  textSize((windowWidth + windowHeight) / TEXT_BIG_RATIO);
  fill(255,0,0)
  text('GAME OVER', windowWidth/2, windowHeight/2);

  textSize((windowWidth + windowHeight) / TEXT_SMALL_RATIO);
  fill(0,0,0)
  text("SCORE : " + score, windowWidth/2, windowHeight/2 + windowHeight/10);
}

function drawEndGameScreen() {
  textSize((windowWidth + windowHeight) / TEXT_BIG_RATIO);
  fill(255,0,0)
  text('YOU WIN !', windowWidth/2, windowHeight/2);

  textSize((windowWidth + windowHeight) / TEXT_SMALL_RATIO);
  fill(0,0,0)
  text("SCORE : " + score, windowWidth/2, windowHeight/2 + windowHeight/10);
}

function handleCollision(){
  let lazyHitBox = {
    x: lazyList[lazySelected].x, 
    y: lazyList[lazySelected].y,
    width: lazyList[lazySelected].width / 2,
    height: lazyList[lazySelected].height,
  }

  let boomBox = {
    x: 0, 
    y: 0,
    width: windowWidth * random(0.05, 0.1),
    height: windowHeight,
  }

  for (i=0; i < NB_PIPES; i+=2) {
    if ((abs(lazyList[lazySelected].x - pipesList[i].x)) < lazyList[lazySelected].width) {
      if (((lazyList[lazySelected].y + lazyList[lazySelected].height) < pipesList[i].y && lazyList[lazySelected].y > pipesList[i+1].y + pipesList[i+1].height)) {
        pipeCrossed = true;
        return;
      }
      else {
        if(lazyList[lazySelected].hit(soundList[SOUND_LIST.IMPACT]) <= 0){
          lazyList[lazySelected].causOfDeath = DEATH.OTHER;
          gameState = STATES.GAME_OVER;
        }
      }
    }
    else {
      pipeCrossed = false;
    }
  }

  for(i=0; i < ROBOTY_LIST.COUNT; i++) {
    if (isCollision(robotyList[i].lazer, lazyHitBox)){
      if(lazyList[lazySelected].hit(soundList[SOUND_LIST.IMPACT]) <= 0){
        lazyList[lazySelected].causOfDeath = DEATH.OTHER;
        gameState = STATES.GAME_OVER;
      }
    }
  }

  for(i=0; i < KAZE_LIST.COUNT; i++) {
    if(lazyKazeList[i].alive){
      if (isCollision(lazyKazeList[i], lazyHitBox)){
        if(lazyList[lazySelected].hit(soundList[SOUND_LIST.BOOM]) <= 0){
          lazyList[lazySelected].causOfDeath = DEATH.LAZYKAZE;
          gameState = STATES.GAME_OVER;
        }
        else {
          lazyList[lazySelected].causOfDeath = DEATH.OTHER;
        }  
      }
    }
  }
      

for(i=0; i < KAZE_LIST.COUNT; i++) {
  if(lazyKazeList[i].alive){
    if (isCollision(lazyKazeList[i], boomBox)){
        lazyKazeList[i].causOfDeath = DEATH.LAZYKAZE
        forcePlaySound(soundList[SOUND_LIST.BOOM], 1);
        lazyKazeList[i].die();
    }
  }
}
}

function handleSound() {
  switch (gameState) {
    case STATES.MENU:
      stopSound(soundList[SOUND_LIST.SONG]);
      playSound(soundList[SOUND_LIST.MENU] , 0.7); 
      playSound(soundList[SOUND_LIST.OCEAN], 0.2);
      break;


    case STATES.PLAY:
      stopSound(soundList[SOUND_LIST.MENU]);
      playSound(soundList[SOUND_LIST.SONG], 0.7);
      playSound(soundList[SOUND_LIST.OCEAN], 0.1);
      break;

    case STATES.PAUSE:
      playSound(soundList[SOUND_LIST.OCEAN], 0.5);
      break;

    case STATES.GAME_OVER:
      stopSound(soundList[SOUND_LIST.SONG]);
      playSound(soundList[SOUND_LIST.MENU], 0.7);
      playSound(soundList[SOUND_LIST.OCEAN], 0.2);
      break;
      
    default:
      break;
  }
}


function drawScore() {
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

  levelTextSize = (windowWidth + windowHeight) / TEXT_SMALL_RATIO;
  textSize(levelTextSize);
  fill(255,255,255)
  text("LEVEL:" + gameStage, windowWidth - 4 *levelTextSize, windowHeight - levelTextSize);

  let livesText = "";
  livesTextSize = (windowWidth + windowHeight) / TEXT_BIG_RATIO;
  textSize(livesTextSize);
  fill(255,0,0)
  for (i=0; i<lazyList[lazySelected].lives; i++){
    livesText += '\u2665';
  }
  textAlign(LEFT, CENTER);
  text(livesText, windowWidth - 4 *livesTextSize, livesTextSize);
  textAlign(CENTER, CENTER);
}

function windowResized() {
  deInit();
  setup();
}

function handleUserAction() {
  let mouse = {
    x: mouseX,
    y: mouseY,
    width: 10,
    height: 10,
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
      deInit();
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
