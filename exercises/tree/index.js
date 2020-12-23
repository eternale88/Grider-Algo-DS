// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    // const node = new Node(data)
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      //!== because filter, only removes for false values, so all that not equal data are removed
      return node.data !== data
    })
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  //heirarchy - like print out ceo, to cto, coo, left to right top to bottom
  traverseBF(fn) {
    // let arr = []
    // arr.push(this.root)
    //get top node aka parent, add to array
    const arr = [this.root]

    //while arr had nodes
    while (arr.length) {
      //shift removes and return first el
      let node = arr.shift()
      //... takes them out of children array and adds them, simpler that for of loop
      arr.push(...node.children)
      //fn gets rid of the node we removed
      fn(node)
    }
  }
}

module.exports = { Tree, Node };
