/**
 * @file LazyBird Lazer class file.
 * @copyright therundmc & weirdaz - 2022
 */

 class Lazer {
    constructor (img, x, y, width, height) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.deccel = 0.5;
    }

    moveX(speed) {
        this.x -= speed;
        this.draw();
    }

    stretchX(speed) {
        this.deccel += 0.3;

        this.x -= speed;
        this.width += speed / 4;
        this.draw();
    }

    isOnScreen() {
        if (this.x > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    }
}