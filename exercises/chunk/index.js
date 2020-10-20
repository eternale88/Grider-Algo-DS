// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// let array = [1, 2, 3, 4, 5]
function chunk(array, size) {}
console.log(chunk(array, 2))

module.exports = chunk

// The first solution
// let array = [1, 2, 3, 4, 5]
// function chunk(array, size) {
//     const chunkedArr = []
//     for (let i = 0; i < array.length; i++) {
//         const last = chunkedArr[chunkedArr.length - 1] //get last element value of array
//         if (!last || last.length === size) {
//             chunkedArr.push([array[i]])
//         } else {
//             last.push(array[i])
//         }
//     }
//     return chunkedArr
// }

// second solution that is predicated on knowledge of the slice method
// which makes a copy of an array with the specified values
// function chunk(array, size) {
//     const chunked = []
//     let index = 0
//     while (index < array.length) {
//         chunked.push(array.slice(index, index + size))
//         index += size
//     }
//     return chunked
// }
