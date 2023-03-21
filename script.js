// Defined Calculating Functions

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => a / b;

// Defined vars for Operation

const firstNum = 4; //MUST BE DYNAMIC
const secondNum = 6; //MUST BE DYNAMIC
const operators = ["add", "subtract", "multiply", "divide"];
let selectOperator = "add"; //MUST BE DYNAMIC

// Defined Calc Operation

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

// DOM Variables

