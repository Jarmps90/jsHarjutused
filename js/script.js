const container = document.querySelector('.container');


for(let i = 0; i < 3; i++) { 
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
};

function cellColor() { 

const cell = document.querySelectorAll('.cell');

cell.forEach((cell) => { 
cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = 'red';
})
}
);
};

cellColor()