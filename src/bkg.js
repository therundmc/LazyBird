/**
 * @file LazyBird Map class file.
 * @copyright therundmc & weirdaz - 2022
 */

class Bkg {
    constructor (x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.widthRatio = windowWidth / width;
        this.heightRatio = windowHeight / height;
    }

    moveX(speed) {
        if (-this.x < this.width) {
            this.x -= speed;
        }
        else {
            this.x = 0;
        }
        this.draw();
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        image(this.img, this.x + this.width - 1, this.y, this.width, this.height);
    }

    resize() {
        this.width = windowWidth / this.widthRatio;
        this.height = windowHeight / this.heightRatio;
        resizeCanvas(this.width, this.height);
        this.draw();
    }
}
