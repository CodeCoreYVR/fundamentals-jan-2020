// JS Functions:
// A container for a piece of code that can be executed whenever
// The arguments are the values that are passed to function when called
// The parameters are the values within the function's code

// Function syntax:
// Function declaraction/statement:
function functionName(param1, param2) {
  // code and body of the function
  return // expression
}

// Function expression:
// A function without a name is called an anonmyous function
// Save that first-class function in a variable
const anotherFunction = function(param1, param2) {
  // code
  return // expression
}

// Arrow function (ES6+)
const arrow = (param1, param2) => {
  // code
  return // expression
}

// Invoke/call a function:
arrow(1, 2)

// save a returned value to a variable
let a = arrow(1, 2)

// If you don't have a return  statement, the function will return undefined when called
function returnUndefined(param1, param2) {
  // this will return undefined
}

function insult(name) {
  return `${name}, you doofus!`;
}

const increment = function(number) {
  return number + 1
} 

const repeat = (string, number) => {
  let output = ""
  for (let i = 1; i <= number; i++) {
    output += string
  }
  return output
}

