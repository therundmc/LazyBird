/**
 * @file LazyBird def file.
 * @copyright therundmc & weirdaz - 2022
 */

// -- PUBLIC CONSTANTS 
 const GAME_SPEED = 8;
 const ROBOTY_SPEED = 2;
 const LAZER_SPEED = 3;
 const FRAME_RATE = 60;
 const PIXEL_DENSITY = 1;

 const JUMP_FORCE = 1100; // less is more
 const GRAVITY_FORCE = 1500;
 
 const NB_PIPES = 8;
 const FIX_SIZE = false;
 
 // RATIO
 const SCREEN_RATIO = 16 / 9;
 
 const MAP_W_SUN_RATIO   = 1;
 const MAP_H_SUN_RATIO   = 3;
 const MAP_W_BG_RATIO    = 1;
 const MAP_H_BG_RATIO    = 1.05;
 const MAP_W_GRASS_RATIO = 1;
 const MAP_H_GRASS_RATIO = 1;

 const PIPE_W_RATIO = 14;
 const PIPE_H_RATIO = 1;

 const LAZY_RATIO = 8;

 const TITLE_W_RATIO = 2;
 const TITLE_H_RATIO = 7;

 const TEXT_SMALL_RATIO = 50;
 const TEXT_BIG_RATIO = 25;

 // SOUNDS
 const SOUND_LIST = {
    SONG: 0,
    FLAP: 1,
    OCEAN: 2,
    IMPACT: 3,
    CLICK: 4,
    LAZER: 5,
    // ---
}

// IMAGES
const IMAGE_LIST = {
    BKG_SUN: 0,
    BKG: 1,
    BKG_GRASS: 2,
    PIPE_DOWN: 3,
    PIPE_UP: 4,
    TITLE: 5,
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
    // ---
    COUNT: 6,

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
    BKG: 1,
    GRASS: 2,
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
 let mapList = [];
 let lazer = 0;

 let gameState = STATES.INIT;
 let gameStage = 1;

 let score = 0;
 let initSpeed = 0;

 let defPosXLazy = 0;

 let pipeCrossed = false;
 let pipeCrossedPrev = false;

 let frameCounter = 0;
 


 