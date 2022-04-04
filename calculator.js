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
 return a / b;
}

// Operate function that takes an operator function and two numbers
function operate(operator, a, b) {
  return operator(a, b);
}

// Create number buttons
const numberContainer = document.querySelector(".numbercontainer");
for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.setAttribute("class", "numberbutton");
  button.setAttribute("id", i);
  button.textContent = i;
  numberContainer.appendChild(button);
}