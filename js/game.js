let canvas;
let world;
let inputs = new Input();


function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, inputs);
    console.log(world);
}

window.addEventListener('keydown', (event) => {
    if (Object.keys(inputs).includes(event.code)) {
        inputs[event.code] = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (Object.keys(inputs).includes(event.code)) {
        inputs[event.code] = false;
    }
});