/**
 * @file LazyBird Lazy class file.
 * @copyright therundmc & weirdaz - 2022
 */
const gravityDefault = 1;
const anitgravityDefault = 1;
const nbOfJumpRep = 15;

class Lazy {
    constructor (x, y, size, img) {
        this.x = x;
        this.y = y;
        this.width = windowHeight / (LAZY_RATIO / size); // Lazy is a square
        this.height = windowHeight / (LAZY_RATIO / size);
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
        this.selected = false;
        this.animate = false;
		this.alive = true;
		this.deadPosY = 0;
		this.transparency = 255;

        this.heightRatio = windowHeight / height;
    }

    init() {
        this.x = windowWidth / 4;
    }

    moveY(speed) {
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
        this.draw();
        }

    jumpY() {
        this.gravity = gravityDefault;
        this.antiGravity += this.accel
        this.y -= this.antiGravity;
    }

    fallY() {
        this.antiGravity = anitgravityDefault;
        this.gravity +=  this.deccel;
        this.y += this.gravity;
    }

    moveX(speed) {
        if (this.x > windowWidth + windowWidth / 8) {
            this.x = - windowWidth / 8;
            this.y = random(windowHeight/10, windowHeight/4);
            this.size = random(0.2, 0.8);
            this.width = windowHeight / (LAZY_RATIO / this.size ); // Lazy is a square
            this.height = windowHeight / (LAZY_RATIO / this.size );
        }
        else if (this.x < 0 - windowWidth / 4) {
            this.x = windowWidth;
            this.y = random(windowHeight/10, windowHeight/4);
            this.width = windowHeight / (LAZY_RATIO / this.size ); // Lazy is a square
            this.height = windowHeight / (LAZY_RATIO / this.size );
        }
        else {
            this.x -= speed;
        }
        this.draw();
    }

    die() {
		if(this.alive)
		{
			this.alive = false;
			this.deadPosY = this.y;
			this.transparency = 255;
		}
		image(this.img[5], this.x, this.y, this.width, this.height);
		
		this.now = new Date().getTime()
        this.delta = this.now - this.last;

		if (this.delta >= 33) {
			
			this.last = this.now;
			
			this.deadPosY -= 10;
			this.transparency -= 10;
		
		}
		
		tint(255,this.transparency);
		image(animList[ANIM_LIST.LAZY][6], this.x, this.deadPosY, this.width, this.height);
		noTint();
		
    }

    draw() {
         image(this.img[this.animFrame], this.x, this.y, this.width, this.height);
		 this.now = new Date().getTime()
         this.delta = this.now - this.last;

		 if (this.delta >= 100 && this.animate) {
			 this.animFrame++;
			if(this.animFrame > 4)
				this.animFrame = 0;
			this.last = this.now;
		}
	}

    isSelected(select) {
        if (select) {
            this.selected = true;
            this.animate = true;
            this.size = 1;
        }
        else {
            this.selected = false;
            this.animate = false;
            this.size = 0.8;
        }
        this.resize();
    }

    resize() {
        this.height = windowHeight / (LAZY_RATIO / this.size);
        this.width = windowHeight / (LAZY_RATIO / this.size);
        this.draw();
    }
}