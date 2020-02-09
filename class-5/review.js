function returnZero(number) {
  return 0 * number;
}

const person = {
  name: 'Helga',
  age: 22,
}

const printPerson = (obj) => console.log(`${obj.name} is ${obj.age} years old`)

const wordLengths = function(sentence) {
  const output = {}
  const words = sentence.split(" ")
  /* 
    for (let word of words) {
      output[word] = word.length
    }
  */
  for (let i = 0; i < words.length; i++) {
    output[words[i]] = words[i].length
  }

  return output
} 

// typeof operator
typeof "foobar" // "string"
typeof 102 // "number"
typeof [] // "object"
typeof {} // "object"
typeof null // "object"
typeof undefined // "undefined"
typeof typeof 500 // "string"

// Check if value is an array:
Array.isArray([]) // true
Array.isArray({}) // false

// Scope:
{
  const a = 5
  console.log(a)
}
console.log(a)

// 5
// Uncaught ReferenceError: a is not defined
