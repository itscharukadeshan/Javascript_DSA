/** @format */

const findPower = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return halfPower * halfPower;
  }
};

// * With smaller exponent

console.time("With smaller input");

console.log(findPower(2, 100));

console.timeEnd("With smaller input");

// * With lager exponent

console.time("With lager input");

console.log(findPower(2, 100));

console.timeEnd("With lager input");
