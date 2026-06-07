const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) throw new Error("Division by zero error");
  return a / b;
};

const squareRoot = (a) => {
  if (a < 0) throw new Error("Square root of negative number error");
  return Math.sqrt(a);
};

const power = (base, exponent) => Math.pow(base, exponent);

const factorial = (n) => {
  if (n < 0 || !Number.isInteger(n)) throw new Error("Factorial requires a non-negative integer");
  return n <= 1 ? 1 : n * factorial(n - 1);
};

const executeOperation = (operationFunc, ...argumentsList) => {
  return operationFunc(...argumentsList);
};

// Expose functions to browser UI via `window.calculator`
if (typeof window !== "undefined") {
  window.calculator = {
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
    power,
    factorial,
    executeOperation,
  };
}