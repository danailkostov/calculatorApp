const numberBtns = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll('.operators');
const equalsBtn = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');
const previousOp = document.querySelector('.previous-operand');
const currentOp = document.querySelector('.current-operand');
let result = 0;
let sign;
let firstNum;
let secondNum;
let arrOfNums;
let targetSecondNum;
let targetFirstNum;

//what happen when number is clicked
numberBtns.forEach(function(btn) {
    btn.addEventListener('click', function(){
        //what happens when in the output have at least one math.operator
        if(sign) {;
            currentOp.textContent += btn.textContent;
            arrOfNums = currentOp.textContent.split(sign);
            targetFirstNum = arrOfNums.length - 2;
            targetSecondNum = arrOfNums.length - 1;
            firstNum = parseInt(arrOfNums[targetFirstNum]);
            secondNum = parseInt(arrOfNums[targetSecondNum]);
            
            switch(sign) {
                case 'x':
                    result = firstNum * secondNum;
                    break;
                case '/':
                    result = firstNum / secondNum;
                    break;
                case '-':
                    result = firstNum - secondNum;
                    break;
                case '+':
                    result = firstNum + secondNum;
                    break;
            }
            previousOp.textContent = result;
        } else {
            //what happens when there are only digits in output
            currentOp.textContent += btn.textContent;
        }
        
    })
})
    
//what happens when operator sign is clicked
operatorBtns.forEach(function(btn)  {
    btn.addEventListener('click', function(){
       currentOp.textContent += btn.textContent; 
       sign = btn.textContent;   
    })
})

clearBtn.addEventListener('click', function() {
        previousOp.textContent = '';
        currentOp.textContent = '';
})


