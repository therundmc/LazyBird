class Pickups {
    constructor (anim,y) {
		this.anim = anim;
		this.x = windowWidth - 50;
		this.y = y;
		this.width = this.anim.frame_width*2;
		this.height = this.anim.frame_height*2;
		this.active = true;
		this.last = new Date().getTime();
	}
	
	reset(){
		this.active = true;
		this.x = windowWidth - 50;
	}
	
	moveX(speed) {
		
		if(!this.active)
			return;
		
        this.x -= speed;
        this.draw();
    }
	
	draw(){
		this.anim.draw(this.x,this.y,this.width,this.height);
		//this.draw_hitbox();
	}
	
	draw_hitbox(){
		stroke("red")
		noFill();
		rect(this.x,this.y,this.width,this.height)
	}
}