class BossHealth extends MovableObject {
    width = 300;
    height = 80;
    endboss = new Endboss();
    bossHp = 90;

    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange100.png',
    ];

    constructor() {
        super();
        this.x = this.endboss.x;
        this.y = this.endboss.y;
        this.loadImages(this.IMAGES);
        this.setPercentage();

    }

    setPercentage() {
        this.percentage = this.bossHp/90 * 100;
        let path = this.IMAGES[this.resolveImageIndex()];        
            this.img = this.renderFrames[path];       
    }


    resolveImageIndex() {
        if (this.percentage == 100) {
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