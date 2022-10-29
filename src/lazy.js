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
        this.width = windowHeight / (LAZY_RATIO / size); // Lazy is a square
        this.height = windowHeight / (LAZY_RATIO / size);
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
        this.lazer = new Lazer(0, this.y + this.width/2, this.width/2, this.height/16);
        this.shooting = false;
        this.boomFrame = 0;
        this.causOfDeath = 0;
        this.exploded = false;
        this.lives = LIVES;
        this.invincibility = false;

        this.invincibilityTimer = 0;
        this.invincibilityTimerStart = 0;

        this.heightRatio = windowHeight / height;
    }
    setSpeed(speed){
        this.animate = true;
        this.speed = speed;
    }

    init(initSpeed) {
        if (initSpeed != 0){
            if (this.selected) {
                if (this.x < defPosXLazy) {
                return true;
                }
                else {
                this.moveX(-initSpeed);
                }   
            }
            else {
                if (this.x > (windowWidth + this.width)){
                    this.size = random(0.4,0.8);
                    this.resize();
                    this.x = windowWidth + windowWidth * random(0.1,0.7);
                    this.y = random(windowHeight/20, windowHeight/4);
                }
                else {
                    this.moveX(initSpeed * 15);
                }
            }
        }
        this.draw();
    }

    moveY(speed) {
        if (this.alive) {
            if (speed != 0) {
                if (this.y > windowHeight - this.width) {
                    this.direction = 1;
                }
                else if (this.y < 0 ) {
                    this.direction = -1;
                }
                this.y -= (speed * this.direction);
            }
            else {
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
            this.draw();
            }
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

    moveX(customSpeed) {
    if (this.alive) {
        if (this.x > windowWidth + windowWidth * 0.7) {
            this.x = - windowWidth / 8;
            this.y = random(windowHeight/10, windowHeight);
            this.width = windowHeight / (LAZY_RATIO / this.size ); // Lazy is a square
            this.height = windowHeight / (LAZY_RATIO / this.size );
        }
        else if (this.x < 0 - windowWidth * 0.5) {
            this.x = windowWidth;
            this.y = random(windowHeight/10, windowHeight);
            this.width = windowHeight / (LAZY_RATIO / this.size ); // Lazy is a square
            this.height = windowHeight / (LAZY_RATIO / this.size );
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

        if (this.causOfDeath != DEATH.LAZYKAZE ) {
            this.drawBumk();
        }
        else {
            this.drawBoom();
        }
    }

    drawBumk(){
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

    drawBoom(){
        this.now = new Date().getTime()
        this.delta = this.now - this.last;
        if (this.delta >= 60 && this.boomFrame < 14) {
            
            this.last = this.now;
            this.boomFrame++;
        }

        if (this.boomFrame < 14){
            image(BOOM[this.boomFrame], this.x - this.width , this.y - this.height, this.width * 3, this.height * 3);
        }
        else {
            this.exploded = true;
            this.boomFrame = 0;
        }
    }

    shootShort(speed) {
        if (this.lazer.isOnScreen()) {
            this.lazer.moveX(speed);
            this.shooting = true;
        }
        else{
            this.lazer = new Lazer(this.x, this.y + this.width/2, this.width/2, this.height/16);
            forcePlaySound(soundList[SOUND_LIST.LAZER], 0.8);
            image(this.img[6], this.x, this.y, this.width, this.height);
            this.shooting = false;
        }
    }

    shootLong(speed) {
        //TODO
    }

    draw() {
         image(this.img[this.animFrame], this.x, this.y, this.width, this.height);
         this.now = new Date().getTime()
         this.delta = this.now - this.last;

         if (this.delta >= 33 && this.animate) {
             this.animFrame += this.animSens;
            if(this.animFrame >= 4)
            {
                this.animSens = -1;
                //this.animFrame = 0;
            }
            if(this.animFrame <= 0)
            {
                this.animSens = 1;
            }
            this.last = this.now;
        }
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
        this.height = windowHeight / (LAZY_RATIO / this.size);
        this.width = windowHeight / (LAZY_RATIO / this.size);
        this.draw();
    }
}