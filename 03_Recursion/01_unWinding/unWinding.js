/** @format */

const unWinding = (n) => {
  if (n === 1) {
    return 1;
  }

  return n + unWinding(n - 1);
};

console.log(unWinding(6));
