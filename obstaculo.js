class Obstaculo {
    constructor (x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
    }

    // Method
    moveX(speed) {
        if (-this.x < windowWidth) {
            this.x -= speed;
        }
        else {
            this.x = windowWidth;
            this.y = windowHeight -  (windowHeight / random(1.5, 3));

        }
        
        image(this.img, this.x, this.y, this.width, this.height);
    }
}