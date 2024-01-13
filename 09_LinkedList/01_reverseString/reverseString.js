/** @format */

const { LinkedList } = require("../linkedList");

const reverseString = (string) => {
  /**
   * Creates a new LinkedList object to store the characters of the string.
   */
  const list = new LinkedList();

  /**
   * Iterates through the string in reverse order, adding each character to the linked list.
   */
  for (let i = string.length - 1; i >= 0; i--) {
    list.add(string[i]);
  }

  /**
   * Initializes a variable to hold the reversed string.
   */
  let reverseString = "";

  /**
   * Starts at the beginning of the linked list.
   */
  let current = list.head;

  /**
   * Iterates through the linked list, appending each character to the reversedString variable.
   */
  while (current !== null) {
    reverseString += current.data;
    current = current.next; // Moves to the next node in the list.
  }

  /**
   * Returns the reversed string.
   */
  return reverseString;
};

/**
 * Example usage: Reverses the string "! dlrow olleH" and prints the result.
 */
console.log(reverseString("! dlrow olleH")); // Output: "Hello world!"
