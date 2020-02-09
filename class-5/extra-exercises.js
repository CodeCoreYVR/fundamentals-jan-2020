const person = {
  name: 'Shurooq',
  age: 27,
}

function isOld(age) {
  if (age > 50) return 'Old'
  return 'Young'
}

function forEach(arr, cb) {
  for (let element of arr) {
    cb(element)
  }
}

function sayLater(string) {
  setTimeout(() => {
    document.getElementById('welcome').innerText = string
  }, 5000)
}
