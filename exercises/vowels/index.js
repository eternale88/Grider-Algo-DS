// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {}

console.log(vowels('hello'))

module.exports = vowels

// return str
//     .toLowerCase()
//     .split('')
//     .forEach((letter) => {
//         if (
//             letter === 'a' ||
//             letter === 'e' ||
//             letter === 'i' ||
//             letter === 'o' ||
//             letter === 'u'
//         ) {
//             count += 1
//         }
//         return count
//     })

//My first solution
// function vowels(str) {
//     str = str.toLowerCase()
//     let count = 0

//     for (let i = 0; i < str.length; i++) {
//         if (
//             str[i] === 'a' ||
//             str[i] === 'e' ||
//             str[i] === 'i' ||
//             str[i] === 'o' ||
//             str[i] === 'u'
//         ) {
//             count++
//         }
//     }
//     return count
// }

// My second way
// function vowels(str) {
//   let count = 0

//   str
//     .toLowerCase()
//     .split('')
//     .forEach((letter) => {
//       if (
//         letter === 'a' ||
//         letter === 'e' ||
//         letter === 'i' ||
//         letter === 'o' ||
//         letter === 'u'
//       ) {
//         count += 1
//       }
//     })
//   return count
// }

// Grider's first solution
// function vowels(str) {
//     let count = 0
//     const checker = ['a', 'e', 'i', 'o', 'u']

//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++
//         }
//     }
//     return count
// }

// His second solution with regex
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi) //everything in brackets is checked for, g is to keep going after first match
//     // and i ignores the case sensitivity, match will return and array if found or null if not
//     return matches ? matches.length : 0
// }
