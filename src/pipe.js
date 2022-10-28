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
        this.sizeMin = size - 0.1;
        this.sizeMax = size + 0.1;
        this.size = random(windowHeight * this.sizeMin, windowHeight * this.sizeMax);
        this.orientation = orientation;
        this.index = index
    }

    moveX(speed) {
        if (-this.x < windowWidth) {
            this.x -= speed;
        }
        else {
            this.size = random(windowHeight * this.sizeMin , windowHeight * this.sizeMax);
            this.x = windowWidth;
        }

        if (this.orientation == "down" ) {

            this.y = windowHeight - this.size;
        }
        else {
            this.y = - (windowHeight - this.size);
        }

    
        this.draw();
    }

    changeSize (size) {
        this.sizeMin = size - 0.1;
        this.sizeMax = size + 0.1;
        this.draw();
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