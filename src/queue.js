const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor() {
    this.head=null;
  }
}
class Queue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  enqueue(value) {
    let queue_node = new Queue(value);
    if (!this.head) {
      this.head = queue_node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = queue_node;
    }
    return queue_node;
  }

  dequeue() {
    let head_node_queue = this.head;
    this.head = this.head.next;
    return head_node_queue.value;
  }

  getUnderlyingList() {
    let current = this.head;
    return current;
  }
}


module.exports = {
  Queue
};

