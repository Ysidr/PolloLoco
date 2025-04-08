class Character extends MovableObject {

    width = 200;
    height = 300; 
     
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.y = 480 - this.height - 40;

    }
    jump() {

    }
}