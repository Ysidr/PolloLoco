class Throwable extends MovableObject {

    width = 100;
    height = 100;
    IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.throw();
    }

    throw () {
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 5;
        }, 10);
    };
    
}