/** @format */
const { LinkedList } = require("../linkedList");

const reverseString = (string) => {
  const list = new LinkedList();

  for (let i = string.length - 1; i >= 0; i--) {
    list.add(string[i]);
  }

  let reverseString = "";
  let current = list.head;

  while (current !== null) {
    reverseString += current.data;
    current = current.next;
  }
  return reverseString;
};

console.log(reverseString("! dlrow olleH"));
