/**
 * @file LazyBird Lazer class file.
 * @copyright therundmc & weirdaz - 2022
 */

 class Lazer {
    constructor (img, anim, x, y, width, height, duration) {
        this.img = img;
        this.anim = anim;
        this.explosion = animList[ANIM_LIST.EXPLOSION];
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
        this.deccel += this.width / 10;

        this.x -= speed + this.deccel;
        this.width += speed + this.deccel;

        // if (this.isOnScreen()) {
        //     this.x -= speed  + this.deccel;
        //     this.width += speed + this.deccel;
        // }
        // else {
        //     this.x += speed  + this.deccel;
        //     this.width -= speed + this.deccel;
        // }
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
                this.anim.draw(this.x, this.y, this.width, this.height);
            }
        }
        else {
            this.explosion.draw(this.x, this.y, this.width, this.height);
        }
    }

    boom() {
        this.hit = true;
    }
}