class Cloud extends MovableObject {

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = -100 + Math.random() * 500;
        this.y = -10 + Math.random() * 25;
        this.width = 500 + Math.random() * 100;
        this.height = 250 + Math.random() * 50;

        this.animate();

    }

    animate(){
        setInterval(() => {
            this.x -= 0.15;
        }, 1000/60);
    }
}