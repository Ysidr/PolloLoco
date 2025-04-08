class Background extends MovableObject {
    width = 900;
    x = 0;
    height = 600;
    constructor(imagePath, height, x) {
        super().loadImage(imagePath, x);
        this.height = height;
        this.y = 480 - this.height;
        this.x = x;
    }
}