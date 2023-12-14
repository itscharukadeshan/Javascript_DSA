/** @format */

// From => https://stackoverflow.com/a/56284082

function fibCalc(n) {
  var myArr = [];

  for (var i = 0; i < n; i++) {
    if (i < 2) {
      myArr.push(i);
    } else {
      myArr.push(myArr[i - 2] + myArr[i - 1]);
    }
  }

  return myArr;
}

console.log(fibCalc(8));
