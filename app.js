const numberBtns = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll('.operators');
const equalsBtn = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');
const previousOp = document.querySelector('.previous-operand');
const currentOp = document.querySelector('.current-operand');
let sign = false;
let signCount = 0;
let lastSign;
let currentResult = 0;
let reg = /\d+\.*\d*/g;
let numbers;
let result;

//what happen when number is clicked
numberBtns.forEach(function(btn) {
    btn.addEventListener('click', function(){
        currentOp.textContent += btn.textContent;
        sign = false;
    })
})
//what happens when operator sign is clicked
operatorBtns.forEach(function(btn)  {
    btn.addEventListener('click', function(){
    //extract numbers
        numbers = currentOp.textContent.match(reg);
        for(let i = 0; i < numbers.length; i++) {
            numbers[i] = parseFloat(numbers[i]);
        }
    ////////////////////
    if(!sign && currentOp.textContent[currentOp.textContent.length - 1] != equalsBtn.textContent) {
        currentOp.textContent += btn.textContent;
        sign = true;
        signCount++;
    }
    
    if(signCount > 1 && signCount < 3) {
        switch(lastSign) {
            case 'x':
                currentResult = numbers[0] * numbers[1];
                previousOp.textContent = currentResult;
                break;
            case '/':
                currentResult = numbers[0] / numbers[1];
                previousOp.textContent = currentResult;
                break;
            case '-':
                currentResult = numbers[0] - numbers[1];
                previousOp.textContent = currentResult;
                break;
            case '+':
                currentResult = numbers[0] + numbers[1];
                previousOp.textContent = currentResult;
                break;
        }
    } else if (signCount > 2) {
        switch(lastSign) {
            case 'x':
                currentResult = currentResult * numbers[numbers.length - 1];
                previousOp.textContent = currentResult;
                break;
            case '/':
                currentResult = currentResult / numbers[numbers.length - 1];
                previousOp.textContent = currentResult;
                break;
            case '-':
                currentResult = currentResult - numbers[numbers.length - 1];
                previousOp.textContent = currentResult;
                break;
            case '+':
                currentResult = currentResult + numbers[numbers.length - 1];
                previousOp.textContent = currentResult;
                break;
        }
    }           
    // last sign
    lastSign = btn.textContent;
    })
})
////////////////////////
clearBtn.addEventListener('click', function() {
        previousOp.textContent = '';
        currentOp.textContent = '';
        currentResult = 0;
        signCount = 0;
        
})

deleteBtn.addEventListener('click', function() {
    if(!sign && currentOp.textContent[currentOp.textContent.length - 1] != lastSign) {
        currentOp.textContent = currentOp.textContent
                                        .split('')
                                        .slice(0, currentOp.textContent.length - 1)
                                        .join('');
    }
    
})

equalsBtn.addEventListener('click', function() {
    if(currentOp.textContent[currentOp.textContent.length - 1] != equalsBtn.textContent &&
       currentOp.textContent.length > 2 && 
       currentOp.textContent[currentOp.textContent.length - 1] != lastSign){

        previousOp.textContent = currentResult;
        currentOp.textContent += equalsBtn.textContent;
        numbers = currentOp.textContent.match(reg);
        for(let i = 0; i < numbers.length; i++) {
            numbers[i] = parseFloat(numbers[i]);
        }

        if(signCount == 1) {
            switch(lastSign) {
                case 'x':
                    result = numbers[0] * numbers[1];
                    previousOp.textContent = result;
                    break;
                case '/':
                    result = numbers[0] / numbers[1];
                    previousOp.textContent = result;
                    break;
                case '-':
                    result = numbers[0] - numbers[1];
                    previousOp.textContent = result;
                    break;
                case '+':
                    result = numbers[0] + numbers[1];
                    previousOp.textContent = result;
                    break;
            }
        } else if(signCount > 1) {
            switch(lastSign) {
                case 'x':
                    result = currentResult * numbers[numbers.length - 1];
                    previousOp.textContent = result;
                    break;
                case '/':
                    result = currentResult / numbers[numbers.length - 1];
                    previousOp.textContent = result;
                    break;
                case '-':
                    result = currentResult - numbers[numbers.length - 1];
                    previousOp.textContent = result;
                    break;
                case '+':
                    result = currentResult + numbers[numbers.length - 1];
                    previousOp.textContent = result;
                    break;
            }
        } 
    }
    
})

//add keybind events

//step by step - SbS