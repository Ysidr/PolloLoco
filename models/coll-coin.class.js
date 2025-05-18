class Coin extends Collectable {
    width = 150;
    height = 150;
    offset = {
        top: 45,
        bottom: 45,
        left: 45,
        right: 45
    }

    constructor(x, y) {
        super();
        this.x = 250 + Math.random() * 500;
        this.y = y;
        this.loadImage('img/8_coin/coin_2.png');
    } 
}