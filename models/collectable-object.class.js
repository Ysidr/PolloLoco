class Collectable extends DrawableObject {
    width = 100;
    height = 100;
    x = 100;
    y = 100;
    IMAGES = [
        'img/8_coin/coin_2.png'
    ];

    constructor() {
        super();
        this.loadImage('img/8_coin/coin_2.png');
    } 
}