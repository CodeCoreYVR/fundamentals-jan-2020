function Vector(x = 0, y = 0) {
  this.x = x
  this.y = y
  
  // What happens when you return?
  // If you call without the "new" keyword
  // then this value will be returned
  return "I am a constructor"
}

// The "new" keyword is like setting "this" as an object
// and then returning it
let v1 = new Vector(5, 5)

// Constructor function
function Counter(initialCount = 0, step = 1) {
  this.count = initialCount
  this.step = step
  this.inc = function() {
    return this.count += this.step
  }
  this.dec = function() {
    return this.count -= this.step
  }
  this.now = function() {
    return this.count
  }
  this.reset = function() {
    this.count = 0
  }
}

// Same as above, but with class syntax
class Counter {
  constructor(initialCount = 0, step = 1) {
    this.count = initialCount
    this.step = step
    this.inc = function() {
      return this.count += this.step
    }
    this.dec = function() {
      return this.count -= this.step
    }
    this.now = function() {
      return this.count
    }
    this.reset = function() {
      this.count = 0
    }
  }
}

// To avoid making copies of methods on every instance,
// we put the methods on the prototype instead
// to do that we move the methods outside of the constructor
class Counter {
  constructor(initialCount = 0, step = 1) {
    this.count = initialCount
    this.step = step
  }
  inc() {
    return this.count += this.step
  }
  dec() {
    return this.count -= this.step
  }
  now() {
    return this.count
  }
  reset() {
    this.count = 0
  }
}
