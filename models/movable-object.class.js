class MovableObject {
    x = 120;
    y = 120;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log("Moving right");
    }
    moveLeft() {
        
    }
}