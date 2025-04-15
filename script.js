const container = document.querySelector('#container');
const a = 640;
const size = 16 * 16;

for(let i = 0; i < size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = (a / 16) + "px";
    square.style.height = (a / 16) + "px";

    container.appendChild(square);
}