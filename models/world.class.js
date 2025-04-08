class World {
    character = new Character();

    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    canvas;
    ctx;
    pixelRatio;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.pixelRatio = window.devicePixelRatio || 1;

        // Set the canvas size to 750x480 and scale for high-DPI displays
        this.scaleCanvas(750, 480);

        this.draw();
    }

    scaleCanvas(width, height) {
        // Set the logical dimensions
        this.canvas.style.width = `${width}px`;
        this.canvas.style.height = `${height}px`;

        // Set the actual canvas dimensions to account for the pixel ratio
        this.canvas.width = width * this.pixelRatio;
        this.canvas.height = height * this.pixelRatio;

        // Scale the context to match the pixel ratio
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    draw() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, 750, 480);
        this.ctx.imageSmoothingQuality = "high";

        // Draw the character
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        // Draw the enemies
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
}