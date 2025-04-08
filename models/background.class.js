class Background extends MovableObject {
width = 900;
x = 0;
height = 600;
    constructor(imagePath, height) {
        super().loadImage(imagePath);
        this.height = height;
        this.y = 480 - this.height;
    }
}