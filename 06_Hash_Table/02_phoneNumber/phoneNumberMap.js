/** @format */

const phoneNumberMap = (numberArray) => {
  const map = new Map();

  numberArray.forEach((entry) => {
    const [name, number] = entry.split(":");
    map.set(name, number);
  });

  return map;
};

const numbers = ["john:5551234567", "jane:7774561234"];
console.log(phoneNumberMap(numbers));
