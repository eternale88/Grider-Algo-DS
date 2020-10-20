// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
// }



// console.log(reverse('salem'))
// module.exports = reverse

// My first solution, achieved after 22 minutes and some google fu
// function reverse(str) {
//   const reversedString = []
//   for (let i = str.length; i <= str.length; i--) {
//     if (i < 0) {
//       break
//     } else {
//       reversedString.push(str[i])
//     }
//   }
//   return reversedString.join('')
// }
// console.log(reverse('apple'))

// Grider's first, used in built array methods
// function reverse(str) {
//initial
//   const arr = str.split('')
//   arr.reverse()
//   return arr.join('')
//final with cleanup by method chaining - beautiful

//   return str
//     .split('')
//     .reverse()
//     .join('')
// }

// Grider's second solution where he recommends not using traditional for loop syntax

// function reverse(str) {
//   let reversed = ''
//   for (let character of str) {
//     reversed = character + reversed // adds each one to the front of the empty string
//   }
//   return reversed
// }

//Grider third solution
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed
//     }, '')
// }



//came back after almost a year practice some more, finding my passion while working on the weekends
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('')
// }

// function reverse(str) {
//   let reversed = ''

//   for (let char of str) {
//     reversed = char + reversed
//   }
//   return reversed
// }
function reverse(str) {
  // let reverseStr = ''

  // for (let char of str) {
  //   reverseStr = char + reverseStr
  // }
  // return reversedStr

  return str.split('').reduce((reverse, char) => {
    return char + reverse
  }, '')
}

console.log(reverse('naomi'))


module.exports = reverse