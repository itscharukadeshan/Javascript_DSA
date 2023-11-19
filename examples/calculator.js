/** @format */

const calculate = (A, B, operator) => {
  const firstNumber = A;
  const SecondNumber = B;

  switch (operator) {
    case "+":
      result = firstNumber + SecondNumber;
      break;
    case "-":
      result = firstNumber - SecondNumber;
      break;
    case "*":
      result = firstNumber * SecondNumber;
      break;
    case "/":
      result = firstNumber / SecondNumber;
      break;
    default:
      throw new Error("Invalid operator");
  }

  return result;
};

console.log(calculate(10, 4, "+"));
