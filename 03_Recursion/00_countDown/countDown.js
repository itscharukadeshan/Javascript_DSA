/** @format */

const countDown = (number) => {
  if (number <= 0) {
    console.log("all done !");
    return;
  }
  console.log(number);

  number--;

  countDown(number);
};

const numberExample = 10;
countDown(numberExample);
