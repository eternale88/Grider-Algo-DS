// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
// sorting is usually taking and array of numbers and sorting them from least to greatest
//bubblesort is finding largest number, and dragging to the end of the array
function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i -1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1]
        //move larger one to right
        arr[j + 1] = arr[j]
        //moves lesser one to left
        arr[j] = lesser
      }
    }
  }
  return arr
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
