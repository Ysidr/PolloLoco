class Bottle extends Collectable {
    width = 100;
    height = 100;

<<<<<<< HEAD
    offset = {
        top: 15,
        bottom: 15,
        left: 30,
        right: 30
    }

=======
>>>>>>> ea0107a63ed3a8299f1ac7b9006a7df23928a558
    constructor(x, y) {
        super();
        this.x = 250 + Math.random() * 500;
        this.y = y;
        this.loadImage('img/6_salsa_bottle/salsa_bottle.png');
    } 

    
}