// A higher order function is a function that either:
// - takes in a function as a parameter
// - returns a function

// runThree
const runThree = func => {
  func()
  func()
  func()
}

// func is a function that is passed in as a parameter
// it is a callback
function call(n, func, times) {
  for (i = 1; i <= times; i++) {
    n = func(n)
  }
  return n
}

// Reverse engineer .map()
function map(arr, cb) {
  const output = []
  for (let element of arr) {
    output.push(cb(element))
  }

  return output
}

// Array of squares
map([1, 2, 3, 4, 5], n => n ** 2)

// get word lengths
map(['hello', 'data', 'eat cheese'], word => word.length)

// Rewrite using .forEach()
function map(arr, cb) {
  const output = []

  arr.forEach(element => {
    output.push(cb(element))
  })

  return output
}
