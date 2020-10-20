// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {}

console.log(palindrome('abba'))

module.exports = palindrome

//My first solution

// function palindrome(str) {
//     const reversed = str.split('').reduce((reversed, character) => {
//         return character + reversed
//     }, '')
//     if (str === reversed) {
//         return true
//     } else {
//         return false
//     }
// }

// Grider's first most straight forward
// function palindrome(str) {
//     const reversed = str
//         .split('')
//         .reverse()
//         .join('')
//     return reversed === str
// }

// Grider's more complicated but not most efficient
// function palindrome(str) {
//     return str.split('').every((character, i) => {
//         return character === str[str.length - i - 1]
//     })
// }
