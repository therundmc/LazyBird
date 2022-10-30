
function isCollision(object1, object2)
{
    if ((object1.x < object2.x + object2.width) && 
        (object1.x + object1.width > object2.x) &&
        (object1.y < object2.y + object2.height) && 
        (object1.y + object1.height > object2.y)) {
            return true;
    }
    return false;
}

function playSound(sound, volume) {
    if (!sound.isPlaying()) {
        sound.setVolume(volume);
        sound.play();
    }
}

function stopSound(sound) {
    if (sound.isPlaying()) {
        sound.stop();
    }
}

function forcePlaySound(sound, volume) {
    sound.setVolume(volume);
    sound.play();
}

function deInit() {
    // Background
    mapList = [];

    // Pipes
    pipesList = [];

    // Lazy
    lazyList = [];

     // Bad Lazy
    robotyList = [];
    lazyKazeList = [];

    for (i=0; i< SOUND_LIST.COUNT; i++) {
        soundList[i].stop();
    } 
}

function breath() {
    return (128 + 128 * sin(millis() / 1000));
}