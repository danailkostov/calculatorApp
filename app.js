class Calculator {
    constructor(previousDisplayText, currentDisplayText) {
        this.previousDisplayText = previousDisplayText;
        this.currentDisplayText = currentDisplayText;
        this.clear();
    }

    clear() {
        this.currentDisplay = '';
        this.previousDisplay = '';
        this.operation = undefined;
    }

    delete() {
        this.currentDisplay = this.currentDisplay.slice(0, -1);
    }

    assignOperation(operator) {
        if(this.currentDisplay === '') return;
        if(this.previousDisplay !== '') {
            this.computation();
        }
        this.operation = operator;
        this.previousDisplay = `${this.currentDisplay} ${operator}`;
        this.currentDisplay = '';
    }

    clickNumber(number) {
        if(number === '.' && this.currentDisplay.includes('.')) return;
        this.currentDisplay += number;
    }

    computation() {
        let computation;
        let previousNum = parseFloat(this.previousDisplay);
        let currentNum = parseFloat(this.currentDisplay);
        if(isNaN(currentNum) || isNaN(previousNum)) return;
        switch(this.operation) {
            case '+':
                computation = previousNum + currentNum;
                break;
            case '/':
                computation = previousNum / currentNum;
                break;
            case 'x':
                computation = previousNum * currentNum;
                break;
            case '-':
                computation = previousNum - currentNum;
                break;
            default:
                return;
        }
        this.currentDisplay = computation;
        this.operation = undefined;
        this.previousDisplay = '';
    }

    decimalNumber(number) {
        return number;
    }

    updateDisplay() {
        this.currentDisplayText.innerText = this.currentDisplay;
        this.previousDisplayText.innerText = this.previousDisplay;
    }
}

const numberBtns = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll('.operators');
const equalsBtn = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');
const previousDisplayText = document.querySelector('.previous-operand');
const currentDisplayText = document.querySelector('.current-operand');

const calculator = new Calculator(previousDisplayText, currentDisplayText);

numberBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        calculator.clickNumber(btn.innerText);
        calculator.updateDisplay();
    })
})

operatorBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        calculator.assignOperation(btn.innerText);
        calculator.updateDisplay();
    })
})

equalsBtn.addEventListener('click', function(){
    calculator.computation();
    calculator.updateDisplay();
})

clearBtn.addEventListener('click', function(){
    calculator.clear();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', function(){
    calculator.delete();
    calculator.updateDisplay();
})

//add keybind events

//step by step - SbS