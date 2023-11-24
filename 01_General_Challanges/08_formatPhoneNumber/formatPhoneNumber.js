/** @format */

const formatPhoneNumber = (numbersArray) => {
  const areaCode = numbersArray.slice(0, 3).join("");

  const prefix = numbersArray.slice(3, 6).join("");

  const lineNum = numbersArray.slice(6).join("");

  const phoneNumber = `(${areaCode}) ${prefix}-${lineNum}`;

  return phoneNumber;
};

console.log(formatPhoneNumber([0, 2, 3, 5, 3, 3, 2, 1, 7, 6]));

const formatPhoneNumberWithSubString = (numbersArray) => {
  const joinNum = numbersArray.join("");

  const phoneNumber = `(${joinNum.substring(0, 3)}) ${joinNum.substring(
    3,
    6
  )}-${joinNum.substring(6)}`;

  return phoneNumber;
};

console.log(formatPhoneNumberWithSubString([0, 2, 3, 5, 3, 3, 2, 1, 7, 6]));
