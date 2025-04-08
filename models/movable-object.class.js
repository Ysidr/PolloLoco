class MovableObject {
    x = 100;
    y = 300;
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