class Bottle extends Collectable {
    width = 100;
    height = 100;

    constructor(x, y) {
        super();
        this.x = 250 + Math.random() * 500;
        this.y = y;
        this.loadImage('img/6_salsa_bottle/salsa_bottle.png');
    } 

    
}