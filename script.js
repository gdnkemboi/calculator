let firstOperand = "0";
let secondOperand = "";
let operator = "";
let solution = "";

function add(...args) {
  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return sum;
}

function subtract(...args) {
  let diff = args[0];

  for (let num of args.slice(1)) {
    diff -= num;
  }
  return diff;
}

function multiply(...args) {
  let prod = args[0];
  for (let num of args.slice(1)) {
    prod *= num;
  }
  return prod;
}

function divide(...args) {
  let div = args[0];
  for (let num of args.slice(1)) {
    div /= num;
  }
  return div;
}

function operate(firstNum, secondNum, operator) {
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  let soln;

  if (operator == "+") {
    soln = add(firstNum, secondNum);
  } else if (operator == "-") {
    soln = subtract(firstNum, secondNum);
  } else if (operator == "×") {
    soln = multiply(firstNum, secondNum);
  } else if (operator == "÷") {
    soln = divide(firstNum, secondNum);
  }

  return soln;
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "×", "÷"];

function populateDisplay() {
  const buttons = document.querySelectorAll(".btn");
  const topDisplay = document.querySelector(".display .top");
  const bottomDisplay = document.querySelector(".display .bottom");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent == "CLEAR") {
        firstOperand = "0";
        secondOperand = "";
        operator = "";
        solution = "";
        bottomDisplay.textContent = firstOperand;
        topDisplay.textContent = "";
      } else if (button.textContent == "DELETE") {
        if (operator == "") {
          firstOperand = firstOperand.slice(0, -1);
          bottomDisplay.textContent = firstOperand;
        } else if (operator != "") {
          secondOperand = secondOperand.slice(0, -1);
          bottomDisplay.textContent = secondOperand;
        } else if (solution != "") {
          solution = solution.slice(0, -1);
          bottomDisplay.textContent = solution;
        }
      } else if (numbers.includes(button.textContent)) {
        if (operator == "") {
          if (firstOperand == "0") {
            firstOperand = button.textContent;
          } else {
            firstOperand = firstOperand.concat(button.textContent);
          }

          bottomDisplay.textContent = firstOperand;
        } else {
          secondOperand = secondOperand.concat(button.textContent);
          bottomDisplay.textContent = secondOperand;
        }
      } else if (button.textContent == ".") {
        if (operator == "") {
          if (firstOperand.charAt(-1) != ".") {
            firstOperand = firstOperand.concat(".");
          }

          bottomDisplay.textContent = firstOperand;
        } else if (operator != "") {
          if (secondOperand == "") {
            secondOperand = "0.";
            bottomDisplay.textContent = secondOperand;
          } else {
            if (secondOperand.charAt(-1) != ".") {
              secondOperand.concat(".");
              bottomDisplay.textContent = secondOperand;
            }
          }
        }
      } else if (operators.includes(button.textContent)) {
        if (operator != "") {
          solution = operate(firstOperand, secondOperand, operator);

          firstOperand = solution;
          secondOperand = "";
          solution = "";
          operator = button.textContent;
          topDisplay.textContent = `${firstOperand} ${operator}`;
          bottomDisplay.textContent = firstOperand;
        }

        operator = button.textContent;
        topDisplay.textContent = firstOperand + " " + operator;
        bottomDisplay.textContent = firstOperand;
      } else if (button.textContent == "=") {
        if (secondOperand != "" && solution == "") {
          console.log(firstOperand);
          console.log(secondOperand);
          console.log(operator);

          solution = operate(firstOperand, secondOperand, operator);
          console.log(solution);

          topDisplay.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
          bottomDisplay.textContent = solution;
        }
      }
    });
  });
}

populateDisplay();
