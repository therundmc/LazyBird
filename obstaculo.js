let widthRatio = 14
let offset = 200

class Obstaculo {
    constructor (x, y, orientation, index, img) {
        this.x = x;
        this.y = y;
        this.width = windowWidth / widthRatio;
        this.height = windowHeight;
        this.img = img;
        this.size = random(windowHeight / 3.5, windowHeight / 2.5);
        this.orientation = orientation;
        this.index = index
    }

    moveX(speed) {
        if (-this.x < windowWidth) {
            this.x -= speed;
        }
        else {
            this.size = random(windowHeight / 3.5, windowHeight / 2.5);
            this.x = windowWidth;
        }

        if (this.orientation == "down" ) {

            this.y = windowHeight - this.size;
        }
        else {
            this.y = - (windowHeight - this.size);
        }

    
        this.draw();
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    }

    resize(width, height) {
        this.x = this.index * (windowWidth / (nbOfPipes / 2));
        this.width = width / widthRatio;
        this.height = height;
    }
}