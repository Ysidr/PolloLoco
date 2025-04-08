class Character extends MovableObject {
    speed = 4;
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
    world;
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.y = 480 - this.height - 40;
        this.loadImages(this.framesWalking);
        this.animate();

    }
    animate() {

        setInterval(() => {
            if (this.world.inputs.KeyD) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.inputs.KeyA) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {

            if (this.world.inputs.KeyD || this.world.inputs.KeyA) {
                let i = this.currentImage % this.framesWalking.length;
                let path = this.framesWalking[i];
                this.img = this.renderFrames[path];
                this.currentImage++;
            }
        }, 50);
    }

    jump() {

    }
}