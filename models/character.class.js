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
                if (this.world.isEndlessLevel = true) {
                    
                }
                this.x += this.speed;
                this.otherDirection = false;
                if (this.world.isEndlessLevel = true) {
                    this.checkForPosition(this.world.backgrounds[4].x + 200 < this.world.character.x || this.world.backgrounds[4].x + 600 < this.world.character.x)
                }

            }
            if (this.world.inputs.KeyA && (this.world.isEndlessLevel || this.x > 0)) {
                this.x -= this.speed;
                this.otherDirection = true;
                if (this.world.isEndlessLevel = true) {
                    this.checkForPosition(this.world.backgrounds[4].x > this.world.character.x || this.world.backgrounds[4].x > this.world.character.x)
                }
            }
            this.world.camera_x = -this.x + 100;
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

    checkForPosition(condition) {
        if (condition) {
            if (this.otherDirection == false) {
                for (let index = 0; index < 4; index++) {
                    this.world.backgrounds[index].x = this.world.backgrounds[12].x + 899;
                }
                this.sortGroup(0, 3)

            } else {
                for (let index = 12; index < 16; index++) {
                    this.world.backgrounds[index].x = this.world.backgrounds[0].x - 899;
                }
                this.sortGroup(0, 3)
                this.sortGroup(0, 3)
                this.sortGroup(0, 3)


            }


        }

    };

    sortGroup(startIndex, endIndex) {
        const group = this.world.backgrounds.slice(startIndex, endIndex + 1);
        this.world.backgrounds.splice(startIndex, endIndex + 1)
        this.world.backgrounds.push(...group);
    }

    jump() {

    }
}