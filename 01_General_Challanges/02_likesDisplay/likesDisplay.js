/** @format */

const likesDisplay = (names) => {
  const length = names.length;

  for (let i = 0; i < length; i++) {
    if (length === 1) {
      return `${names[0]} likes this`;
    } else if (length === 2) {
      return `${names[0]} and ${names[1]} likes this`;
    } else if (length === 3) {
      return ` ${names[0]}, ${names[1]} and ${names[2]} likes this`;
    } else {
      return ` ${names[0]} and ${length - 1} other people likes this `;
    }
  }
};
console.log(likesDisplay(["alex", "maya", "mathew"]));

console.log(likesDisplay(["alex", "maya", "mathew", "bob", "angelina"]));
