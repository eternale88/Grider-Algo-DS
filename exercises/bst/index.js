// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    //making them null, makes it clear, that node 
    // has no children to begin with
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data) {
    //if our data is less than root, and left vaule exists we pass the value to the left, and let
    // it handle insert
    if (data < this.data && this.left) {
      //recursion - delegate the insertion
      this.left.insert(data)
    }
    //this is for when left has no value and we insert new node at that point 
    else if (data < this.data) {
      this.left = new Node(data)
    }
    else if (data > this.data && this.right) {
      this.right.insert(data)
    } else if (data > this.data) {
      this.right = new Node(data)
    }
  }

  contains(data) {
    // when they match, return the match
    if (this.data === data) {
      return this
    }
    //data less than, and there is a left node existing, recurse through the left side, and similar way for right side, when greater than root
    if (data < this.data && this.left) {
      return this.left.contains(data)
    } else if (data > this.data && this.right) {
      return this.right.contains(data)
    }

    //if given data arg doesn't exit in our BST
    return null
  }
}

module.exports = Node;
