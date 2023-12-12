/** @format */

// Recursion happened first and the unwinding start after base case reach

const unWinding = (n) => {
  // * Base case = ( n === 1 )
  if (n === 1) {
    console.log(`Base case reached with n=1. Returning 1`);
    return 1;
  }

  console.log(`Calling unWinding(${n - 1}) recursively`);

  const sum = n + unWinding(n - 1);

  console.log(`Returning ${sum} back up the stack`);

  return sum;
};

console.log(unWinding(5));
