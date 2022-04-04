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
  button.setAttribute("id", i);
  button.textContent = i;
  buttonContainer.appendChild(button);
}
// Functions for updating the display
const display = document.querySelector(".display");
function updateDisplay(number) {
  // Display value is a string, so + concats the number to the end
  displayValue = displayValue + number;
  display.textContent = displayValue;
}
function updateNextOperator(operator) {
  if (!nextOperator) {
    currentTotal = Number(displayValue);
    displayValue = "";
    nextOperator = operators[operator];
    console.log(currentTotal, displayValue, nextOperator);
  } else {
    currentTotal = operate(nextOperator, currentTotal, Number(displayValue));
    nextOperator = operators[operator];
    displayValue = "";
    display.textContent = currentTotal;
  }
}

// Link display functions to buttons
const numberButtons = document.querySelectorAll(".numberbutton");
numberButtons.forEach(button => {
  button.addEventListener("click", e => updateDisplay(e.target.id));
})

const operatorButtons = document.querySelectorAll(".operatorbutton");
operatorButtons.forEach(button => {
  button.addEventListener("click", e => updateNextOperator(e.target.id));
})