// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // handles when max bound not set yet, and current node is out of bounds of that max value, then something is wrong with the tree
  if (max !== null && node.data > max) {
    return false
  }

  //same but for left side
  if (min !== null && node.data < min) {
    return false
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false
  }

  return true
}

module.exports = validate;
