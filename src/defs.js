/**
 * @file LazyBird def file.
 * @copyright therundmc & weirdaz - 2022
 */

// -- PUBLIC CONSTANTS 
 const GAME_SPEED = 5;
 const FRAME_RATE = 60;
 
 const NB_PIPES = 8;
 const FIX_SIZE = false;
 
 // RATIO
 const MAP_W_SUN_RATIO   = 1;
 const MAP_H_SUN_RATIO   = 3;
 const MAP_W_BG_RATIO    = 1;
 const MAP_H_BG_RATIO    = 1.05;
 const MAP_W_GRASS_RATIO = 1;
 const MAP_H_GRASS_RATIO = 1;

 const PIPE_W_RATIO = 14;
 const PIPE_H_RATIO = 1;

 const LAZY_RATIO = 10;

 const TITLE_W_RATIO = 3;
 const TITLE_H_RATIO = 8;

 const TEXT_SMALL_RATIO = 50;
 const TEXT_BIG_RATIO = 25;

 // SOUNDS
 const SOUND_LIST = {
	SONG: 0,
	FLAP: 1,
	OCEAN: 2,
	IMPACT: 3,
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
    // ---
    COUNT: 5,

}

// GAME STATES
const STATES = {
    INIT: 0,
    MENU: 1,
    PAUSE: 2,
	PLAY: 3,
	GAME_OVER: 4,
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
];

let startImage = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
}

let lazySelected = -1

 let pipesList = [];
 let lazyList = [];
 let mapList = [];

 let gameState = STATES.INIT;

 let frameCounter = 0;
 let score = 0;
 


 