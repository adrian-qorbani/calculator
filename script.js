// This is an updated version my calculator written in more cleaner state.
///// Defined Calculating Functions /////

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

//// Defined Calculator Keys

const calcBtns = document.querySelector("#calc-buttons");
calcBtns.addEventListener("click", (event) => {
  const { target } = event;

  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateCalcDisplay();
  }
  if (target.classList.contains("btn-decimal")) {
    inputDecimal(target.value);
    updateCalcDisplay();
  }
  if (target.classList.contains("allc")) {
    console.log("allc", target.value);
  }
  inputDigit(target.value);
  updateCalcDisplay();
});

///// Calculator Object /////

const calcObj = {
  firstOperand: null,
  displayValue: "0",
  awaitSecondOperand: 0, // either 0 or 1
  operator: null,
};

// Calculator Display Update

inputDigit = (digit) => {
  const displayValue = calcObj.displayValue;
  calcObj.displayValue = displayValue === "0" ? digit : displayValue + digit;
  console.log(calcObj);
};

inputDecimal = (decimal) => {
  if (!calcObj.displayValue.includes(decimal)) {
    calcObj.displayValue += decimal;
  }
};

handleOperator = (nextOperator) => {
  const { firstOperand, displayValue, operator } = calcObj;

  const inputValue = parseFloat(displayValue);

  if (firstOperand === null && !isNaN(inputValue)) {
    // Update the firstOperand property
    calcObj.firstOperand = inputValue;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calcObj);
};

updateCalcDisplay = () => {
  let calcDisplay = document.querySelector("#calculator-input");
  calcDisplay.value = calcObj.displayValue;
  // console.log("Hello. Updating!")
};

updateCalcDisplay();
