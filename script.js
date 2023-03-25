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

///// Defined Calc Operation /////

const execCalculation = (operator, [first, second]) => {
  switch (operator) {
    case "add":
      // Using Number() to turn stringifed charecters to numbers for calculation
      console.log(add(Number(first), Number(second)));
      break;
    case "subtract":
      console.log(subtract(Number(first), Number(second)));
      break;
    case "multiply":
      console.log(multiply(Number(first), Number(second)));
      break;
    case "divide":
      console.log(divide(Number(first), Number(second)));
      break;
    default:
      break;
  }
};

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

// TESTING ZONE!!!!!!
// const adding = btnAdd.addEventListener("click", () => {
//   console.log("YAAAY!!!ADDING!");
// });

// Assigning
btnAdd.addEventListener("click", () => {
  selectOperator = operators[0];
  // document.getElementById("calculator-input").value = 0;
  return execCalculation(selectOperator, [
    firstNum.join(""),
    secondNum.join(""),
  ]);

});

// deactivated temporarily for maintenance 
// btnSubtract.addEventListener("click", () => (selectOperator = operators[1]));
// btnDivide.addEventListener("click", () => (selectOperator = operators[2]));
// btnMultiply.addEventListener("click", () => (selectOperator = operators[3]));

const actionButtons = document.querySelectorAll(".action-btns");

// Operation : Entering Numbers in Display
actionButtons.forEach((actionBtn) =>
  actionBtn.addEventListener("click", () => {
    firstNum.push(actionBtn.value);
    document.getElementById("calculator-input").value = firstNum.join("");
    displayValue = firstNum.join("");
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

// Heres the idea: for each number, a new element joins the array within the display. They are fused togethor and as soon
// as an operator is called, they are joined and saved into another variable, waiting while the secondNum gets it turn.
// As soon as the next operator is called, secondNum's elements are also joined therefore the operation's first level is
// done and awaits the next operation.
