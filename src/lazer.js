/**
 * @file LazyBird Lazer class file.
 * @copyright therundmc & weirdaz - 2022
 */

 class Lazer {
    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = 0;
    }

    moveX(speed) {
        this.x -= speed;
        this.width += speed / 10;
        this.draw();
    }

    stretchX(speed) {
        this.width += speed;
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
        fill(255,50,0);
        noStroke();
        tint(255, 125);
        rect(this.x, this.y, this.width, this.height);
        noTint(255, 125);
    }
}