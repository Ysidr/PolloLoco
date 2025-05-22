class Level {
  
    enemies;
    clouds;
    backgrounds;
    collectables;
    levelEndX = 2000;

    constructor(clouds, backgrounds, enemies, collectables) {
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.enemies = enemies;
        this.collectibles = collectables;
    }
}