/// // Defined Calculating Functions /////

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

/// // Defined a object calculation vars for Operation /////
const calculatorObj = {
  firstNum: [],
  secondNum: [],
  operators: ['+', '-', '*', '/'],
  currentValue: [],
  currentOperator: null,
};

/// // DOM Variables /////
const calculatorDisplayInput = document.querySelector('#calculator-input');
// Added event listeners for every button within #calc-buttons
const calcBtn = document.querySelector('#calc-buttons');
calcBtn.addEventListener('click', (event) => {
  const { target } = event;
  // If not a button, return and doesnt do anything.
  if (!target.matches('button')) {
    return;
  }
  // If a button, actions happen depending on button's duty
  if (target.classList.contains('operator')) {
    switch (target.value) {
      case '+':
        calculatorObj.currentOperator = 0;
        runOperation(0);
        break;
      case '-':
        calculatorObj.currentOperator = 1;
        runOperation(1);
        break;
      case '*':
        calculatorObj.currentOperator = 2;
        runOperation(2);
        break;
      case '/':
        calculatorObj.currentOperator = 3;
        runOperation(3);
        break;
    }
    return;
  }

  if (target.classList.contains('decimal')) {
    if (!calculatorDisplayInput.value.includes('.')) {
      updateCalcDisplay('.');
      return;
    }
    return;
  }

  if (target.classList.contains('all-clear')) {
    calculatorObj.firstNum = [];
    calculatorObj.currentValue = [];
    calculatorObj.secondNum = [];
    calculatorDisplayInput.value = 0;
    return;
  }

  if (target.classList.contains('equal-sign')) {
    runOperation(calculatorObj.currentOperator);
    return;
  }
  updateCalcDisplay(target.value);
});

/// // Defined Calc Operation /////

const execCalculation = (operator, [first, second]) => {
  switch (operator) {
    case '+':
      // Using Number() to turn stringifed charecters to numbers for calculation
      calculatorDisplayInput.value = add(Number(first), Number(second));
      break;
    case '-':
      calculatorDisplayInput.value = subtract(Number(first), Number(second));
      break;
    case '*':
      calculatorDisplayInput.value = multiply(Number(first), Number(second));
      break;
    case '/':
      calculatorDisplayInput.value = divide(Number(first), Number(second));
      break;
    
  }
};

/// / Defined functions
let runOperation = (op) => {
  const selectOperator = calculatorObj.operators[op];
  // If there's no first input number
  if (calculatorObj.firstNum.length == 0) {
    calculatorObj.firstNum = calculatorObj.currentValue;
    emptyCurrentValue();
    execCalculation(selectOperator, [
      calculatorObj.firstNum.join(''),
      calculatorObj.secondNum.join(''),
    ]);
  }
  // else there's already a first input number
  else {
    calculatorObj.secondNum = calculatorObj.currentValue;

    // If secondNum is 0, running execution for division and
    // multiplication will return zero, therefore following code prevents it.

    if (
      (selectOperator == calculatorObj.operators[2]
        && calculatorObj.secondNum == 0)
      || (selectOperator == calculatorObj.operators[3]
        && calculatorObj.secondNum == 0)
    ) {
      calculatorObj.secondNum = [1];
    }
    execCalculation(selectOperator, [
      calculatorObj.firstNum.join(''),
      calculatorObj.secondNum.join(''),
    ]);
    calculatorObj.firstNum = calculatorDisplayInput.value.split('');
    emptyCurrentValue();
  }
};

const updateCalcDisplay = (prop) => {
  calculatorObj.currentValue.push(prop);
  calculatorDisplayInput.value = calculatorObj.currentValue.join('');
};

const emptyCurrentValue = () => calculatorObj.currentValue = [];
