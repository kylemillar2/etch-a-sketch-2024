const container = document.querySelector('#container');
const sizeButton = document.querySelector('#size-button');

const changeSize = () => {
    let size;
    do {
        size = parseInt(prompt("How many squares in each row and column? Enter a number between 1 and 100."));
    } while (size == NaN || size < 1 || size > 100);
    
    let squareWidth = 100 / size;
    let newChildren = [];
    for (let i = 0; i < size ** 2; i++)
    {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style['width'] = `${squareWidth}%`;
        square.style['height'] = `${squareWidth}%`;

        newChildren.push(square);
    }

    container.replaceChildren(...newChildren);
}

const fillCell = (e) => {
    if (!e.target.classList.contains('square') || e.buttons != 1)
    {
        return;
    }
    e.target.classList.add('filled-cell');
}

container.addEventListener('mouseover', fillCell);
container.addEventListener('mousedown', fillCell);
sizeButton.addEventListener('click', changeSize);