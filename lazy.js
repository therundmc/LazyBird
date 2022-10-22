const gravityDefault = 1;
const anitgravityDefault = 1;

class Lazy {
    constructor (x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.deccel = 0.2;
        this.accel = 1.5;
        this.gravity = gravityDefault;
        this.antiGravity = anitgravityDefault;
        this.jumpDetected = 0;
    }

    moveY() {
        this.antiGravity = anitgravityDefault;
        this.jumpDetected = 0;
        this.gravity +=  this.deccel;
        this.y += this.gravity;
        this.draw();
    }

    jumpY() {
        this.gravity = gravityDefault;
        this.antiGravity += this.accel
        this.y -= this.antiGravity;
        this.draw();
    }

    die() {
        textSize(64);
        fill(255,0,0)
        text('YOU DIE', windowWidth/2, windowHeight/2);
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
    }
}