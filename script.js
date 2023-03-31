///// Defined Calculating Functions /////

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => a / b;

///// Defined vars for Operation /////

let firstNum = [];
let secondNum = [];
const operators = ["add", "subtract", "multiply", "divide"];
let selectOperator = "add"; //MUST BE DYNAMIC
let displayValue;
let currentValue = [];

///// DOM Variables /////
// Operators
const btnAdd = document.querySelector("#add-operator");
const btnSubtract = document.querySelector("#subtract-operator");
const btnDivide = document.querySelector("#division-operator");
const btnMultiply = document.querySelector("#times-operator");

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
      document.getElementById("calculator-input").value = add(
        Number(first),
        Number(second)
      );
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

// TESTING ZONE!!!!!!
// const adding = btnAdd.addEventListener("click", () => {
//   console.log("YAAAY!!!ADDING!");
// });

// Assigning
btnAdd.addEventListener("click", () => {
  // if current value is empty run firstNum else its not empty, run second number then add it to the first.
  if (firstNum.length == 0) {
    firstNum = currentValue;
    currentValue = [];
    selectOperator = operators[0];
    execCalculation(selectOperator, [
      firstNum.join(""),
      secondNum.join(""),
    ]);


  } else {
    secondNum = currentValue;
    currentValue = [];
    selectOperator = operators[0];
    execCalculation(selectOperator, [
      firstNum.join(""),
      secondNum.join(""),
    ]);
    firstNum = [];
  }
});

// deactivated temporarily for maintenance
// btnSubtract.addEventListener("click", () => (selectOperator = operators[1]));
// btnDivide.addEventListener("click", () => (selectOperator = operators[2]));
// btnMultiply.addEventListener("click", () => (selectOperator = operators[3]));

const actionButtons = document.querySelectorAll(".action-btns");

// Operation : Entering Numbers in Display
actionButtons.forEach((actionBtn) =>
  actionBtn.addEventListener("click", () => {
    currentValue.push(actionBtn.value);
    document.getElementById("calculator-input").value = currentValue.join("");
    displayValue = currentValue.join("");
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
