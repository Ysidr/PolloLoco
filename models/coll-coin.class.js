class Coin extends Collectable {
<<<<<<< HEAD
    width = 150;
    height = 150;
    offset = {
        top: 45,
        bottom: 45,
        left: 45,
        right: 45
    }
=======
    width = 100;
    height = 100;
>>>>>>> ea0107a63ed3a8299f1ac7b9006a7df23928a558

    constructor(x, y) {
        super();
        this.x = 250 + Math.random() * 500;
        this.y = y;
        this.loadImage('img/8_coin/coin_2.png');
    } 
}