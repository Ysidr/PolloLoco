class Character extends MovableObject {

    width = 200;
    height = 300;
    framesWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.y = 480 - this.height - 40;
        this.loadImages(this.framesWalking);
        this.animate();

    }
    animate() {
        setInterval(() => {
            let i = this.currentImage % this.framesWalking.length;
            let path = this.framesWalking[i];
            this.img = this.renderFrames[path];
            this.currentImage++;
        }, 100);

    }

    jump() {

    }
}