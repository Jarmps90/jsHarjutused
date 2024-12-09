let currentNumber = '';
let previousNumber = null;
let operator = null;
let value = null;
const display = document.querySelector('.display');

function numberBtn() {
    const numbers = document.querySelectorAll('#numbers button');
    
    numbers.forEach((button) => {
        button.addEventListener('click', () => {
            currentNumber += button.textContent;
            display.textContent = currentNumber;
        });
    });
};

function operators() {
    const operators = document.querySelectorAll('#operator button');
    
    operators.forEach((button) => {
        button.addEventListener('click', () => {
            operator = button.id
            display.textContent = '0';
            previousNumber = parseFloat(currentNumber);
            currentNumber = '';
            
        });

    });
};



function getEquals(){
    const equals = document.querySelector('#equalsBtn');
    
        equals.addEventListener('click', () => {
        if(currentNumber !== '') {
            currentNumber = parseFloat(currentNumber);
            operate(currentNumber, operator, previousNumber);
        }
        currentNumber = value;
        
        });
        
    
};


function updateDisplay(value){
    
    display.textContent = value;
};

function operate(currentNumber, operator, previousNumber) {
    
    switch (operator) { 
    case 'add':
        value = previousNumber + currentNumber;
        break;
    case 'subtract':
        value = previousNumber - currentNumber;
        break;
    default:
        value = null;
    }


    console.log(value);
    updateDisplay(value);
};
    



numberBtn();
operators();
getEquals();