// Prendi tutti gli elementi necessari dal DOM

const button = document.getElementById('button');
const grid = document.getElementById('grid');







// Definisco gli elementi

const row = 10;
const column = 10;
const totalCells = column * row;






// Funzioni ------------------------------

const createCell = () => {

    const cell = document.createElement('div');
    cell.className = 'cell';

    return cell;
}



// Al click del bottone genero la griglia

button.addEventListener('click', function(){

    for (let i = 0; i < totalCells; i++) {

        const cell = createCell();
        grid.appendChild(cell);
    }
})