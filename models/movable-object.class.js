class MovableObject {
    x = 50;
    y = 250
    img;
    speedY = 0;
    acceleration = 2.5;
    renderFrames = {}
    currentImage = 0;
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


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.renderFrames[path] = img;
        });
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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken | this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right, this.height - this.offset.bottom);
            ctx.stroke();
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