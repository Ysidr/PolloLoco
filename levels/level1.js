const level1 = new Level(

    [
        new Cloud('img/5_background/layers/4_clouds/1.png'),
    ],

    [
        new Background('img/5_background/layers/air.png',480, -899),
        new Background('img/5_background/layers/3_third_layer/1.png', 600, -899),
        new Background('img/5_background/layers/2_second_layer/1.png', 550, -899),
        new Background('img/5_background/layers/1_first_layer/1.png',480, -899),

        new Background('img/5_background/layers/air.png',480, 0),
        new Background('img/5_background/layers/3_third_layer/2.png', 600, 0),
        new Background('img/5_background/layers/2_second_layer/2.png', 550, 0),
        new Background('img/5_background/layers/1_first_layer/2.png',480, 0),


        new Background('img/5_background/layers/air.png',480, 899),
        new Background('img/5_background/layers/3_third_layer/1.png', 600, 899),
        new Background('img/5_background/layers/2_second_layer/1.png', 550, 899),
        new Background('img/5_background/layers/1_first_layer/1.png',480, 899),

        new Background('img/5_background/layers/air.png',480, 1798),
        new Background('img/5_background/layers/3_third_layer/2.png', 600, 1798),
        new Background('img/5_background/layers/2_second_layer/2.png', 550, 1798),
        new Background('img/5_background/layers/1_first_layer/2.png',480, 1798),
    ],

    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ],
);