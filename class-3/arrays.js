// JS Arrays:
// Arrays are an ordered collection of data

// Use square brackets [] to define an array
// Each element is separated by a comma
[1, 2, 'Anson', true, [3, 4]]

// You can also nest arrays
[1, [2, [3, 4]]]

// Ways to work with arrays:
let arr = [1, 2, 3, 4, 5]
arr.length // 5
arr[0] // 1

// Append elements:
// .push() appends values/elements to the end of the array
// returns the new array length
arr.push(6, 7) // returns 7 (the array length)
arr // [1, 2, 3, 4, 5, 6, 7]

// Remove last element:
// .pop() removes the last element of the array
// returns that element
arr.pop() // returns 7
arr // [1, 2, 3, 4, 5, 6]

// Remove first element:
// .shift() removes first element of the array
// returns that element
arr.shift() // returns 0
arr // [2, 3, 4, 5, 6]

// Add to the beginning of an array
// .unshift() adds elements to the begginning of an array
// returns us the new array length
arr.unshift(0, 1) // returns 7 (the array length)
arr // [0, 1, 2, 3, 4, 5, 6]

// .slice() returns a new array as a portion of the array it is called on
// slice(index1, index2)
// index1: the beginning index of the new array (inclusive)
// index2: the end of the new array (exclusive)
arr.slice(1, 3) // [1, 2]

// slice() does not mutate the array that it's called
arr // [1, 2, 3, 4, 5, 6]

const first = ["hello", 5, "a"]
first[1] = 6

const second = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
second.length // 11

// Sum an array
const numbers = [0, 5, 6, -12]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

// Log to the console a message of word length
const words = ["apple", "dog", "computer", "cup"]
for (let word of words) {
  console.log(`${word} had ${word.length} characters`)
}

// join() (array method) joins together all elements in an array, 
// separated by the argument that you pass in
// and returns a string
// it does NOT mutate the array that it was called on
words.join(' | ') // "apple | dog | computer | cup"

// split() (string method) returns an array split by 
// the argument that you pass in
"the dog jumps over the fence".split(' ')
// ["the", "dog", "jumps", "over", "the", "fence"]

let countWords = prompt('Enter a sentence').split(' ').length
alert(`There are ${countWords} words in that sentence`)

// Make a string containing all the numbers from 0-99
let stringArr = [];
for (let i = 0; i <= 99; i++) {
	stringArr.push(i)
}
stringArr.join('')
