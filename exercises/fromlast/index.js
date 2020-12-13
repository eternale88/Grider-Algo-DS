// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.getFirst()
  let fast = list.getFirst()

  // allows fast to advance number(n) intolist
  while (n > 0) {
    fast = fast.next
    n--
  }
  // while is a next node, advance both
  while (fast.next) {
    slow = slow.next
    fast = fast.next
    //when fast.next is no longer true
    // slow is n times behind
    // and can be returned outside loop
    // with no more work required
  }
  return slow
}

module.exports = fromLast;
