class Map {
    constructor (x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
    }

    moveX(speed) {
        if (-this.x < this.width) {
            this.x -= speed;
        }
        else {
            this.x = 0;
        }
        this.draw();
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        image(this.img, this.x + this.width, this.y, this.width, this.height);
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
        resizeCanvas(width, height);
    }
}
