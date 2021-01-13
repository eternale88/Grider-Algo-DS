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
  for(let i = 0; i < arr.length; i++) {
    //assume idex of i is lowest value in array to begin, prove this wrong
    let indexOfMin = i

    //find out if there is a lower value than index of i
    // if yes, assing it's index to indexOfMin
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }
    //if current index isn't the same as min(it was incremented),, swap their values
    if(indexOfMin !== i) {
      let lesser = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = lesser
    }
  }
  return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
