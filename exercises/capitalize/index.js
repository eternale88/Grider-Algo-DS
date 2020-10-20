// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {}
console.log(capitalize('there go'))
module.exports = capitalize

//first attempt with help
// function capitalize(str) {
//     return str
//         .split(' ')
//         .map((char) => {
//             return char[0].toUpperCase() + char.slice(1)
//         })
//         .join(' ')
// }

// Grider's second solution, easier to code
// function capitalize(str) {
//     const words = []
//     str.split(' ').forEach((char) => {
//         words.push(char[0].toUpperCase() + char.slice(1))
//     })

//     return words.join(' ')
// }

// His second solution, less straight forward with it depending on the first char needing
// to be capitalized, but interesting
// function capitalize(str) {
//     let result = str.charAt(0).toUpperCase() // Have to capitalize the first one initially to check to the left in for loop
//     for (let i = 1; i < str.length; i++) {
//         if (str[i - 1] === ' ') {
//             // str[i - 1 ] checks if character to left is and empty space
//             result += str[i].toUpperCase()
//         } else {
//             result += str[i]
//         }
//     }
//     return result
// }
