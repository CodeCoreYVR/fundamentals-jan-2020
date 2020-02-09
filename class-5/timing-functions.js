/*
 * setTimeout is a higher order function that will
 * execute a function after X amount of
 * milliseconds.
 * 
 * The setTimeout function receives 2 parameters
 *    1) a callback
 *    2) a number which represents milliseconds
*/

// Log out 'Hello' after 5 seconds
setTimeout(() => {
  console.log('Hello World')
} , 5000)

console.log('Ready')

setTimeout(() => {
  console.log('Set')
}, 1000)
setTimeout(() => {
  console.log('Go')
}, 2000)

// print a dot to the console every second
const dot = function () {
  console.log('.')
  setTimeout(dot, 1000)
}

dot()

// Log out 'Hello' every second
setInterval(() => {
  console.log('Hello')
}, 1000)

// Two intervals
let count = 0
setInterval(() => {
  if (count % 2 === 0) console.log(++count)
}, 1000)

setInterval(() => {
  if (count % 2 !== 0) console.log(++count)  
}, 1000)

// clearInterval after 10 seconds
const id = setInterval(() => {
  console.log('.')
}, 1000)

setTimeout(() => {
  clearInterval(id)
},10000)

// Blastoff
let count = 10
const id = setInterval(() => {
  if (count === 0) {
    console.log('Blast Off!!')
    clearInterval(id)
  } else {
    console.log(count--)
  }
}, 1000) 
