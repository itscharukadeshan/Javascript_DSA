/** @format */

// * visualize the array sorting in console step by step

const visualize = (arr) => {
  console.log(" ".repeat(10));
  console.log(`sorting the array ... => ` + JSON.stringify(arr));
};

// * bubble Sort with for loop

const bubbleSort = (array) => {
  visualize(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = temp;
        visualize(array);
      }
    }
  }

  return array;
};

// * bubble Sort with for loop and while loop

const bubbleSort_2 = (array) => {
  while (true) {
    let swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];

        array[i] = array[i + 1];

        array[i + 1] = temp;

        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return array;
};

module.exports = { bubbleSort, bubbleSort_2 };
