function paint(e) {
    cellId = e.originalTarget.id;
    
    const cellToPaint = document.getElementById(cellId);

    cellToPaint.style.backgroundColor = 'white';

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
