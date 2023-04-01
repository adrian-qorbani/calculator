///// Defined Calculating Functions /////

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => a / b;

///// Defined vars for Operation /////

let firstNum = [];
let secondNum = [];
const operators = ["add", "subtract", "multiply", "divide"];
let currentValue = [];
let selectOperator;

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
btnAdd.addEventListener("click", () => runOperation(0));
btnSubtract.addEventListener("click", () => runOperation(1));
btnMultiply.addEventListener("click", () => runOperation(2));
btnDivide.addEventListener("click", () => runOperation(3));



// Operation : Entering Numbers in Display
actionButtons.forEach((actionBtn) =>
  actionBtn.addEventListener("click", () => {
    currentValue.push(actionBtn.value);
    calculatorDisplayInput.value = currentValue.join("");
  })
);

// OPERATION: AC Function
btnAC.addEventListener("click", () => {
  firstNum = [];
  calculatorDisplayInput.value = 0;
});

// OPERATION: Calculate
btnEqual.addEventListener("click", () => runOperation(0));

// OPERATION: General Calculation
let runOperation = (op) => {
  selectOperator = operators[op];
  if (firstNum.length == 0) {
    firstNum = currentValue;
    currentValue = [];
    execCalculation(selectOperator, [firstNum.join(""), secondNum.join("")]);
  } else {
    secondNum = currentValue;
    execCalculation(selectOperator, [firstNum.join(""), secondNum.join("")]);
    // secondNum = [];
    firstNum = calculatorDisplayInput.value.split("");
    currentValue = [];
  }
};
