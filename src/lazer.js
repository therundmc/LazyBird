/**
 * @file LazyBird Lazer class file.
 * @copyright therundmc & weirdaz - 2022
 */

 class Lazer {
    constructor (img, anim, x, y, width, height, duration) {
        this.img = img;
        this.anim = anim;
        this.explosion = animList2[ANIM_LIST.EXPLOSION];
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.deccel = 0.5;
        this.duration = duration;
        this.hit = false;

        this.start = new Date().getTime();
        this.delta = 0;
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

    isDone() {
        if (this.delta > this.duration) {
            return true;
        }
    }

    draw() {
        this.delta = new Date().getTime() - this.start;
        if (!this.hit) {
            if (this.img != 0){
                image(this.img, this.x, this.y, this.width, this.height)
            }
            else {
                this.anim.draw(this.x, this.y, 3);
            }
        }
        else {
            this.explosion.draw(this.x, this.y, 3);
        }
    }

    boom() {
        this.hit = true;
    }
}