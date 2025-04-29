const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const div = (a,b) => a / b;
const mul = (a,b) => a * b;

const operation = {
  operator: '',
  firstOperand: '',
  secondOperand: '',
};

function operate(operator, foperand, soperand) {
  switch (operator) {
    case '+': return sum(foperand,soperand);
    case '-': return sub(foperand,soperand);
    case '/': return div(foperand,soperand);
    case '*': return mul(foperand,soperand);
  }
}

function setupInterface() {
  const buttons = document.querySelector('.buttons');
  const displayText = document.querySelector('.display-text')

  function setupNumericButtons() {
    buttons.addEventListener('click', function(event) {
     
      const button = event.target;
      const buttonClass = button.className;
      const buttonType = buttonClass.split(' ')[1];

      if (buttonType === "number") {
        
        const operand = button.textContent;
        const isOperatorSelected = operation.operator;

        const setFirstOperand = function(){
          operation.firstOperand = BigInt(operation.firstOperand + operand);
          displayText.textContent = BigInt(displayText.textContent + operand);
        }
      
        const setSecondOperand = function(){
          operation.secondOperand = BigInt(operation.secondOperand + operand);
          displayText.textContent = 0n;
          displayText.textContent = operation.secondOperand;
        }

        if (!isOperatorSelected) {
          setFirstOperand();
        } 
        else {
          setSecondOperand();
        }
      }

      if (buttonType === "operator") {
        operation.operator = button.textContent;
      }

      if (buttonType === "result") {
        const isValidOperation = 
          operation.firstOperand !== '' &&
          operation.operator !== '' &&
          operation.secondOperand !== '';

        
        if (isValidOperation) {
          const result = operate(
            operation.operator,
            operation.firstOperand,
            operation.secondOperand
          );
  
          displayText.textContent = result;
          operation.firstOperand = result;
        }
      }
    });  
  }

  setupNumericButtons();
}

setupInterface();