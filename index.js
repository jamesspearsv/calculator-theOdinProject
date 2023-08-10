document.addEventListener("DOMContentLoaded", () => {
  // App states
  let num1 = "";
  let num2 = "";
  let operator = "";
  let lastSolution = "";

  const OPERATIONS = ["+", "-", "*", "/"];
  const display = document.querySelector("#expression");
  const result = document.querySelector("#result");

  // Define actions for number and operation buttons
  document.querySelectorAll(".calc-button").forEach((button) =>
    button.addEventListener("click", () => {
      updateDisplay(button.value);
    })
  );

  // Define actions for delete and enter buttons
  document.querySelectorAll(".action").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "delete-button") {
        clearCalc();
      } else {
        completeOperation();
      }
    });
  });

  // Define action for sign button
  document.querySelector("#sign-button").addEventListener("click", () => {
    toggleSign();
  });

  // CALCULATOR FUNCTIONS

  function updateDisplay(value) {
    // Evaluate which value to update
    if (OPERATIONS.includes(value)) {
      if (operator === "" && num1 === "") {
        operator = value;
        num1 = lastSolution;
      } else if (operator === "") {
        operator = value;
      }
    } else {
      // Test for decimal values
      if (value === ".") {
        if (num1.includes(".") && operator === "") {
          return;
        }
        if (num2.includes(".") && operator != "") {
          return;
        }
      }

      if (operator === "") {
        num1 += value;
      } else {
        num2 += value;
      }
    }

    // Set display in DOM
    const expression = `${num1} ${operator} ${num2}`;
    display.textContent = expression;
  }

  function clearCalc() {
    if (display.textContent != "") {
      display.textContent = "";
    } else {
      result.textContent = "";
    }

    num1 = "";
    num2 = "";
    operator = "";
  }

  function completeOperation() {
    // if expression is incomlete
    if (num1 === "" || num2 === "" || operator === "") {
      return;
    } else {
      let solution;

      switch (operator) {
        case "+":
          solution = parseFloat(num1) + parseFloat(num2);
          break;
        case "-":
          solution = parseFloat(num1) - parseFloat(num2);
          break;
        case "*":
          solution = parseFloat(num1) * parseFloat(num2);
          break;
        case "/":
          solution = parseFloat(num1) / parseFloat(num2);
          break;
      }

      // Output solution and reset state
      result.textContent = solution;
      lastSolution = solution;
      clearCalc();
    }
  }

  function toggleSign() {
    if (operator === "") {
      num1 = parseSign(num1);
    } else {
      num2 = parseSign(num2);
    }

    const expression = `${num1} ${operator} ${num2}`;
    display.textContent = expression;
  }

  function parseSign(num) {
    if (Math.sign(parseFloat(num)) === 1) {
      num = "-" + num;
    } else {
      num = num.slice(1);
    }
    return num;
  }
});
