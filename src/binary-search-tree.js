const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    this.base = addNode(this.base, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return search(this.base, data);
    function search(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? 
        search(node.left, data) : 
        search(node.right, data);
    }
  }

  find(data) {
    return search(this.base, data);
    function search(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data ? 
        search(node.left, data) : 
        search(node.right, data);
    }
  }

  remove(data) {
    this.base = removeNode(this.base, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
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
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.base) {
      return;
    }
    let node = this.base;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.base) {
      return;
    }
    let node = this.base;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

// const tree = new BinarySearchTree();
// tree.add(6);
// tree.add(2);
// tree.add(7);
// tree.add(9);
// console.log(tree);
// console.log(tree.base);
// console.log(tree.base());

module.exports = {
  BinarySearchTree
};