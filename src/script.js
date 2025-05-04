const SUM = '+';
const SUB = '-';
const DIV = '/';
const MUL = '*';

const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const div = (a,b) => a / b;
const mul = (a,b) => a * b;

// I used a object to control the operation flow.
// All operands and operations defined as blank string
// means that the operand or operator is not defined.
const operation = {
  operator: '',
  firstOperand: '',
  secondOperand: '',
};

function operate(operator, foperand, soperand) {
  switch (operator) {
    case SUM: return sum(foperand,soperand);
    case SUB: return sub(foperand,soperand);
    case DIV: return div(foperand,soperand);
    case MUL: return mul(foperand,soperand);
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

      const isNumericButton = buttonType === "number";
      const isOperatorButton = buttonType === "operator";
      const isResultButton = buttonType === "result";
      const isClearButton = buttonType === "clear";

      if (isNumericButton) {
        
        const operand = button.textContent;
        const isOperatorSelected = operation.operator;
   
        const setFirstOperand = function() {
          operation.firstOperand = Number(operation.firstOperand + operand);
          displayText.textContent = Number(displayText.textContent + operand);
        }
      
        const setSecondOperand = function() {
          operation.secondOperand = Number(operation.secondOperand + operand);
          displayText.textContent = 0;
          displayText.textContent = operation.secondOperand;
        }

        const clearOperation = function() {
          operation.firstOperand = '';
          operation.secondOperand = '';
          operation.operator = '';

          displayText.textContent = 0;
        }

        if (!isOperatorSelected) {
          setFirstOperand();
        } 
        else {
          setSecondOperand();
        }
      }

      if (isOperatorButton) {
        const isSecondOperandFilled = operation.secondOperand !== '';
        
        operation.operator = button.textContent;
        
        if (isSecondOperandFilled) {
          operation.secondOperand = '';
        }
      }

      if (isResultButton) {
        const isValidOperation = 
          operation.firstOperand !== '' &&
          operation.operator !== '' &&
          operation.secondOperand !== '';

        if (isValidOperation) {
          const isDivisionByZero = 
            (operation.firstOperand === 0 ||
            operation.secondOperand === 0) && 
            operation.operator === '/';

          if (isDivisionByZero) {
            return displayText.textContent = 'Division by zero?';
          }
          
          const result = operate(
            operation.operator,
            operation.firstOperand,
            operation.secondOperand
          );
  
          const roundedResult = Math.floor(result * 10000) / 10000;

          displayText.textContent = roundedResult;
          operation.firstOperand = roundedResult;
        }
      }

      if (isClearButton) {
        clearOperation();
      }
    });  
  }

  setupNumericButtons();
}

setupInterface();
