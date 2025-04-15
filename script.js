const container = document.querySelector('#container');
const a = 640;
let input = 16;
let isDrawing = false;

function handleEvent(e) {
    if(isDrawing) {
        e.target.style.backgroundColor = 'black';
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
    
        square.addEventListener('mouseover', handleEvent);
    
        container.appendChild(square);
    }
}

createDiv(input);

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
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

document.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
})