/** @format */

class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = [];
    this.top = -1;
  }

  push(value) {
    if (this.isFull()) {
      return false;
    }
    this.top++;
    this.stack[this.top] = value;

    return true;
  }

  isFull() {
    return this.top === this.maxSize - 1;
  }
}

module.exports = Stack;
