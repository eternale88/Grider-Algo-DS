// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    //this.head refers to any existing arg of contructor, if there are any
    const node = new Node(data, this.head)
    //this makes sure it points to new node. by assigning new node to this.head, it is now the head, as its the newest node
    this.head = node
  }

  size() {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  getFirst() {
    // head property always points to first node of linked list
    let firstNode = this.head
    return firstNode
  }

  getLast() {
    let node = this.head
    //if no node in list, get out
    if (!node) {
      return null
    }

    // while node exists
    while (node) {
      // if next node is null, return because its the last
      if (!node.next) {
        return node
      }
      //otherwise keep iterating through
      node = node.next
    }
  }

  clear() {
    // head is the what keeps track, so zero it out
    this.head = null
  }

  removeFirst() {
    let node = this.head

    // if no nodes in list return
    if (!node) {
      return null
    }
    // to remove first, point head to second node
    this.head = node.next
  }

  removeLast() {
    //if no nodes, exit
    if (!this.head) {
      return null
    }

    //check see if length of 1
    // if next to head null, means only one, so remove it
    if (!this.head.next) {
      this.head = null
      return
    }

    //the actual algorithm, after edge cases handled above
    //get first and second
    let previous = this.head
    let node = this.head.next
    //while still a value left loop it
    while (node.next) {
      previous = node
      node = node.next
    }
    //if node.next is null, update previous pointer to null, therefore removing the last node, that you are currently on
    previous.next = null
  }

  insertLast(data) {
    const last = this.getLast()
    if (last) {
      // there are some existing nodes in our chain, point current last's next prop to our new one(inserting there)
      last.next = new Node(data)
    } else {
      // node chain is empty, so insert new node
      this.head = new Node(data)
    }
  }

  getAt(index) {
    // edge case below can be skipped since, is handled by return null below in this

    // if (!this.head) {
    //   return null
    // }
    let node = this.head
    let counter = 0
    while (node) {
      // index === to counter, return node 
      if (index === counter) {
        return node
      }
      //else increment, and go to next node
      counter++
      node = node.next
    }
    // edge case, for if index is out of bounds, skip loop and return null, if null it never enters while loop because of it's condition
    return null
  }

  removeAt(index) {
    if (!this.head) {
      return null
    }

    if (index === 0) {
      //if its the first node, point to next, meaning it's removed
      return this.head = this.head.next
    }

    // when index is > 0 and we find prev node,
    //and update next prop to look further out into future to the one after it
    const previous = this.getAt(index - 1)
    //important edge case, if prev is out of bounds, or prev.next out of bounds,  return
    if (!previous || !previous.next) {
      return null
    }
    previous.next = previous.next.next
  }

  insertAt(data, index) {
    // if list is empty
    if (!this.head) {
      //reused a method :)
      this.insertFirst(data)
    }
    // insert at index 0 when list isn't empty,
    // pass in this.head, to make sure it points to old one
    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }
    //if adding int in the middle, get previous element, create new node with reference to one after previous
    // or this.getLast handles, to insert node last when index is out of bounds
    const previous = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, previous.next)
    //then update previous.next to point to our new node
    previous.next = node

    if (!previous || !previous.next) {
      this.insertFirst(data)
    }
  }

  forEach(fn) {
    let node = this.head
    let counter = 0
    while (node) {
      fn(node, counter)
      node = node.next
      counter++
    }
  }

  //allow use of (for of by using), by using generator function
  //same result as forEach above, can now use for of loop in tests
  //for of loops can be used in tests because they automatically look for *[Symbol.iterator]
  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }

}

module.exports = { Node, LinkedList };
