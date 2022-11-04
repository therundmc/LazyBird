/**
 * @file LazyBird Pipe class file.
 * @copyright therundmc & weirdaz - 2022
 */

let offset = 200

class Pipe {
    constructor (x, y, orientation, index, size, img) {
        this.x = x;
        this.y = y;
        this.width = windowWidth / PIPE_W_RATIO;
        this.height = windowHeight / PIPE_H_RATIO;
        this.img = img;
        this.size = windowHeight * size;
        this.orientation = orientation;
        this.index = index;
    }

    moveX(speed) {
        this.x -= speed;

        if (this.orientation == "down" ) {

            this.y = windowHeight - this.size;
        }
        else {
            this.y = - (windowHeight - this.size);
        }
        this.draw();
    }

    init (x, size) {
        this.x = x;
        this.size = size;
        this.size = random(windowHeight * this.size, windowHeight * this.size);
        this.draw();
    }

    isOnScreen () {
        if (this.x + windowWidth > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    }

    resize() {
        this.x = this.index * (windowWidth / (NB_PIPES / 2));
        this.width = windowWidth / PIPE_W_RATIO;
        this.height = windowHeight / PIPE_H_RATIO;
        //this.draw();
    }
}