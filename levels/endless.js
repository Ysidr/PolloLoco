class EndlessLevel extends Level {
    constructor() {
    }

    checkForPosition(condition) {
        if (condition) {
            if (this.otherDirection == false) {
                for (let index = 0; index < 4; index++) {
                    this.world.backgrounds[index].x = this.world.backgrounds[12].x + 899;
                }
                this.sortGroup(0, 3)

            } else {
                for (let index = 12; index < 16; index++) {
                    this.world.backgrounds[index].x = this.world.backgrounds[0].x - 899;
                }
                this.sortGroup(0, 3)
                this.sortGroup(0, 3)
                this.sortGroup(0, 3)


            }


        }

    };

    sortGroup(startIndex, endIndex) {
        const group = this.world.backgrounds.slice(startIndex, endIndex + 1);
        this.world.backgrounds.splice(startIndex, endIndex + 1)
        this.world.backgrounds.push(...group);
    }


};
