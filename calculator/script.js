const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultDisplayed = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      display.textContent = "0";
      return;
    }

    if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
      return;
    }

    if (value === "=") {
      try {
        const sanitized = currentInput.replace(/÷/g, "/").replace(/×/g, "*");
        const result = eval(sanitized);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
      return;
    }

    if (resultDisplayed && /[0-9.]/.test(value)) {
      currentInput = value;
      resultDisplayed = false;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});
