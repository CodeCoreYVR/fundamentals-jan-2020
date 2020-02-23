// Higher order functions:
// A function that either takes in another function (callback)
// as a parameter or it returns a function
// In JS, functions are first-class, they can be returned 
// from other functions as values, and also passed around

const runFunc = function(func, arg) {
  func(arg)
}

function log(msg) {
  console.log(msg)
}

runFunc(log, 'hello there')
runFunc((num) => console.log(num + 1), 8)
