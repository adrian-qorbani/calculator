///// Defined Calculating Functions /////

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => a / b;

///// Defined vars for Operation /////

const firstNum = 4; //MUST BE DYNAMIC
const secondNum = 6; //MUST BE DYNAMIC
const operators = ["add", "subtract", "multiply", "divide"];
let selectOperator = "add"; //MUST BE DYNAMIC

///// Defined Calc Operation /////

const execCalculation = (operator, [first, second]) => {
  switch (operator) {
    case "add":
      console.log(add(first, second));
      break;
    case "subtract":
      console.log(subtract(first, second));
      break;
    case "multiply":
      console.log(multiply(first, second));
      break;
    case "divide":
      console.log(divide(first, second));
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

// Numbers
const btn1 = document.querySelector("#num-1");
const btn2 = document.querySelector("#num-2");
const btn3 = document.querySelector("#num-3");
const btn4 = document.querySelector("#num-4");
const btn5 = document.querySelector("#num-5");
const btn6 = document.querySelector("#num-6");
const btn7 = document.querySelector("#num-7");
const btn8 = document.querySelector("#num-8");
const btn9 = document.querySelector("#num-9");
const btn10 = document.querySelector("#num-0");

// Others
const btnDecimal = document.querySelector("#btn-decimal");
const btnAC = document.querySelector("#btn-ac");
const btnEqual = document.querySelector("#btn-equal");

// TESTING ZONE!!!!!!
// const adding = btnAdd.addEventListener("click", () => {
//   console.log("YAAAY!!!ADDING!");
// });
