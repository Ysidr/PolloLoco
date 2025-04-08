class MovableObject {
    x = 50;
    y = 250
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