// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {}
console.log(maxChar('abcccccccd'))

module.exports = maxChar

// My solution with help
// function maxChar(str) {
//     const chars = {}
//     for (let char of str) {
//         if (!chars[char]) {
//             chars[char] = 1
//         } else {
//             chars[char]++
//         }
//     }

//     return Object.keys(chars).reduce((a, b) => {
//         if (chars[a] > chars[b]) {
//             return a
//         } else {
//             return b
//         }
//     })
// }

//Grider's solution which creates a character map, the reduce did this for us in other
//     const charMap = {}
//     let max = 0
//     let maxChars = ''
//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     }

//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char]
//             maxChars = char
//         }
//     }
//     return maxChars
// }
