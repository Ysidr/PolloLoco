class Character extends MovableObject {

    width = 50;
    height = 150;    
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        console.log(Character.img);

    }
    jump() {

    }
}