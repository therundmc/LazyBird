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
        this.size = size;
        this.width = windowWidth / (LAZY_W_RATIO / size); // Lazy is a square
        this.height = windowHeight / (LAZY_H_RATIO / size);
        this.img = img;
        this.deccel = 1 * windowHeight  / GRAVITY_FORCE;
        this.accel = 1 * windowHeight  / JUMP_FORCE;
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
        this.animate = true;
        this.alive = true;
        this.deadPosY = 0;
        this.transparency = 255;
        this.initSpeed = 0;
        this.speed = 0;
        this.animSens = 1;
        this.direction = 1;
        this.lazerShort = null;
        this.lazerLong = null;
        this.missile =  null;
        this.shooting = false;
        this.boomFrame = 0;
        this.causOfDeath = 0;
        this.exploded = false;
        this.lives = LIVES;
        this.invincibility = false;

        this.explosion = animList[ANIM_LIST.EXPLOSION];

        this.angle = 0;

        this.invincibilityTimer = 0;
        this.invincibilityTimerStart = 0;

        this.heightRatio = windowHeight / height;
    }

    // PUBLIC METHODS
    moveY() {
        if (this.alive) {
            if (this.jumpDetected != 0 && this.jumpRep < this.nbOfJumpRep) {
                this.jumpRep++;
                this.jump();
                }
                else if (this.jumpRep >= this.nbOfJumpRep){
                this.jumpDetected = 0;
                this.jumpRep = 0;
                this.fall();
                }
                else {
                this.fall();
                } 
            this.draw();
            }
    }

    moveAndBouceY(speed) {
        if (this.y > windowHeight - this.width) {
            this.direction = 1;
        }
        else if (this.y < 0 ) {
            this.direction = -1;
        }
        this.y -= (speed * this.direction);

        this.draw();
    }

    moveX(customSpeed) {
    if (this.alive) {
        if (this.x > windowWidth + windowWidth * 0.7) {
            this.x = - windowWidth / 8;
            this.y = random(windowHeight/10, windowHeight);
        }
        else if (this.x < 0 - windowWidth * 0.5) {
            this.x = windowWidth;
            this.y = random(windowHeight/10, windowHeight);
        }
        else {
            if (customSpeed != 0) {
                this.x -= customSpeed;
            }
            else {
                this.x -= this.speed;
            }

        }
        this.draw();
    }

    }

    hit(sound, impactDirection) {
        if(!this.invincibility) {
            background(255, 0, 0);
            forcePlaySound(sound, 0.8);
            this.lives--;
            this.invincibilityTimerStart = new Date().getTime()
        }

        this.invincibilityTimer = new Date().getTime() - this.invincibilityTimerStart;

        if (this.invincibilityTimer > AFTER_HIT) {
            this.invincibilityTimer = 0;
            this.invincibility = false;
        }
        else {
            this.invincibility = true;
        }

        if(this.live <= 0) {
            this.die();
        }

        return this.lives;

    }

    die() {
        if(this.alive)
        {
            this.alive = false;
            this.deadPosY = this.y;
            this.transparency = 255;
        }

        if (this.causOfDeath != DEATH.BOOM ) {
            this.drawBumk();
        }
        else {
            this.drawBoom();
        }
    }

    drawBumk(){
        this.img.drawSpecFrame(5,this.width, this.height);
        this.now = new Date().getTime()
        this.delta = this.now - this.last;

        if (this.delta >= 33) {
            
            this.last = this.now;
            this.deadPosY -= 10;
            this.transparency -= 10;
        
        }
        tint(255,this.transparency);
        image(imgList[IMAGE_LIST.LAZY_GHOST], this.x, this.deadPosY, this.width, this.height);
        noTint();
    }

    drawBoom(){

        this.explosion.draw(this.x, this.y,this.width*1.5, this.height*1.5);
        if (this.explosion.isDone()) {
            this.exploded = true;
        }
        // this.now = new Date().getTime()
        // this.delta = this.now - this.last;
        // if (this.delta >= 60 && this.boomFrame < 14) {
            
        //     this.last = this.now;
        //     this.boomFrame++;
        // }

        // if (this.boomFrame < 14){
        //     image(BOOM[this.boomFrame], this.x - this.width , this.y - this.height, this.width * 3, this.height * 3);
        // }
        // else {
        //     this.exploded = true;
        //     this.boomFrame = 0;
        // }
    }

    shootLazerShort(speed) {
        if (this.lazerShort != null) {
            if (this.lazerShort.isOnScreen()) {
                this.lazerShort.moveX(speed);
                this.shooting = true;
            }
            else{
                this.lazerShort = new Lazer(imgList[IMAGE_LIST.LAZER_SHORT], 0, this.x, this.y + this.width/2, this.width * 0.6, this.height/16, 1200);
                forcePlaySound(soundList[SOUND_LIST.LAZER], 0.8);
                this.shooting = false;
            }
        }
        else {
            forcePlaySound(soundList[SOUND_LIST.LAZER], 0.8);
            this.lazerShort = new Lazer(imgList[IMAGE_LIST.LAZER_SHORT], 0, this.x, this.y + this.width/2, this.width * 0.6, this.height/16, 1200);
        }
    }

    shootLazerLong(speed) {
        if (this.lazerLong != null) {
            if (!this.lazerLong.isDone()) {
                this.lazerLong.stretchX(speed);
                this.lazerLong.y = this.y + this.height * 0.5;
                this.shooting = true;
            }
            else{
                this.lazerLong = new Lazer(imgList[IMAGE_LIST.LAZER_LONG], 0, this.x - this.width * 0.3, this.y + this.height, this.width / 2, this.height * 0.3, 3000);
                playSound(soundList[SOUND_LIST.LAZER_LONG], 0.8);
                this.shooting = false;
            }
        }
        else {
            playSound(soundList[SOUND_LIST.LAZER_LONG], 0.8);
            this.lazerLong = new Lazer(imgList[IMAGE_LIST.LAZER_LONG], 0, this.x - this.width * 0.3, this.y + this.height, this.width / 2, this.height * 0.3, 3000);
        }
    }

    
    shootMissile(speed, freq) {
        if (this.missile != null) {
            if (!this.missile.isDone()) {
                this.missile.moveX(speed);
                this.shooting = true;
            }
            else{
                this.missile = new Lazer(0, animList[ANIM_LIST.MISSILE], this.x + this.width * 0.5, this.y + this.height * 0.6, this.width * 0.6, this.height * 0.13, freq);
                forcePlaySound(soundList[SOUND_LIST.MISSILE], 0.8);
                this.shooting = false;
            }
        }
        else {
            forcePlaySound(soundList[SOUND_LIST.MISSILE], 0.8);
            this.missile = new Lazer(0, animList[ANIM_LIST.MISSILE], this.x + this.width * 0.5, this.y + this.height * 0.6, this.width * 0.5, this.height * 0.13, freq);
        }
    }

    draw() {

        //this.img.draw(this.x, this.y, (this.width / 32)); // TODO calculate precisely scale
        this.img.draw(this.x, this.y,this.width, this.height); // TODO calculate precisely scale
        //  image(this.img[this.animFrame], this.x, this.y, this.width, this.height);
        //  this.now = new Date().getTime()
        //  this.delta = this.now - this.last;

        //  if (this.delta >= 33 && this.animate) {
        //      this.animFrame += this.animSens;
        //     if(this.animFrame >= 4)
        //     {
        //         this.animSens = -1;
        //         //this.animFrame = 0;
        //     }
        //     if(this.animFrame <= 0)
        //     {
        //         this.animSens = 1;
        //     }
        //     this.last = this.now;
        // }
    }

    select(select) {
        if (select) {
            this.selected = true;
            this.animate = true;
            this.size = 1;
        }
        else {
            this.selected = false;
            //this.animate = false;
            this.size = 0.8;
        }
        this.resize();
    }

    resize() {
        this.height = windowHeight / (LAZY_H_RATIO / this.size);
        this.width = windowWidth / (LAZY_W_RATIO / this.size);
        this.draw();
    }

    disableGravity() {
         this.gravity = 0;
    }

    // New Code propre
    moveTo(x, y, speed, accel, bound) {
        if (this.alive) {

            this.speed += accel; 

            if (!Number.isNaN(x)) {
                if (this.x < (x - this.speed)) {
                    this.x = this.checkBoundX(this.x += this.speed, bound);
                }
                else if (this.x > (x + this.speed)) {
                    this.x = this.checkBoundX(this.x -= this.speed, bound);
                }
                else {
                    this.x = this.checkBoundX(x, bound);
                }
            }

            if (!Number.isNaN(y)) {
                if (this.y < (y - this.speed)) {
                    this.y = this.checkBoundY(this.y += this.speed, bound);
                }
                else if (this.y > (y + this.speed)) {
                    this.y = this.checkBoundY(this.y -= this.speed, bound);
                }
                else {
                    this.y= this.checkBoundY(y, bound);
                }
            }

            this.draw();

            if ((this.x == x || Number.isNaN(x)) && (this.y == y || Number.isNaN(y))) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    // PRIVATE METHODS
    jump() {
        this.gravity = gravityDefault;
        this.antiGravity += this.accel
        this.y -= this.antiGravity;

        //this.rotateImg(this.img[this.animFrame], this.x, this.y, this.width, this.height, -0.5)
    }

    fall() {
        this.antiGravity = anitgravityDefault;
        this.gravity +=  this.deccel;
        this.y += this.gravity;

        //this.rotateImg(this.img[this.animFrame], this.x, this.y, this.width, this.height, 0.5)
    }

    checkBoundX(x, b) {
        if (!b) {return x;}
        if (x < 0) {
            x = 0;
        }
        else if (x > windowWidth - this.width) {
            x = windowWidth - this.width;
        }
        return x;
    }

    checkBoundY(y, b) {
        if (!b) {return y;}
        if (y < 0) {
            y = 0;
        }
        else if (y > windowHeight - this.height) {
            y = windowHeight - this.height;
        }
        return y;
    }

    rotateImg(img, x, y, w, h, va, a) {
            this.angle += va;
            imageMode(CENTER);
            translate(x+w/2, y+w/2);
            rotate(PI/180*this.angle);
            image(img, 0, 0, w, h);
            rotate(-PI / 180 * this.angle);
            translate(-(x+w/2), -(y+w/2));
            imageMode(CORNER);
    }
}