const gravityDefault = 1;
const anitgravityDefault = 1;
const nbOfJumpRep = 15;

class Lazy {
    constructor (x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.deccel = 0.2;
        this.accel = 1 * windowHeight  / 1200;
        this.gravity = gravityDefault;
        this.antiGravity = anitgravityDefault;
        this.jumpDetected = 0;
		this.animFrame = 0;
        this.delta = 0;
        this.now = 0;
        this.last = 0;
        this.jumpRep = 0;
        this.nbOfJumpRep = nbOfJumpRep;

        this.heightRatio = windowHeight / height;
    }

    moveY() {
    if (this.jumpDetected != 0 && this.jumpRep < this.nbOfJumpRep) {
        this.jumpRep++;
        this.jumpY();
        }
        else if (this.jumpRep >= this.nbOfJumpRep){
        this.jumpDetected = 0;
        this.jumpRep = 0;
        this.fallY();
        }
        else {
        this.fallY();
        } 
    }

    jumpY() {
        this.gravity = gravityDefault;
        this.antiGravity += this.accel
        this.y -= this.antiGravity;
        this.draw();
    }

    fallY() {
        this.antiGravity = anitgravityDefault;
        this.gravity +=  this.deccel;
        this.y += this.gravity;
        this.draw();
    }

    moveX(speed) {
        if (this.x > windowWidth + windowWidth / 8) {
            this.x = - windowWidth / 8;
            this.y = random(windowHeight/10, windowHeight/4);
        }
        else if (this.x < 0 - windowWidth / 4) {
            this.x = windowWidth;
            this.y = random(windowHeight/10, windowHeight/4);
        }
        else {
            this.x -= speed;
        }
        this.draw();
    }

    die() {
		image(this.img[5], this.x, this.y, this.width, this.height);
    }

    draw() {
         image(this.img[this.animFrame], this.x, this.y, this.width, this.height);
		 this.now = new Date().getTime()
           this.delta = this.now - this.last;

     if (this.delta >= 100) {
		 this.animFrame++;
		if(this.animFrame > 4)
			this.animFrame = 0;
        this.last = this.now;
    }
	}

    resize() {
        this.height = windowHeight / this.heightRatio;
        this.width = this.height // need to be a square
        this.draw();
    }
}