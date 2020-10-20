// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   //empty array of arrays, n number of sub arrays, for each step from 0 to n push sub array on to results array
//   const results = []
//   for (let i = 0; i < n; i++) {
//     results.push([])
//   }

//   // counter keeps track of what number we are trying to push onto the results array
//   let counter = 1
//   let startColumn = 0
//   let endColumn = n - 1
//   let startRow = 0
//   let endRow = n - 1

//   while (startColumn <= endColumn && startRow <= endRow) {

//     // for loops

//     //assemble top row of solution, left to right of solution, 1, 2, 3
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter
//       counter++
//     }
//     startRow++ //incrementing startrow by 1 end of first loop, moves us to second row, index 1

//     // assemble right hand side column, 4, 5
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter
//       counter++
//     }
//     endColumn-- // shifts from last to middle to work on 6 below

//     // this section is a repeat of the first 2 loops, but going in the other directions
//     // assemble bottom row, 6, 7
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter
//       counter++
//     }
//     endRow-- // shift row from last to middle, to work on 8 below


//     // assemble left hand side, 8
//     for (let i = endRow; i >= startRow; i--) {  //after initial run, we go bach to while, and 9, is captured in first loop, then we exit function
//       results[i][startColumn] = counter
//       counter++
//     }
//     startColumn++
//   }

//   return results
// }



// [[1, 2, 3],
// [8, 9, 4],
// [7, 6, 5]]


function matrix(n) {
  let results = []
  // create array structure
  for (let i = 0; i < n; i++) {
    results.push([i])
  }

  let startRow = 0
  let endRow = n - 1
  let startColumn = 0
  let endColumn = n - 1
  let counter = 1

  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter
      counter++
    }
    startRow++

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter
      counter++
    }
    endColumn--

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter
      counter++
    }
    endRow--

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter
      counter++
    }
    startColumn++

  }
  return results
}
console.log(matrix(5))

module.exports = matrix;
