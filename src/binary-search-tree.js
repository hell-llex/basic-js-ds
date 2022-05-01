const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  
  constructor() {
    this.broot = null;
}

  root() {

    return !this.broot ? this.broot = null : this.broot;

  }

  add(dat) {
    
    this.broot = addNode(this.broot, dat);

    function addNode(node, dat) {
      if (!node) {
        return new Node(dat);
      }

      if (node.data === dat) {
        return node;
      }

      dat < node.data ?
        node.left = addNode(node.left, dat) :
        node.right = addNode(node.right, dat);

      return node;
    }
  }

  has(dat) {

    return searchBoolean(this.broot, dat);

    function searchBoolean(node, dat) {
      if (!node) return false;

      if (node.data === dat) return true;

      return dat < node.data ? 
        searchBoolean(node.left, dat) : 
        searchBoolean(node.right, dat);
    }
  }

  find(dat) {

    return searchValue(this.broot, dat);

    function searchValue(node, dat) {
      if (!node) return null;

      if (node.data === dat) return node

      return dat < node.data ? 
        searchValue(node.left, dat) : 
        searchValue(node.right, dat);
    }
  }
  
  remove(dat) {

    this.broot = removeNode(this.broot, dat);

    function removeNode(node, dat) {

      if (!node) return null;

      if (dat < node.data) {
        node.left = removeNode(node.left, dat);
        return node;
      } else if (node.data < dat) {
        node.right = removeNode(node.right, dat);
        return node;
      } else {                                      // if it is a sheet
        if (!node.left && !node.right) return null

        if (!node.left) {                           // if children on the right
          node = node.right;
          return node;
        }

        if (!node.right) {                          // if children on the left
          node = node.left;
          return node;
        }

        // if children are from 2 sides
        // minimum value on the right or maximum value on the left

        let minR = node.right;

        while (minR.left) minR = minR.left;

        node.data = minR.data;

        node.right = removeNode(node.right, minR.data);

        return node;
      }
    }

  }

  min() {
    if (!this.broot) return;

    let MinNode = this.broot;
    while (MinNode.left) MinNode = MinNode.left;

    return MinNode.data;
  }

  max() {
    if (!this.broot) return;

    let MaxNode = this.broot;
    while (MaxNode.right) MaxNode = MaxNode.right;

    return MaxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};