///// Defined Calculating Functions /////

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

///// Defined vars for Operation /////


const calculatorObj = {
  firstNum: [],
  secondNum: [],
  operators: ["add", "subtract", "multiply", "divide"],
  currentValue: [],
  currentOperator: null,
};
///// DOM Variables /////
// Operators
const btnAdd = document.querySelector("#add-operator");
const btnSubtract = document.querySelector("#subtract-operator");
const btnDivide = document.querySelector("#division-operator");
const btnMultiply = document.querySelector("#times-operator");
const actionButtons = document.querySelectorAll(".action-btns");
let calculatorDisplayInput = document.querySelector("#calculator-input");

// Others
const btnDecimal = document.querySelector("#btn-decimal");
const btnAC = document.querySelector("#btn-ac");
const btnEqual = document.querySelector("#btn-equal");

///// Defined Calc Operation /////

const execCalculation = (operator, [first, second]) => {
  switch (operator) {
    case "add":
      // Using Number() to turn stringifed charecters to numbers for calculation
      calculatorDisplayInput.value = add(Number(first), Number(second));
      break;
    case "subtract":
      calculatorDisplayInput.value = subtract(Number(first), Number(second));
      break;
    case "multiply":
      calculatorDisplayInput.value = multiply(Number(first), Number(second));
      break;
    case "divide":
      calculatorDisplayInput.value = divide(Number(first), Number(second));
      break;
  }
};

// Buttons Choosing Operators
btnAdd.addEventListener("click", () => {
  calculatorObj.currentOperator = 0;
  runOperation(0);
});

btnSubtract.addEventListener("click", () => {
  calculatorObj.currentOperator = 1;
  runOperation(1);
});

btnMultiply.addEventListener("click", () => {
  calculatorObj.currentOperator = 2;
  runOperation(2);
});
btnDivide.addEventListener("click", () => {
  calculatorObj.currentOperator = 3;
  runOperation(3);
});

// Operation : Entering Numbers in Display
actionButtons.forEach((actionBtn) =>
  actionBtn.addEventListener("click", () => {
    calculatorObj.currentValue.push(actionBtn.value);
    calculatorDisplayInput.value = calculatorObj.currentValue.join("");
  })
);

// OPERATION: AC Function
btnAC.addEventListener("click", () => {
  calculatorObj.firstNum = [];
  calculatorObj.currentValue = [];
  calculatorObj.secondNum = [];
  calculatorDisplayInput.value = 0;
});

// OPERATION: Calculate
btnEqual.addEventListener("click", () =>
  runOperation(calculatorObj.currentOperator)
);

// OPERATION: General Calculation
let runOperation = (op) => {
  let selectOperator = calculatorObj.operators[op];
  if (calculatorObj.firstNum.length == 0) {
    calculatorObj.firstNum = calculatorObj.currentValue;
    calculatorObj.currentValue = [];
    execCalculation(selectOperator, [
      calculatorObj.firstNum.join(""),
      calculatorObj.secondNum.join(""),
    ]);
  } else {
    calculatorObj.secondNum = calculatorObj.currentValue;
    // If secondNum is 0, running execution for division and multiplication will return zero, therefore following code prevents it.
    if (
      (selectOperator == calculatorObj.operators[2] &&
        calculatorObj.secondNum == 0) ||
      (selectOperator == calculatorObj.operators[3] &&
        calculatorObj.secondNum == 0)
    ) {
      calculatorObj.secondNum = [1];
    }
    execCalculation(selectOperator, [
      calculatorObj.firstNum.join(""),
      calculatorObj.secondNum.join(""),
    ]);
    calculatorObj.firstNum = calculatorDisplayInput.value.split("");
    calculatorObj.currentValue = [];
  }
};
