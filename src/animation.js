
class Animation {
    constructor  () {

        this.a = 0;
    }

    moveAndBouce(obj, box) {

        if (obj.vx ==0 || obj.vy ==0 || box.w ==0 || box.h ==0) {
            console.log ("not 0");
            return false;
        }
        // // norm speed and accel
        // obj.vx = (obj.vx * box.w) / box.w / 2;
        // obj.vy = (obj.vy * box.h) / box.h / 2;
        // obj.ax = ((obj.ax * box.w) / box.w / 2) / obj.vx;
        // obj.ay = ((obj.ay * box.h) / box.h / 2) / obj.vx;

        // x coord
        if (obj.x < box.x) {
            obj.vx += obj.ax; 
            obj.dirX = 1;
        }
        else if (obj.x > (box.w - obj.w)) {
            obj.vx += obj.ax; 
            obj.dirX = -1;
        }
        else {
            if (obj.vx >= 1) {
                obj.vx -= obj.ax * 0.01;
            }
            else {
                obj.vx = 1;
            }
        }
        // y coord
        if (obj.y < box.y) {
            obj.vy += obj.ay; 
            obj.dirY = 1;
        }
        else if (obj.y > (box.h - obj.h)) {
            obj.vy += obj.ay; 
            obj.dirY = -1;
        }
        else {
            if (obj.vy >= 1) {
                obj.vy -= obj.vy * 0.01;
            }
            else {
                obj.vy = 1;
            } 
        }
        obj.x += obj.dirX * abs(obj.ax) * abs(obj.vx);
        obj.y += obj.dirY * abs(obj.ay) * abs(obj.vy);

        return true;
    }

    moveTo(obj, box, x, y, bnd) {
        obj.vx += obj.ax; 
        obj.vy += obj.ay; 


        if (obj.x < (x - obj.vx)) {
            obj.x += obj.vx
            obj.x = this.checkBoundX(obj, box, bnd);
        }
        else if (obj.x > (x + obj.vx)) {
            obj.x -= obj.vx
            obj.x =this.checkBoundX(obj, box, bnd);
        }

        if (obj.y < (y - obj.vy)) {
            obj.y += obj.vy
            obj.y = this.checkBoundY(obj, box, bnd);
        }
        else if (obj.y > (y + obj.vy)) {
            obj.y -= obj.vy
            obj.y = this.checkBoundY(obj, box, bnd);
        }

        if (this.getDist(obj, x, y) < (obj.w + obj.h) / 2) {
            return true;
        }
        else {
            return false;
        }

    }

    moveParabolic(obj, box, h, d, vX, bnd) {
        let a = 4 * (h-obj.h) / (d-obj.w)**2;
        let b = -((d-obj.w) * a);
        let c = box.h - obj.h;

        if (obj.x > d - obj.w) {
            return true;
        }

        obj.x += vX;
        obj.y = a * obj.x**2 + b * obj.x + c;

        obj.x = this.checkBoundX(obj, box, bnd);
        obj.y = this.checkBoundY(obj, box, bnd);

        return false;
    }

    rotateImg(img, va, a) {
        if (this.a > a ) {
            this.a = 0;
            image(img.s, img.x, img.y, img.w, img.h)
            return true
        }
        else {
            this.a += va;
            imageMode(CENTER);
            translate(img.x+img.w/2, img.y+img.w/2);
            rotate(PI/180*this.a);
            image(img.s, 0, 0, img.w, img.h);
            rotate(-PI / 180 * this.a);
            translate(-(img.x+img.w/2), -(img.y+img.w/2));
            imageMode(CORNER);
        }
    }

    getDist(obj, x, y) {
        return Math.sqrt((abs(x - obj.x))**2 + (abs(y - obj.y))**2);
    }

    checkBoundX(obj, box, b) {
        let x = obj.x
        if (!b) {return x}
        if (obj.x < 0) {
            x = 0;
        }
        else if (obj.x > box.w - obj.w) {
            x = box.w - obj.w;
        }
        return x;
    }

    checkBoundY(obj, box, b) {
        let y = obj.y;
        if (!b) {return y}
        if (obj.y < 0) {
            y = 0;
        }
        else if (obj.y > box.h - obj.h) {
            y = box.h - obj.h;
        }
        return y;

    }
}