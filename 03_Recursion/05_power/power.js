/** @format */
let runtime = 0;

const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }

  runtime++;

  return base * power(base, exponent - 1);
};

console.log(power(2, 5));

console.log(`Times power () called : ${runtime}`);
