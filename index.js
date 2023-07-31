document.addEventListener("DOMContentLoaded", () => {
  const calcButtons = document.querySelectorAll("button");

  calcButtons.forEach((button) =>
    button.addEventListener("click", () => {
      updateDisplay(button.value);
    })
  );
});

function updateDisplay(value) {
  // TODO: Test if operand has been chosen already in current expression
  const operands = ["+", "-", "*", "/"];
  const expression = document.querySelector("#expression");
  const currentExpression = expression.textContent;

  operands.forEach((operand) => {
    if (value === operand && currentExpression.includes(operands)) {
    }
  });
  expression.textContent = currentExpression.concat(value);
}
