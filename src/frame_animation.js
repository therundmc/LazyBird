/**
 * @file LazyBird frameAnimation class file.
 * @copyright therundmc & weirdaz - 2022
 */
 
 class Frame_animation {
    constructor (x,y,img,frame_width,frame_height,sourceY,nbrOfFrames,scale,animationInv) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.frame_width = frame_width;
        this.frame_height = frame_height;
        this.sourceY = sourceY;
        this.animFrame = 0;
        this.nbrOfFrames = nbrOfFrames;
        this.last = new Date().getTime();
        this.scale = scale;
        this.animationInv = animationInv;
        this.sens = 1;
    }
    draw(x, y, scale) {
		this.x = x;
		this.y = y;
		this.scale = scale;

		image(this.img, this.x, this.y, this.frame_width*this.scale, this.frame_height*this.scale,this.frame_width*this.animFrame+1,this.sourceY,this.frame_width,this.frame_height);
		let now = new Date().getTime();
			let delta = now - this.last;
				if (delta >= 33) {
					
					this.last = now;
					this.animFrame+=this.sens;
				
				if(this.animFrame < 0)
				{
				this.animFrame = 0;
				this.sens*=(-1);
				}
				
				if(this.animFrame > this.nbrOfFrames)
				{
				if(this.animationInv)
				{
					this.sens*=(-1);
					this.animFrame = this.nbrOfFrames;
				}
				else
					this.animFrame = 0;
				}
			}
    }    
}