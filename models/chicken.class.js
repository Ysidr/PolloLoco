class Chicken extends MovableObject {
    width = 75;
    height = 100;
    framesWalking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    offset = {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10
    };

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 250 + Math.random() * 500;
        this.y = 480 - this.height - 40;
        this.loadImages(this.framesWalking);
        this.speed = 0.15 + Math.random() * 0.3;
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.framesWalking);
        }, 100);

    }

}