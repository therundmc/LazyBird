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
  soundList[SOUND_LIST.LAZER_LONG] = loadSound('assets/sound/lazerLong.ogg');
  soundList[SOUND_LIST.MISSILE] = loadSound('assets/sound/missile.mp3');

  // Images
  imgList[IMAGE_LIST.BKG_SUN] = loadImage('assets/img/sky.png');
  imgList[IMAGE_LIST.BKG_ROCKS] = loadImage('assets/img/rocks.png');
  imgList[IMAGE_LIST.BKG_CLOUDS] = loadImage('assets/img/clouds.png');
  imgList[IMAGE_LIST.BKG_GROUND] = loadImage('assets/img/grass.png');
  imgList[IMAGE_LIST.PIPE_DOWN] = loadImage('assets/img/log_down.png');
  imgList[IMAGE_LIST.PIPE_UP] = loadImage('assets/img/log_up.png');
  imgList[IMAGE_LIST.TITLE] = loadImage('assets/img/titre.png');
  imgList[IMAGE_LIST.LAZER_SHORT] = loadImage('assets/img/lazer_shot.png');
  imgList[IMAGE_LIST.LAZER_LONG] = loadImage('assets/img/mega_lazer_shot.png');
  imgList[IMAGE_LIST.LAZY_DEAD] = loadImage('assets/img/lazy_dead.png');
  imgList[IMAGE_LIST.LAZY_GHOST] = loadImage('assets/img/lazy_ghost.png');

  // Animations
  // animList[ANIM_LIST.LAZY][0] = loadImage('assets/img/lazy1.png');
  // animList[ANIM_LIST.LAZY][1] = loadImage('assets/img/lazy2.png');
  // animList[ANIM_LIST.LAZY][2] = loadImage('assets/img/lazy3.png');
  // animList[ANIM_LIST.LAZY][3] = loadImage('assets/img/lazy4.png');
  // animList[ANIM_LIST.LAZY][4] = loadImage('assets/img/lazy5.png');
  // animList[ANIM_LIST.LAZY][5] = loadImage('assets/img/lazy_dead.png');
  // animList[ANIM_LIST.LAZY][6] = loadImage('assets/img/lazy_ghost.png');
  
  // animList[ANIM_LIST.BUDDY][0] = loadImage('assets/img/buddy1.png');
  // animList[ANIM_LIST.BUDDY][1] = loadImage('assets/img/buddy2.png');
  // animList[ANIM_LIST.BUDDY][2] = loadImage('assets/img/buddy3.png');
  // animList[ANIM_LIST.BUDDY][3] = loadImage('assets/img/buddy4.png');
  // animList[ANIM_LIST.BUDDY][4] = loadImage('assets/img/buddy5.png');
  // animList[ANIM_LIST.BUDDY][5] = loadImage('assets/img/buddy_dead.png');
  
  // animList[ANIM_LIST.BADDY][0] = loadImage('assets/img/baddy1.png');
  // animList[ANIM_LIST.BADDY][1] = loadImage('assets/img/baddy2.png');
  // animList[ANIM_LIST.BADDY][2] = loadImage('assets/img/baddy3.png');
  // animList[ANIM_LIST.BADDY][3] = loadImage('assets/img/baddy4.png');
  // animList[ANIM_LIST.BADDY][4] = loadImage('assets/img/baddy5.png');
  // animList[ANIM_LIST.BADDY][5] = loadImage('assets/img/baddy_dead.png');
  
  // animList[ANIM_LIST.CRAZY][0] = loadImage('assets/img/crazy1.png');
  // animList[ANIM_LIST.CRAZY][1] = loadImage('assets/img/crazy2.png');
  // animList[ANIM_LIST.CRAZY][2] = loadImage('assets/img/crazy3.png');
  // animList[ANIM_LIST.CRAZY][3] = loadImage('assets/img/crazy4.png');
  // animList[ANIM_LIST.CRAZY][4] = loadImage('assets/img/crazy5.png');
  // animList[ANIM_LIST.CRAZY][5] = loadImage('assets/img/crazy_dead.png');
  
  // animList[ANIM_LIST.OLDY][0] = loadImage('assets/img/oldy1.png');
  // animList[ANIM_LIST.OLDY][1] = loadImage('assets/img/oldy2.png');
  // animList[ANIM_LIST.OLDY][2] = loadImage('assets/img/oldy3.png');
  // animList[ANIM_LIST.OLDY][3] = loadImage('assets/img/oldy4.png');
  // animList[ANIM_LIST.OLDY][4] = loadImage('assets/img/oldy5.png');
  // animList[ANIM_LIST.OLDY][5] = loadImage('assets/img/oldy_dead.png');

  // animList[ANIM_LIST.ROBOTY][0] = loadImage('assets/img/roboty1.png');
  // animList[ANIM_LIST.ROBOTY][1] = loadImage('assets/img/roboty2.png');
  // animList[ANIM_LIST.ROBOTY][2] = loadImage('assets/img/roboty3.png');
  // animList[ANIM_LIST.ROBOTY][3] = loadImage('assets/img/roboty4.png');
  // animList[ANIM_LIST.ROBOTY][4] = loadImage('assets/img/roboty5.png');
  // animList[ANIM_LIST.ROBOTY][5] = loadImage('assets/img/roboty_dead.png');
  // animList[ANIM_LIST.ROBOTY][6] = loadImage('assets/img/roboty_shoot.png');

  // animList[ANIM_LIST.LAZYKAZE][0] = loadImage('assets/img/lazykaze1.png');
  // animList[ANIM_LIST.LAZYKAZE][1] = loadImage('assets/img/lazykaze2.png');
  // animList[ANIM_LIST.LAZYKAZE][2] = loadImage('assets/img/lazykaze3.png');
  // animList[ANIM_LIST.LAZYKAZE][3] = loadImage('assets/img/lazykaze4.png');
  // animList[ANIM_LIST.LAZYKAZE][4] = loadImage('assets/img/lazykaze5.png');
  // animList[ANIM_LIST.LAZYKAZE][5] = loadImage('assets/img/lazykaze_dead.png');

  bitFont = loadFont('assets/font/joystix.ttf');
  
  logo = loadImage('assets/img/logo4.png');
  
  // BOOM.push(loadImage('assets/img/explosion1.png'));
  // BOOM.push(loadImage('assets/img/explosion2.png'));
  // BOOM.push(loadImage('assets/img/explosion3.png'));
  // BOOM.push(loadImage('assets/img/explosion4.png'));
  // BOOM.push(loadImage('assets/img/explosion5.png'));
  // BOOM.push(loadImage('assets/img/explosion6.png'));
  // BOOM.push(loadImage('assets/img/explosion7.png'));
  // BOOM.push(loadImage('assets/img/explosion8.png'));
  // BOOM.push(loadImage('assets/img/explosion9.png'));
  // BOOM.push(loadImage('assets/img/explosion10.png'));
  // BOOM.push(loadImage('assets/img/explosion11.png'));
  // BOOM.push(loadImage('assets/img/explosion12.png'));
  // BOOM.push(loadImage('assets/img/explosion13.png'));
  // BOOM.push(loadImage('assets/img/explosion14.png'));
  // BOOM.push(loadImage('assets/img/explosion15.png'));

  animList[ANIM_LIST.BADDY] = (new Frame_animation (50,50,loadImage('assets/animation/baddy_animation.png'),42,24,0,4,3,1));
  animList[ANIM_LIST.BUDDY] = (new Frame_animation (50,150,loadImage('assets/animation/buddy_animation.png'),42,24,0,4,3,1));
  animList[ANIM_LIST.CRAZY] = (new Frame_animation (50,250,loadImage('assets/animation/crazy_animation.png'),42,24,0,4,3,1));
  animList[ANIM_LIST.LAZY]  = (new Frame_animation (50,350,loadImage('assets/animation/lazy_animation.png'),42,24,0,4,3,1));
  animList[ANIM_LIST.LAZYKAZE] = (new Frame_animation (50,450,loadImage('assets/animation/lazykaze_animation.png'),42,24,0,4,3,1));
  animList[ANIM_LIST.OLDY] = (new Frame_animation (50,550,loadImage('assets/animation/oldy_animation.png'),42,24,0,4,3,1));
  animList[ANIM_LIST.ROBOTY] = (new Frame_animation (50,650,loadImage('assets/animation/roboty_animation.png'),42,35,0,4,3,1));
  animList[ANIM_LIST.MISSILE] = (new Frame_animation (50,760,loadImage('assets/animation/missile_animation.png'),63,12,0,4,3,1));
  animList[ANIM_LIST.EXPLOSION] = (new Frame_animation (250,50,loadImage('assets/animation/explosion_animation.png'),50,50,0,14,3,0));
  animList[ANIM_LIST.FIRE] = (new Frame_animation (250,200,loadImage('assets/animation/fire_animation.png'),21,31,0,9,3,0));
  animList[ANIM_LIST.BOSSY] = (new Frame_animation (250,500,loadImage('assets/animation/bossy_animation.png'),177,95,0,6,3,1));
  animList[ANIM_LIST.BOSSY2] = (new Frame_animation (800,500,loadImage('assets/animation/bossy_animation.png'),177,95,96,6,3,1));
}

function setup() {

  windowWidth = (windowHeight) * SCREEN_RATIO;

  // Graphics
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
  let lazyWidth = windowHeight / (LAZY_W_RATIO / lazySize);

  lazyList[LAZY_LIST.LAZY] = new Lazy(windowWidth / 2 - 7 * lazyWidth,  windowHeight / 4 - lazyWidth,  lazySize, animList[ANIM_LIST.LAZY]);
  lazyList[LAZY_LIST.BUDDY] = new Lazy(windowWidth / 2 - 4 * lazyWidth, windowHeight / 4 + lazyWidth / 3, lazySize, animList[ANIM_LIST.BUDDY]);
  lazyList[LAZY_LIST.BADDY] = new Lazy( windowWidth / 2 - lazyWidth, windowHeight / 4 - lazyWidth, lazySize, animList[ANIM_LIST.BADDY]);
  lazyList[LAZY_LIST.CRAZY] = new Lazy( windowWidth / 2 + 2 * lazyWidth, windowHeight / 4 + lazyWidth / 3,lazySize, animList[ANIM_LIST.CRAZY]);
  lazyList[LAZY_LIST.OLDY] = new Lazy( windowWidth / 2 +  5 * lazyWidth, windowHeight / 4 - lazyWidth, lazySize, animList[ANIM_LIST.OLDY]);

  if (lazySelected < 0) {
    lazySelected = LAZY_LIST.LAZY;
  }
  lazyList[lazySelected].select(true); 

  // Bad Lazy
  robotyList[ROBOTY_LIST.ROBOTY] = new Lazy(windowWidth,  windowHeight * 0.2,  1.2, animList[ANIM_LIST.ROBOTY]);

  lazyKazeList[KAZE_LIST.LAZYKAZE] = new Lazy(windowWidth,  0,  0.8, animList[ANIM_LIST.LAZYKAZE]);
  lazyKazeList[KAZE_LIST.LAZYKAZE2] = new Lazy(windowWidth* 1.5,  windowHeight * 0.5,  0.8, animList[ANIM_LIST.LAZYKAZE]);

  bossy = new Lazy(windowWidth,  windowHeight * 0.5,  2.5, animList[ANIM_LIST.BOSSY]);
  
  // MISC
  score = 0;
  gameState = STATES.MENU;
  gameStage = 1;
  level = 1;
  defPosXLazy = windowWidth / 6;
}

function draw() {
  const GAME_SPEED_RESCALED = (GAME_SPEED / 1280) * windowWidth;
  background(0, 255, 255);

  switch (gameState) {
    case STATES.MENU:
      drawBg(0.5);
      drawMenuScreen();
      drawAllLazyStatic();
      
      //shootMissileRoboty(GAME_SPEED_RESCALED * 0.5);
      break;

    case STATES.INIT:
      drawBg(0.5);
      if (init()) {
        gameState = STATES.PLAY;
      }
      break;

    case STATES.PLAY:
      lazyList[lazySelected].alive = true;
      drawBg(GAME_SPEED_RESCALED);
      switch (gameStage) {
        // LEVEL 1
        case 1:
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          if (score > SCORE.LVL1) {
            gameStage++; 
          }
          break;

        // LEVEL 1 => LEVEL 2
        case 2:
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          robotyList[ROBOTY_LIST.ROBOTY].moveX(GAME_SPEED_RESCALED *0.4);
          playSound(soundList[SOUND_LIST.ROBOTY] , 0.7); 
          if (score > SCORE.LVL1 + 1) {
            gameStage++; 
            level++;
          }
          break;

        // LEVEL 2
        case 3:
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_EASY);
          drawRoboty(GAME_SPEED_RESCALED * 0.6);
          shootLongRoboty(GAME_SPEED_RESCALED);
          if (score > SCORE.LVL2) {
            gameStage++; 
          }
          break;

        // LEVEL 2 => 3
        case 4:
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_EASY);
          drawRoboty(GAME_SPEED_RESCALED * 0.6);
          playSound(soundList[SOUND_LIST.LAZYKAZE] , 0.8); 
          if (score > SCORE.LVL2 + 1) {
            gameStage++; 
            level++;
          }
          break;

        // LEVEL 3
        case 5:
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_EASY);
          drawRoboty(GAME_SPEED_RESCALED);
          shootShortRoboty(GAME_SPEED_RESCALED);
          drawLazyKaze(GAME_SPEED_RESCALED);
          if (score > SCORE.LVL3) {
            gameStage++; 
          }
          break;

        // LEVEL 3 => 4
        case 6:
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          bossy.moveX(GAME_SPEED_RESCALED * 0.4);
          robotyList[ROBOTY_LIST.ROBOTY].moveX(-GAME_SPEED_RESCALED * 0.4);
          playSound(soundList[SOUND_LIST.ROBOTY] , 0.7); 
          if (score > SCORE.LVL3 + 1) {
            gameStage++; 
            level++;
          }
          break;

        // LEVEL 4
        case 7:
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          bossy.moveX(GAME_SPEED_RESCALED * 0.03);
          drawBossy(GAME_SPEED_RESCALED * 0.3);
          shootMissileBossy(GAME_SPEED_RESCALED * 0.5, 2000);
          if (score > SCORE.LVL4) {
            gameStage++; 
          }
          break;

        // LEVEL  4 ==> 5
        case 8:
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          drawBossy(GAME_SPEED_RESCALED * 0.3);
          shootMissileBossy(GAME_SPEED_RESCALED * 0.5, 1500);
          playSound(soundList[SOUND_LIST.ROBOTY] , 0.7); 
          playSound(soundList[SOUND_LIST.LAZYKAZE] , 0.8); 
          if (score > SCORE.LVL4 + 1) {
            gameStage++; 
          }
          break;

          // LEVEL 5
        case 9:
          bossy.moveX(GAME_SPEED_RESCALED * 0.05);
          drawPipes(GAME_SPEED_RESCALED, SIZE_PIPE_MED);
          drawBossy(GAME_SPEED_RESCALED * 0.3);
          shootMissileBossy(GAME_SPEED_RESCALED * 0.5, 1500);
          shootShortBossy(GAME_SPEED_RESCALED);
          drawLazyKaze(GAME_SPEED_RESCALED);
          // if (score > SCORE.LVL5) {
          //   level++;
          //   gameStage++; 
          // }
          break;

        // END GAME
        case 9:
          drawBg(0);
          drawBgLazy(-GAME_SPEED_RESCALED / 4);
          drawEndGameScreen();
          break;
      }
      drawLazy();
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

function init() {
  for (i=0; i<LAZY_LIST.COUNT; i++ ) {
    if(i!=lazySelected) {
      moveToSpecLazy(lazyList[i], windowWidth + 500, NaN, 1, i+1, false);
    }
    else{
      if (moveToSpecLazy(lazyList[i], windowWidth / 6, NaN, 1, true)) {
        console.log(gameState)
        gameState = STATES.PLAY;
      }
    }
  }
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
      lazyList[i].moveY();
    }
  }
}

function drawRoboty(speed) {
  for(i=0; i < ROBOTY_LIST.COUNT; i++) {
    robotyList[i].moveAndBouceY(speed);
  }
}

function moveRoboty(speed) {
  for(i=0; i < ROBOTY_LIST.COUNT; i++) {
    return robotyList[i].moveTo(windowWidth * 0.8, windowHeight * 0.6, speed, 0.05, true);
  }
}

function drawBossy(speed) {
  return bossy.moveAndBouceY(speed);
}

function moveBossy(speed) {
    return bossy.moveTo(windowWidth * 0.8, windowHeight * 0.6, speed, 0.05, true);
}

function shootShortBossy(speed) {
  bossy.shootLazerShort(speed * LAZER_SPEED);
}

function shootLongBossy(speed) {
  bossy.shootLazerLong(speed * LAZER_SPEED);
}

function shootMissileBossy(speed, freq) {
  bossy.shootMissile(speed * LAZER_SPEED, freq);
}

function drawLazyKaze(speed) {
  for(i=0; i < KAZE_LIST.COUNT; i++) {
    if(!lazyKazeList[i].exploded && lazyKazeList[i].alive){
      lazyKazeList[i].moveX(speed * 1.5);
      lazyKazeList[i].moveAndBouceY(speed * 0.5);
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
    robotyList[i].shootLazerShort(speed * LAZER_SPEED);
  }
}

function shootLongRoboty(speed) {
  for(i=0; i < ROBOTY_LIST.COUNT; i++) {
      robotyList[i].shootLazerLong(speed * LAZER_SPEED);
  }
}

function shootMissileRoboty(speed) {
  for(i=0; i < ROBOTY_LIST.COUNT; i++) {
      robotyList[i].shootMissile(speed * LAZER_SPEED);
  }
}

function drawMenuScreen() {  
  let alpha = 100;
  startImage.x = windowWidth/2-windowWidth/TITLE_W_RATIO /2;
  startImage.y = windowHeight/2-windowHeight/TITLE_H_RATIO * 0.5;
  startImage.width = windowWidth/TITLE_W_RATIO;
  startImage.height = windowHeight/TITLE_H_RATIO;

  image(imgList[IMAGE_LIST.TITLE], startImage.x, startImage.y, startImage.width , startImage.height);

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

  textAlign(RIGHT, CENTER);
  levelTextSize = (windowWidth + windowHeight) / TEXT_SMALL_RATIO;
  textSize(levelTextSize);
  fill(255,255,255)
  text("LEVEL:" + level, windowWidth -  2* levelTextSize, windowHeight - levelTextSize);

  let livesText = "";
  livesTextSize = (windowWidth + windowHeight) / TEXT_BIG_RATIO;
  textSize(livesTextSize);
  fill(255,0,0)
  for (i=0; i<lazyList[lazySelected].lives; i++){
    livesText += '\u2665';
  }
  textAlign(RIGHT, CENTER);
  text(livesText, windowWidth - livesTextSize, livesTextSize);
  textAlign(CENTER, CENTER);
}

function handleCollision(){
  let lazyHitBox = {
    x: lazyList[lazySelected].x, 
    y: lazyList[lazySelected].y,
    width: lazyList[lazySelected].width  * 0.75,
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
    if (robotyList[i].lazerShort != null) {
      if (isCollision(robotyList[i].lazerShort, lazyHitBox)) {
        if(lazyList[lazySelected].hit(soundList[SOUND_LIST.IMPACT]) <= 0){
          lazyList[lazySelected].causOfDeath = DEATH.OTHER;
          gameState = STATES.GAME_OVER;
          }
        }
      }

    if (robotyList[i].lazerLong != null) {
      if (isCollision(robotyList[i].lazerLong, lazyHitBox)) {
        if(lazyList[lazySelected].hit(soundList[SOUND_LIST.IMPACT]) <= 0){
          lazyList[lazySelected].causOfDeath = DEATH.OTHER;
          gameState = STATES.GAME_OVER;
          }
        }
      }

    if (robotyList[i].missile != null) {
      if (isCollision(robotyList[i].missile, lazyHitBox)) {
        robotyList[i].missile.boom();
        if(lazyList[lazySelected].hit(soundList[SOUND_LIST.IMPACT]) <= 0){
          lazyList[lazySelected].causOfDeath = DEATH.BOOM;
          gameState = STATES.GAME_OVER;
          }
        }
      }
  }

  if (bossy.lazerShort != null) {
    if (isCollision(bossy.lazerShort, lazyHitBox)) {
      if(lazyList[lazySelected].hit(soundList[SOUND_LIST.IMPACT]) <= 0){
        lazyList[lazySelected].causOfDeath = DEATH.OTHER;
        gameState = STATES.GAME_OVER;
        }
      }
    }

    if (bossy.lazerLong != null) {
      if (isCollision(bossy.lazerLong, lazyHitBox)) {
        if(lazyList[lazySelected].hit(soundList[SOUND_LIST.IMPACT]) <= 0){
          lazyList[lazySelected].causOfDeath = DEATH.OTHER;
          gameState = STATES.GAME_OVER;
          }
        }
      }

    if (bossy.missile != null) {
      if (isCollision(bossy.missile, lazyHitBox)) {
        bossy.missile.boom();
        if(lazyList[lazySelected].hit(soundList[SOUND_LIST.IMPACT]) <= 0){
          lazyList[lazySelected].causOfDeath = DEATH.BOOM;
          gameState = STATES.GAME_OVER;
          }
        }
      }

  for(i=0; i < KAZE_LIST.COUNT; i++) {
    if(lazyKazeList[i].alive){
      if (isCollision(lazyKazeList[i], lazyHitBox)){
        if(lazyList[lazySelected].hit(soundList[SOUND_LIST.BOOM]) <= 0){
          lazyList[lazySelected].causOfDeath = DEATH.BOOM;
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
    if (isCollision(lazyKazeList[i], boomBox) || isCollision(lazyKazeList[i], lazyHitBox)){
        lazyKazeList[i].causOfDeath = DEATH.BOOM
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

// NEW CODE 
function moveToAllLazy(x, y, speed, accel) {
    for (i=0; i<LAZY_LIST.COUNT; i++) {
      return lazyList[i].moveTo(x, y , speed, accel);
    }
}

function moveToSpecLazy(lazy, x, y, speed, accel, bound) {
  return lazy.moveTo(x, y , speed, accel, bound);
}


function drawAllLazyStatic() {
  for (i=0; i<LAZY_LIST.COUNT; i++) {
    lazyList[i].draw();
  }
}
