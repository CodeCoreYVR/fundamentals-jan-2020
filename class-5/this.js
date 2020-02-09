const can = {
    a: 1,
    b: 2,
    c: 3,
    touchThis() { return this }
}

can.touchThis() // returns can object

// "this" will refer to something else if the method is separated from its obj
// this is called implicit binding of "this"
const cant = {}
cant.touchThis = can.touchThis
cant.touchThis() // return cant object

// Similarly, when we define a function, it doesn't know what arg is either
// until we invoke it and pass it an arg
function someFunc(arg) {
  return arg
}

someFunc(200)

const counter = {
  set(n) {
    this.count = n
  },
  step: 1,
  setStep(n) {
    this.step = n
  },
  inc() {
    return this.count += this.step
  },
  dec() {
    return this.count -= this.step
  },
  now() {
    return this.count
  },
  reset() {
    this.count = 0
  }
}

const car = {
  doors: 5,
  color: 'black',
  hp: 240,
  // pre ES6:
  park: function() {
    console.log('Parking...')
  },
  driving: () => console.log('Driving...'),
  // ES6 shorthand
  stop () {
    // if (this.speed > 120) {
    //   console.log('Screeeeetch')
    // } else if (this.speed > 80) {
    //   console.log('RRrch')
    // } else if (this.speed > 0) {
    //   console.log('sh')
    // } else {
    //   console.log('Yikes I don\'t know how fast I\'m going!!')
    // }
    if (typeof this.speed === "number" && this.speed > 0) {
      console.log(`Scr${'e'.repeat(this.speed)}ch!!`)
    } else {
      console.log('Yikes I don\'t know how fast I\'m going!!')
    }
  },
  setSpeed(kph) {
    this.speed = kph
  }
}
