// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, null]
  const counters = [0]

  //we always add null, so array must be greater than 1 to be looped through, or would have infinite loop
  while (arr.length > 1) {
    const node = arr.shift()

    //if see this null value, we have reached end of that level, so we take it back and put at very end of our array, and add 0 onto counters arr, to show we are moving onto
    //next row for our counter
    if (node === null) {
      arr.push(null)
      counters.push(0)
    } else {
      //else meaning our node has a value
      arr.push(...node.children)
      //increments last el of array
      counters[counters.length - 1]++

    }
  }
  return counters
}

module.exports = levelWidth;
