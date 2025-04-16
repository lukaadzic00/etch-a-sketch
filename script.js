const container = document.querySelector('#container');
const a = 640;
let input = 16;
let isDrawing = false;
let mode = 'normal';

function handleEvent(e) {
    if(isDrawing) {
        if(mode === 'normal') {
            e.target.style.backgroundColor = 'black';
        } else if(mode === 'random') {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);

            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } else if(mode === 'progressive') {
            let currentOpacity = e.target.style.opacity;
            e.target.style.backgroundColor = 'blue';
            if(currentOpacity < 1) {
                let result = parseFloat(currentOpacity) + 0.1;
                e.target.style.opacity = `${result}`;
            }
        }
    }
}

function createDiv(input) {
    
    container.innerHTML = "";
    const size = input * input;

    for(let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = (a / input) + "px";
        square.style.height = (a / input) + "px";
        if(mode === 'progressive') {
            square.style.opacity = '0';
        }
    
        square.addEventListener('mouseover', handleEvent);
    
        container.appendChild(square);
    }
}

document.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});


createDiv(input);
const btnChoose = document.querySelector('#choose');

btnChoose.addEventListener('click', (e) => {
    do {
        input = prompt("Please, enter your dimensions between 1 and 100:");
        if(input === null) {
            break;
        } else if(input > 100 || input < 1) {
            alert("Please enter a valid number");
        }
    } while(input > 100 || input < 1)

    createDiv(input);
});

const btnNormal = document.querySelector('#normal');
const btnRandom = document.querySelector('#random');
const btnProgressive = document.querySelector('#progressive');

btnNormal.addEventListener('click', () => {
    btnNormal.style.backgroundColor = 'lightgreen';
    btnRandom.style.backgroundColor = '';
    btnProgressive.style.backgroundColor = '';
    mode = 'normal';

    createDiv(input);
});

btnRandom.addEventListener('click', () => {
    btnRandom.style.backgroundColor = 'lightgreen';
    btnNormal.style.backgroundColor = '';
    btnProgressive.style.backgroundColor = '';
    mode = 'random';

    createDiv(input);
});

btnProgressive.addEventListener('click', () => {
    btnProgressive.style.backgroundColor = 'lightgreen';
    btnNormal.style.backgroundColor = '';
    btnRandom.style.backgroundColor = '';
    mode = 'progressive';

    createDiv(input);
});

