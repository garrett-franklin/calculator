// Set up global variables
let displayValue = "";
let currentTotal = null;
let nextOperator = null;

// Define operator functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return "Can't divide by zero, dumbass.";
  return a / b;
}
const operators = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
}

// Operate function that takes an operator function and two numbers
function operate(operator, a, b) {
  return operator(a, b);
}

// Create buttons
const buttonContainer = document.querySelector(".buttoncontainer");
// Number buttons
for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.setAttribute("class", "numberbutton");
  button.setAttribute("id", `number${i}`);
  button.setAttribute("value", i);
  button.textContent = i;
  buttonContainer.appendChild(button);
}
// Functions for calculations and updating the display
const display = document.querySelector(".display");
function updateDisplay(number) {
  if (number === "." && displayValue.includes(".")) return;
  displayValue = displayValue + number;
  display.textContent = displayValue;
}
function updateNextOperator(operator) {
  if (!nextOperator && !currentTotal) {
    currentTotal = Number(displayValue);
    displayValue = "";
    nextOperator = operators[operator];
  } else if (!nextOperator && currentTotal) {
    nextOperator = operators[operator];
  } else {
    currentTotal = operate(nextOperator, currentTotal, Number(displayValue));
    nextOperator = operators[operator];
    displayValue = "";
    display.textContent = currentTotal;
  }
}
function equals() {
  currentTotal = operate(nextOperator, currentTotal, Number(displayValue));
  nextOperator = null;
  displayValue = "";
  display.textContent = currentTotal;
}
function clear() {
  currentTotal = null;
  nextOperator = null;
  displayValue = "";
  display.textContent = 0
}

// Link button functionality
const numberButtons = document.querySelectorAll(".numberbutton");
numberButtons.forEach(button => {
  button.addEventListener("click", e => updateDisplay(e.target.value));
})
const operatorButtons = document.querySelectorAll(".operatorbutton");
operatorButtons.forEach(button => {
  button.addEventListener("click", e => updateNextOperator(e.target.id));
})
const equalsButton = document.querySelector("#equalsbutton");
equalsButton.addEventListener("click", equals);
const clearButton = document.querySelector("#clearbutton");
clearButton.addEventListener("click", clear);