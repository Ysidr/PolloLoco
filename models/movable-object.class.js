class MovableObject {
    x = 50;
    y = 250
    img;
    renderFrames = {}
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.renderFrames[path] = img;
        });
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
            
        }, 1000 / 60);
    }

    playAnimation(images){
        let i = this.currentImage % images.length;
            let path = images[i];
            this.img = this.renderFrames[path];
            this.currentImage++;
    }
}