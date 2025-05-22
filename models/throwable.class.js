class Throwable extends MovableObject {
    width = 100;
    height = 100;
    IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.throw();

    }

    throw() {
        this.speedY = 20;
        this.applyGravity();
        const refreshIntervalId = this.setInterval(() => {
            this.playAnimation(this.IMAGES);
            this.x += 5;
            
            if (this.isAboveGround() == false) {
                clearInterval(refreshIntervalId); // Stop the interval
                this.bottleSplash(); // Call the bottleSplash method
            }
        }, 10);
    };

    bottleSplash() {
        this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
        setTimeout(() => {
            world.removeThrowable(this)
        }, "100");
    }
}

