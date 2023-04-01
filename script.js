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
let calculatorDisplayInput = document.getElementById("calculator-input");

// Others
const btnDecimal = document.querySelector("#btn-decimal");
const btnAC = document.querySelector("#btn-ac");
const btnEqual = document.querySelector("#btn-equal");

///// Defined Calc Operation /////

const execCalculation = (operator, [first, second]) => {
  switch (operator) {
    case "add":

      // Using Number() to turn stringifed charecters to numbers for calculation
      console.log(add(Number(first), Number(second)));
      calculatorDisplayInput.value = add(Number(first), Number(second));

      break;
    case "subtract":
      console.log(subtract(Number(first), Number(second)));
      document.getElementById("calculator-input").value = subtract(
        Number(first),
        Number(second)
      );
      break;
    case "multiply":
      console.log(multiply(Number(first), Number(second)));
      document.getElementById("calculator-input").value = multiply(
        Number(first),
        Number(second)
      );

      break;
    case "divide":
      console.log(divide(Number(first), Number(second)));
      document.getElementById("calculator-input").value = divide(
        Number(first),
        Number(second)
      );

      break;
    default:
      break;
  }
};


// Operator Assignment
btnAdd.addEventListener("click", () => runOperation(0));
btnSubtract.addEventListener("click", () => runOperation(1));



const actionButtons = document.querySelectorAll(".action-btns");

// Operation : Entering Numbers in Display
actionButtons.forEach((actionBtn) =>
  actionBtn.addEventListener("click", () => {
    currentValue.push(actionBtn.value);
    document.getElementById("calculator-input").value = currentValue.join("");
  })
);
// OPERATION: AC Function
btnAC.addEventListener("click", () => {
  firstNum = [];
  document.getElementById("calculator-input").value = 0;
});
// OPERATION: Calculate
btnEqual.addEventListener("click", () => {
  return execCalculation(selectOperator, [
    firstNum.join(""),
    secondNum.join(""),
  ]);
});


// OPERATION: General
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
