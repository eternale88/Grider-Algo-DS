// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {}

module.exports = anagrams

//First solution

// function anagrams(stringA, stringB) {
//   aCharMap = buildCharMap(stringA)
//   bCharMap = buildCharMap(stringB)

//   // Check if strings are the same length by comparing length of keys
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }

//   // Compare character maps to see if letter occur the same amount
//   for (let char in aCharMap) {
//     //compares the amount of times that value occurs in each map
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//   return true
// }

// //Helper function for building character map
// function buildCharMap(str) {
//   const charMap = {}
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }

// Second solution, easier but with it's own interesting problems
// must turn into array in order to use sort which is an array helper, that will sort numbers
// and characters and in this case it sorts them alpabetically
// function anagrams(stringA, stringB) {
//     return cleanStr(stringA) === cleanStr(stringB)
// }

// function cleanStr(str) {
//     return str
//         .replace(/[^\w]/g, '')
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('')
// }
