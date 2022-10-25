/**
 * @file LazyBird Pipe class file.
 * @copyright therundmc & weirdaz - 2022
 */

let offset = 200

class Pipe {
    constructor (x, y, orientation, index, img) {
        this.x = x;
        this.y = y;
        this.width = windowWidth / PIPE_W_RATIO;
        this.height = windowHeight / PIPE_H_RATIO;
        this.img = img;
        this.size = random(windowHeight / 4, windowHeight / 3.5);
        this.orientation = orientation;
        this.index = index
    }

    moveX(speed) {
        if (-this.x < windowWidth) {
            this.x -= speed;
        }
        else {
            this.size = random(windowHeight / 3.7 , windowHeight / 2.7);
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