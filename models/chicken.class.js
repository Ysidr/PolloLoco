class Chicken extends MovableObject {
    width = 75;
    height = 100;
    framesWalking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 250 + Math.random() * 500;
        this.y = 480 - this.height - 40;
        this.loadImages(this.framesWalking);
        this.speed = 0.15 + Math.random() * 0.3;
        this.animate();
    }
    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.framesWalking.length;
            let path = this.framesWalking[i];
            this.img = this.renderFrames[path];
            this.currentImage++;
        }, 100);

    }

}