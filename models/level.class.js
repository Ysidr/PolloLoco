class Level {
  
    enemies;
    clouds;
    backgrounds;
    levelEndX = 2000;

    constructor(clouds, backgrounds, enemies) {
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.enemies = enemies;
    }
}