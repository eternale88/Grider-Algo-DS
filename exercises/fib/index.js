// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// write a memoizer function, that takes slow fib function and returns fast one
function memoize(fn) {
  const cache = {}
  //use ... becuase we don't know for sure how many arg it will receive, so we can reuse it
  return function (...args) {
    // if func ever been called with those args, return cached versions
    if (cache[args]) {
      return cache[args]
    }

    //else call our original slowfib function, and store func call and args in cache
    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}
function slowFib(n) {
  // interviewer might ask for recursive solution, you solve it then he asks the runtime complexity

  //recursion has Exponential time 2 ^ n runtime, very bad
  //because for each additional increase n, we will
  // dramatically increase our function calls for fib()

  //interviewer, anyway we can improve the runtime of this particular algorithm? hint: they are looking for something very particular

  //you say memoization, it will store arguments of each
  //function call along with result. if the function is called again with same arguments, return the precomputed result rather than running the function again. So we won't run duplicate functions

  // less than 2 would mean only has first 2 values
  if (n < 2) {
    return n
  }

  //only calls memoized version, why name is different than normal
  return fib(n - 1) + fib(n - 2)
}
// implement memoize, and export memoized version
const fib = memoize(slowFib)
console.log(fib(4))

module.exports = fib;

//iterative
// function fib(n) {

// let results = [0, 1]

// // start at 2 to produce third element of array
// for (let i = 2; i <= n; i++) {
//   //grab last 2 elements from array
//   // number 1 
//   const a = results[i - 1]
//   // 0
//   const b = results[i - 2]

//   // for first time push 0 + 1 which = 1
//   results.push(a + b)
// }
// //return n index
// return results[results.length - 1]
// }


//recursion
// function fib(n) {
  // interviewer might ask for recursive solution, you solve it then he asks the runtime complexity

  //recursion has Exponential time 2 ^ n runtime, very bad
  //because for each additional increase n, we will
  // dramatically increase our function calls for fib()

  //interviewer, anyway we can improve the runtime of this particular algorithm? hint: they are looking for something very particular

  //you say memoization, it will store arguments of each
  //function call along with result. if the function is called again with same arguments, return the precomputed result rather than running the function again. So we won't run duplicate functions

  // less than 2 would mean only has first 2 values
//   if (n < 2) {
//     return n
//   }

//   return fib(n - 1) + fib(n - 2)
// }