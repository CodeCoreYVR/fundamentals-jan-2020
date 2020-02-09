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
    console.log('Stopping...')
  },
}
