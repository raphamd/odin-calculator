const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const div = (a,b) => a / b;
const mul = (a,b) => a * b;

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
        // Convert to bigInt to remove the zero at the beginning and allow big operations
        displayText.textContent = BigInt(displayText.textContent + button.textContent);
      }
    });  
  }

  setupNumericButtons();
}

setupInterface();