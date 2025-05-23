class DrawableObject {
    x = 50;
    y = 250
    img;
    renderFrames = {}
    currentImage = 0;
    height = 150;
    width = 200;
    maxHP = 100;
    hp = 100;
    bossHp = 100;
    intervals = [];

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken | this instanceof Endboss || this instanceof Throwable || this instanceof Collectable) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof Throwable || this instanceof Collectable) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - (this.offset.right + this.offset.left), this.height - (this.offset.bottom + this.offset.top));
            ctx.stroke();
        }
    }

    setInterval(callback, delay) {
        const intervalId = setInterval(callback, delay);
        this.intervals.push(intervalId);
        return intervalId;
    }

    clearAllIntervals() {
        this.intervals.forEach(clearInterval);
        this.intervals = [];
    }
}