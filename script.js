const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const div = (a,b) => a / b;
const mul = (a,b) => a * b;

function operate(operator, foperand, soperand){
  switch (operator){
    case '+': return sum(foperand,soperand);
    case '-': return sub(foperand,soperand);
    case '/': return div(foperand,soperand);
    case '*': return mul(foperand,soperand);
  }
}