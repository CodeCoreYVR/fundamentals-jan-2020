// JS: Objects

// key/property - values
// keys are strings
// values can be any data-type
const myObj = {
  a: 1,
  b: '2',
  "c": true
}

const car = {
  doors: 5,
  colour: 'blue',
  // pre ES6:
  run: () => {
    console.log("running...")
  },
  // post ES6 shorthand
  openTrunk() {
    console.log('trunk opened')
  }
}

car.colour // "blue"
// car.run() // 'running...'
car.passengers // undefined

const me = {
  name: "Anson",
  age: 25,
  occupation: 'teacher'
}

me.occupation = 'javascript expert';
me.skills = ['ruby', 'rails', 'javascript'];

function countChars(string) {
  const characters = string.toLowerCase().split('')
  const charCount = {}

  for (let char of characters) {
    if (charCount[char]) {
      charCount[char]++
    } else {
      charCount[char] = 1
    }
  }
  return charCount;
}

// If there is only one param, parenthesis is optional
const getUserProperties = user => {
  console.log(this)
  console.log(`${user.name} is ${user.age} years old`)
}

getUserProperties({
  name: "Caleb",
  age: 20
})

function getWordLengths(sentence) {
  const words = sentence.split(' ')
  const wordLengths = {}
  const wordInstances = {} // Get the instances

  for (let word of words) {
    if (wordInstances[word]) {
      wordInstances[word]++
    } else {
      wordInstances[word] = 1
    }
    wordLengths[word] = word.length
  }
  return wordLengths
}

const obj = {
  i: 1,
  like: 4,
  i: 8
}
// object keys have to be unique
obj // { i: 8, like: 4}

// Delete a key/value pair by using the delete keyword
delete car.doors

// Shallow copy an object
const car2 = {...car}
const car3 = Object.assign({}, car)
