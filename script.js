///// Defined Calculating Functions /////

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

///// Defined vars for Operation /////

let firstNum = [];


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

