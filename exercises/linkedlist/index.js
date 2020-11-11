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
    // let node = new Node(data, this.head)
    this.head = node.next
  }

}

module.exports = { Node, LinkedList };
