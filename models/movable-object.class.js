class MovableObject {
    x = 50;
    y = 250
    img;
    speedY = 0;
    acceleration = 2.5;
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

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.renderFrames[path];
        this.currentImage++;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 480 - this.height - 40;
    }

    jump() {
        this.speedY = 30;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }
}