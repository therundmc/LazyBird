/**
 * @file LazyBird def file.
 * @copyright therundmc & weirdaz - 2022
 */

// -- PUBLIC CONSTANTS 
 const GAME_SPEED = 6;
 const ROBOTY_SPEED = 2;
 const LAZER_SPEED = 3;
 const FRAME_RATE = 60;
 const PIXEL_DENSITY = 1;

 const JUMP_FORCE = 1100; // less is more
 const GRAVITY_FORCE = 1500;
 
 const NB_PIPES = 8;
 const FIX_SIZE = false;
 
 // RATIO
 const SCREEN_RATIO = 16 / 8.3;
 
 const MAP_W_SUN_RATIO   = 1;
 const MAP_H_SUN_RATIO   = 3;
 const MAP_W_BG_RATIO    = 1;
 const MAP_H_BG_RATIO    = 1.05;
 const MAP_W_GRASS_RATIO = 1;
 const MAP_H_GRASS_RATIO = 1;

 const PIPE_W_RATIO = 10;
 const PIPE_H_RATIO = 1;

 const LAZY_RATIO = 8;

 const TITLE_W_RATIO = 2;
 const TITLE_H_RATIO = 7;

 const TEXT_SMALL_RATIO = 50;
 const TEXT_BIG_RATIO = 25;

 const SIZE_PIPE_EASY = 0.3;
 const SIZE_PIPE_MED = 0.4;
 const SIZE_PIPE_HARD = 0.6;

 const AFTER_HIT = 300;
 const LIVES = 3;

 // SOUNDS
 const SOUND_LIST = {
    SONG: 0,
    FLAP: 1,
    OCEAN: 2,
    IMPACT: 3,
    CLICK: 4,
    LAZER: 5,
    MENU: 6,
    BOOM: 7,
    ROBOTY: 8,
    LAZYKAZE: 9,
    // ---
    COUNT: 10
}

// IMAGES
const IMAGE_LIST = {
    BKG_SUN: 0,
    BKG_ROCKS: 1,
    BKG_CLOUDS: 2,
    BKG_GROUND: 3,
    PIPE_DOWN: 4,
    PIPE_UP: 5,
    TITLE: 6,
    // ---
}

// ANIM
const ANIM_LIST = {
    LAZY: 0,
    BUDDY: 1,
    BADDY: 2,
    CRAZY: 3,
    OLDY: 4,
    ROBOTY: 5,
    LAZYKAZE: 6,
    // ---
    COUNT: 7,

}

// LAZY
const LAZY_LIST = {
    LAZY: 0,
    BUDDY: 1,
    BADDY: 2,
    CRAZY: 3,
    OLDY: 4,
    // ---
    COUNT: 5,

}

// ROBOTY
const ROBOTY_LIST = {
    ROBOTY: 0,
    // ---
    COUNT: 1,

}

// ROBOTY
const KAZE_LIST = {
    LAZYKAZE: 0,
    LAZYKAZE2: 1,
    LAZYKAZE3: 2,
    // ---
    COUNT: 3,

}

// CAUSE OF DEATH
const DEATH = {
    LAZYKAZE: 0,
    OTHER: 1,
    // ---
    COUNT: 2,

}

// GAME STATES
const STATES = {
    INIT: 0,
    MENU: 1,
    PAUSE: 2,
    INIT: 3,
    PLAY: 4,
    GAME_OVER: 5,
    // ---
}

// BKG LIST
const BKG_LIST = {
    SUN: 0,
    ROCKS: 1,
    CLOUDS: 2,
    GROUND: 3,
    // ---
}


 // -- PUBLIC VARIABLES 
 let soundList = [];
 let imgList = [];

 let animList = [
    [ANIM_LIST.LAZY],
    [ANIM_LIST.BUDDY],
    [ANIM_LIST.CRAZY],
    [ANIM_LIST.BADDY],
    [ANIM_LIST.OLDY],
    [ANIM_LIST.ROBOTY],
    [ANIM_LIST.LAZYKAZE],
];

let startImage = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
}

let lazySelected = -1;

 let pipesList = [];
 let lazyList = [];
 let robotyList = [];
 let lazyKazeList = [];
 let mapList = [];
 let lazer = 0;
 let causOfDeath = 0;

 let invicibilityTimer = 0;
 let invicibilityTimerStart = 0;

 let gameState = STATES.INIT;
 let gameStage = 1;

 let score = 0;
 let initSpeed = 0;

 let defPosXLazy = 0;

 let pipeCrossed = false;
 let pipeCrossedPrev = false;

 let frameCounter = 0;
 
 let logo;
 
 let BOOM = [];
 


 