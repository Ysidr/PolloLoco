class Character extends MovableObject {
    speed = 7;
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
    framesJumping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    framesDead = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];

    framesHurt = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    offset = {
        top: 140,
        bottom: 25,
        left: 50,
        right: 65
    }

    world;

    coinCount = 0;
    trowableCount = 0;
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.y = 480 - this.height - 40;
        this.loadImages(this.framesWalking);
        this.loadImages(this.framesJumping);
        this.loadImages(this.framesHurt);
        this.loadImages(this.framesDead);

        this.animate();
        this.applyGravity();

    };



    animate() {

        this.setInterval(() => {
            if (this.world.inputs.KeyD && (this.world.isEndlessLevel || this.x < this.world.level.levelEndX)) {
                this.moveRight();
            }
            if (this.world.inputs.KeyA && (this.world.isEndlessLevel || this.x > 0)) {
                this.moveLeft();
            }
            if (this.world.inputs.Space && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        this.setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.framesDead);

            } else if (this.isHurt()) {
                this.playAnimation(this.framesHurt);

            } else if (this.isAboveGround()) {
                this.playAnimation(this.framesJumping);

            } else {
                if (this.world.inputs.KeyD || this.world.inputs.KeyA) {
                    this.playAnimation(this.framesWalking);
                }
            }
        }, 50);
    };

    isEndlessLevel(direction) {
        if (direction == "right") {
            if (this.world.isEndlessLevel == true) {
                this.checkForPosition(this.world.backgrounds[4].x + 200 < this.world.character.x || this.world.backgrounds[4].x + 600 < this.world.character.x)
            }
        } else if (direction == "left") {
            if (this.world.isEndlessLevel == true) {
                this.checkForPosition(this.world.backgrounds[4].x > this.world.character.x || this.world.backgrounds[4].x > this.world.character.x)
            }
        }
    };

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
                for (let i = 0; i < 3; i++) {
                    this.sortGroup(0, 3);
                }
            }
        }
    };

    sortGroup(startIndex, endIndex) {
        const group = this.world.backgrounds.slice(startIndex, endIndex + 1);
        this.world.backgrounds.splice(startIndex, endIndex + 1)
        this.world.backgrounds.push(...group);
    };

    AddCount(Parameter) {
        if (Parameter == "Bottle") {
            this.trowableCount++;
        } else if (Parameter == "Coin") {
            this.coinCount++;
            calcCoinBar(coinCount);

        }
    }

}