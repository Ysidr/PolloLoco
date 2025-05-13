class World {
    isEndlessLevel = false;
    character = new Character();
    level = level1
    backgrounds = level1.backgrounds;
    positionX = this.character.x;
    isEndlessLevel;
    canvas;
    ctx;
    pixelRatio;
    inputs;
    camera_x = 0
    statusbar = new StatusBar();
    coinbar = new CoinBar();
    bossbar = new BossHealth();
    throwables = [];

    constructor(canvas, inputs, isEndlessLevel) {
        console.log(this.positionX);
        this.isEndlessLevel = isEndlessLevel;

        this.canvas = canvas;
        this.inputs = inputs;
        this.ctx = canvas.getContext('2d');
        this.pixelRatio = window.devicePixelRatio || 1;


        // Set the canvas size to 750x480 and scale for high-DPI displays
        this.scaleCanvas(750, 480);

        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.moveableObjects = this;

    }

    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkTrowables();
            this.checkEnemieCollision();
        }, 100);
    }

    checkTrowables() {
        if(this.inputs.KeyR){
            let bottle = new Throwable(this.character.x+100, this.character.y+100);
            this.throwables.push(bottle);
        }
    }

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                console.log("Collision detected!Hp=", this.character.hp);
                this.character.hit();
                this.statusbar.setPercentage(this.character.hp);

            };
        });
    }

    checkEnemieCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.throwables.isColliding(enemy)) {
                console.log("Collision detected!Hp=", this.character.hp);

            };
        });
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

        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwables);



        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbar);
        this.addToMap(this.coinbar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.bossbar);



        this.addObjectsToMap(this.level.enemies);
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
            this.flipImg(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImgBack(mo);
        }
    }

    flipImg(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = -mo.x;
    }

    flipImgBack(mo) {
        mo.x = -mo.x;
        this.ctx.restore();
    }
}


