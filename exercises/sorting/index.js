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
    // if yes, assign it's index to indexOfMin
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

//splits array, into 2, 2 times, until each el, is it own chunk and passes them into merge func each time
function mergeSort(arr) {
//first check if arr only has one el, means we can't subdivide any more
  if(arr.length === 1) {
    return arr
  }

  //divide arr in 2 equal halves, must first determine center to do this
  //[a, b, c, d] center would be index 2, which is 3, doesnt seem like middle but we use slice below
  const center = Math.floor(arr.length / 2)
  //divide in 2
  //remember, slice will return from 0 and upto but not including center, so it would stop at 'b', giving us [a, b]
  const left = arr.slice(0, center)
  // by only passing center, we are saying take everything from center all the way to end of arr, in this case, [c, d]
  const right = arr.slice(center)

  // recursive call of mergeSort algo, inside merge func
  return merge(mergeSort(left), mergeSort(right))
}

//takes 2 different sorted arrays and merges them into one sorted array, left [-22, 11], right [-2, 7] for example, left is less than right
function merge(left, right) {
  const results = []
  //while l and r still have values
  while(left.length && right.length) {
    //if first el of left is less than first el in right, shift the el from left onto results arr

    //shift always removes first el of arr and returns it
    if(left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
   
  }
   //return, new array, adding any remaining values onto results arr, we can assume that one array would be empty and the other would have values that were greater than results values
   return [...results, ...left, ...right]

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
