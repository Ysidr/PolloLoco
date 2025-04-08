let canvas;
let world;
let inputs = new Input();
let isEndlessLevel= false;



function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, inputs, isEndlessLevel);
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

function toggleEndlessMode(){
    if (document.getElementById("endlessMode").checked) {
        isEndlessLevel = true; 
    }else {
        isEndlessLevel = false;
    }
    init();
}