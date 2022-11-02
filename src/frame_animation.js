/**
 * @file LazyBird Lazy class file.
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
	
	
}