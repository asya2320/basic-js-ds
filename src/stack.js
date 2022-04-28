const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */


class Stack {
  constructor() {
    this.arr = [];
    this.length = 0;
  }

  push(value) {
    this.length++;
    return this.arr.push(value);
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  pop() {
    if (this.length === 0) {
      return null;
    } else {
      return this.arr.pop();
    }
  }
}

module.exports = {
  Stack,
};
