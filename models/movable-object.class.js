class MovableObject extends DrawableObject {
    
    speedY = 0;
    acceleration = 2.5;
    speed = 0.15;
    otherDirection = false;
    hp = 100;
    lastHit = 0;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
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
        if (this instanceof Character) {
            this.isEndlessLevel("right");
            this.otherDirection = false;
        }
    }

    moveLeft() {
        this.x -= this.speed;
        if (this instanceof Character) {
            this.isEndlessLevel("left");
            this.otherDirection = true;
        }
    }



    

    isColliding(mo) {
        return this.x + this.width - this.offset.left > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.bottom &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.right < mo.y + mo.height- mo.offset.bottom;
    }

    hit() {
        this.hp -= 5;
        if (this.hp <= 0) {
            this.hp = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 100;
        return timepassed < 1;
    }

    isDead() {
        return this.hp == 0;
    }

}