class World {
    isEndlessLevel= true;
    character = new Character();
    clouds = level1.clouds;
    backgrounds = level1.backgrounds;
    enemies = level1.enemies;
    positionX = this.character.x;

    canvas;
    ctx;
    pixelRatio;
    inputs;
    camera_x = 0

    constructor(canvas, inputs) {
        console.log(this.positionX);
        
        this.canvas = canvas;
        this.inputs = inputs;
        this.ctx = canvas.getContext('2d');
        this.pixelRatio = window.devicePixelRatio || 1;


        // Set the canvas size to 750x480 and scale for high-DPI displays
        this.scaleCanvas(750, 480);

        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
        this.moveableObjects = this;

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

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character)

        this.ctx.translate(-this.camera_x, 0);



        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = -mo.x;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = -mo.x;
            this.ctx.restore();
        }
    }
}


