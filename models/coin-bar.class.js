class CoinBar extends DrawableObject {
    x = 0;
    y = 27;
    width = 300;
    height = 80;
    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);

    }

    setPercentage(percentage) {
        this.calcCoinBar(percentage);
        let path = this.IMAGES[this.resolveImageIndex()];        
            this.img = this.renderFrames[path];       
    }

    calcCoinBar(coinCount){
        return this.percentage =coinCount/ 6 * 100;
    }


    resolveImageIndex() { 
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

} 