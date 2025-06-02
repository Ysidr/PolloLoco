let canvas;
let world;
let inputs = new Input();
let isEndlessLevel = false;

function startGame() {
    Addnone('startScreen');
    Addnone('endScreen');
    Removednone('canvas');
    init();
}

function Removednone(id) {
    document.getElementById(id).classList.remove("d-none");

}
function Addnone(id) {
    document.getElementById(id).classList.add("d-none");

}

function init() {
    canvas = document.getElementById("canvas");
    world = null;
    world = new World(canvas, inputs, isEndlessLevel);
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

function toggleEndlessMode() {
    if (document.getElementById("endlessMode").checked) {
        isEndlessLevel = true;
    } else {
        isEndlessLevel = false;
    }
    init();
}

function DisplayEndScreen (status) {
    if (status == 'lost') {
        document.getElementById("endScreen").style.backgroundImage = "url(img/You won, you lost/Game Over.png)";
    } else if (status == 'won') {
        document.getElementById("endScreen").style.backgroundImage = "url(img/You won, you lost/You won A.png)";
    }
}