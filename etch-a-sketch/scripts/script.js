function paint(e) {
    cellId = e.originalTarget.id;

    const cellToPaint = document.getElementById(cellId);

    cellToPaint.style.backgroundColor = 'white';

}

function resetCanvas() {
    canvas = document.querySelector('#canvas-grid');

    canvasBackgroundColor = 'black';

    const cells = canvas.childNodes;

    cells.forEach(cell => cell.style.backgroundColor = canvasBackgroundColor);
}

function createCanvas(rows, columns) {
    const canvasDiv = document.querySelector('#canvas-grid');

    canvasDiv.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    canvasDiv.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    let numberOfCells = rows * columns;

    for (let i = 0; i < numberOfCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${i}`;
        cell.addEventListener('mouseover', paint);
        canvasDiv.appendChild(cell);
    }
}

createCanvas(16, 16);

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetCanvas);
