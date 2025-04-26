class Endboss extends MovableObject {
    width = 335;
    height = 350;
    framesWalking = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',

    ];

    offset = {
        top: 80,
        bottom: 100,
        left: 30,
        right: 50
    };
    constructor() {
        super().loadImage(this.framesWalking[0]);
        this.loadImages(this.framesWalking);
        this.x = 700
        this.y = 480 - this.height - 40;
        this.speed = 0.15 + Math.random() * 0.3;
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.framesWalking);
        }, 100);

    }
}