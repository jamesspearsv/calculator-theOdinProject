document.addEventListener("DOMContentLoaded", () => {
  const calcButtons = document.querySelectorAll(".calc-button");

  calcButtons.forEach((button) =>
    button.addEventListener("click", () => {
      updateDisplay(button.value);
    })
  );

  const actionButtons = document.querySelectorAll(".action");
  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "delete-button") {
        console.log("Delete");
        deleteEntry();
      } else {
        completeOperation();
      }
    });
  });
});

function updateDisplay(value) {
  const operations = ["+", "-", "*", "/"];
  const expression = document.querySelector("#expression");
  const currentExpression = expression.textContent;
  const currentExpressionValues = currentExpression.split(" ");

  if (
    operations.includes(value.trim()) &&
    currentExpressionValues.length === 3
  ) {
    return;
  } else {
    expression.textContent = currentExpression.concat(value);
  }
}

function deleteEntry() {
  const expression = document.querySelector("#expression");
  const result = document.querySelector("#result");

  if (expression.textContent === "") {
    result.textContent = "";
  } else {
    expression.textContent = "";
  }
}

function completeOperation() {
  // Get current expression
  const expression = document.querySelector("#expression");
  const result = document.querySelector("#result");
  const expressionValues = expression.textContent.split(" ");

  // if expression is incomplete
  if (expressionValues.length != 3 || expressionValues[2] === "") {
    return;
  }

  // solve expression
  let solution;

  switch (expressionValues[1]) {
    case "+":
      solution =
        parseFloat(expressionValues[0]) + parseFloat(expressionValues[2]);
      break;
    case "-":
      solution = parseInt(expressionValues[0]) - parseInt(expressionValues[2]);
      break;
    case "*":
      solution =
        parseFloat(expressionValues[0]) * parseFloat(expressionValues[2]);
      break;
    case "/":
      solution =
        parseFloat(expressionValues[0]) / parseFloat(expressionValues[2]);
      break;
  }
  if (isNaN(solution)) {
    result.textContent = "Error";
  } else {
    result.textContent = solution;
  }

  expression.textContent = "";
}
