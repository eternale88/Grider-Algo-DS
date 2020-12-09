// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true


//circular linkedlist, has not tail node, as it's pointing to an earlier node
function circular(list) {
  let slow = list.getFirst()
  let fast = list.getFirst()

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    //both pointing to same value means they are circular, don't do slow.next or fast.next equal
    //because values of multiple nodes may be same
    //so we check whether they are the same object in memory
    if (slow === fast) {
      return true
    }
  }
  //if we ever exit loop mean it's not circular, as it reached the end, so return false
  return false

}

module.exports = circular;
