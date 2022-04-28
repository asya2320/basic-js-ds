// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right - null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    if (this.head) {
      let node = this.head;
      return node;
    } else {
      return null;
    }
  }

  add(data) {
    function add_new_data(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = add_new_data(node.left, data);
      } else {
        node.right = add_new_data(node.right, data);
      }
      return node;
    }
    this.head = add_new_data(this.head, data);
  }

  has(data) {
    function search_data(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return search_data(node.left, data);
      } else {
        return search_data(node.right, data);
      }
    }
    return search_data(this.head, data);
  }

  find(data) {
    function find_data(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return find_data(node.left, data);
      } else {
        return find_data(node.right, data);
      }
    }
    return find_data(this.head, data);
  }

  remove(data) {
    function remove_data(node, data) {
      if (!node) {
        return null;
      }
      if(node){
        if (data < node.data) {
          node.left = remove_data(node.left, data);
          return node;
        } else if (data > node.data) {
          node.right = remove_data(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }
          if (!node.left) {
            node = node.right;
            return node;
          }
          if (!node.right) {
            node = node.right;
            return node;
          } else {
            let min_right_node = node.right;
            while (min_right_node.left) {
              min_right_node = min_right_node.left;
            }
            node.data = min_right_node.data;
            node.right = remove_data(node.right, min_right_node.data);
            return node;
          }
        }
      }else{
        return false;
      }
    }
    this.head = remove_data(this.head, data);
  }

  min() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
