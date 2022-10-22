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
        this.accel = 1 * windowHeight  / 1400;
        this.gravity = gravityDefault;
        this.antiGravity = anitgravityDefault;
        this.jumpDetected = 0;
		this.animFrame = 0;
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
		image(this.img[5], this.x, this.y, this.width, this.height);
    }

    draw() {
         image(this.img[this.animFrame], this.x, this.y, this.width, this.height);
		const now = new Date().getTime(),
           delta = now - last;


     if (delta >= 100) {
		 this.animFrame++;
		if(this.animFrame > 4)
			this.animFrame = 0;
       last = now;
    }
	}

    resize(width, height) {
        this.width = width;
        this.height = height;
    }
}