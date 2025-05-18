class Bottle extends Collectable {
    width = 100;
    height = 100;

    offset = {
        top: 15,
        bottom: 15,
        left: 30,
        right: 30
    }

    constructor() {
        super();
        this.x = 250 + Math.random() * 1500;
        this.y = 100;
        this.loadImage('img/6_salsa_bottle/salsa_bottle.png');
    } 

    
}