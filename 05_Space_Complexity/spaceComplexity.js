/** @format */

// ? Run One At a time

const spaceComplexity = () => {
  // * ConstantSpace O(1)

  const sum = (arr) => {
    console.time("sum");
    let sum = 0;
    for (let x of arr) {
      sum += x;
    }

    console.timeEnd("sum");
  };

  console.log(sum([1, 2, 3, 4, 5]));

  // * LinierSpace O(n)

  const copyArray = (arr) => {
    console.time("copy");
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
      newArray.push(arr[i]);
    }

    console.timeEnd("copy");
  };

  console.log(copyArray([1, 2, 3, 4, 5]));

  // * Exponential | Quadratic O(2^n) space

  const fib = (n) => {
    if (n <= 1) return 1;

    return fib(n - 1) + fib(n - 2);
  };

  console.log(fib(5));
};
